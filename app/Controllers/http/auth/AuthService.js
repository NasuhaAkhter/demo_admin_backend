'use strict'
const AuthValidator = use('./AuthValidation')
const AuthQuery = use('./AuthQuery')
const Mail = use('Mail')
const moment = require('moment') 
const User = use('App/Models/User')
const Hash = use('Hash')
// let sgMail = require('@sendgrid/mail');
//  sgMail.setApiKey('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');

class AuthService { 
    
    constructor(){ 
      this.authValidator = new AuthValidator()
      this.authQuery = new AuthQuery()
    }
    
    async darkModeSave(data,response, auth){
        let user = await auth.getUser()
        let uid = user.id
        return this.authQuery.darkModeSave(data, uid)
    }
    async lightModeSave(data,response, auth){
        let user = await auth.getUser()
        let uid = user.id
        return this.authQuery.lightModeSave(data, uid)
    }
    async createUser(data,response, auth){
        const validation = await this.authValidator.validateRegisterData(data)
        if (validation.fails()) {
          return response.status(401).send(validation.messages())
        }
        let username = data.firstName +'_'+data.lastName
        let totalUsers = await this.authQuery.countUserFieldByKey('username', username)
        let newCount = totalUsers > 0 ? ++totalUsers : ''
        if(newCount > 0){
            username = username+'_'+ newCount
        }
        let number =Math.floor(Math.random() * 899999 + 100000)
        let newPass = await Hash.make(data.password)
        const user =  await this.authQuery.createUser({
            firstName : data.firstName,
            lastName : data.lastName,
            password: newPass,
            email : data.email,
            token: number,
            token_created_at: new Date(),
            username : username,
            is_agree : true,
        })
        try{
          await Mail.send('emails.verify_email', user.toJSON(), (message) => {
            message.from('foo@bar.com')
            message.to(user.email)
            message.subject('Please confirm your email address.')
          })
           
        }catch(e){
          // return response.status(401).json(
          //   {
          //     'message': 'Invalid email address. Please try again.'
          //   }
          // )
        }
        await auth.login(user)
        return user
    }
    
    async login(data, response, auth){
      // return "logged "
      let validation = await this.authValidator.validateLoginData(data)
        if (validation.fails()) {
          return response.status(401).send(validation.messages())
      }
      let user = await auth.query(function (query) {query.where('is_active', true).where('userType','Admin')}).attempt(data.email, data.password)
      // console.log(auth.getUser())
      return user
    }

    // async verifyUserEmail(ctx){
    //   let data = ctx.request.all()
    //   const validation = await this.authValidator.validateVerificationData(data)
      
    //   if (validation.fails()) {
    //     return ctx.response.status(401).send(validation.messages())
    //   }
      
    //   const code = await User.findBy('token',data.verificationCode)
    //   if(!code){
    //     return ctx.response.status(406).send({message:'Verification code is wrong.'})
    //   }
    //   const user =  await this.authQuery.updateUserInfo('id', code.id,{
    //       token : null,
    //       token_created_at : null,
    //       is_active : true,
    //   })
      

    //   await auth.login(code)
    //   return code

    // }
    
    async verifyUserEmail(data, response, auth){
      // let data = request.all()
      const validation = await this.authValidator.validateVerificationData(data)
      
      if (validation.fails()) {
        return response.status(401).send(validation.messages())
      }
      
      const code = await User.findBy('token',data.verificationCode)
      if(!code){
        return response.status(406).send({message:'Verification code is wrong.'})
      }
      const user =  await this.authQuery.updateUserInfo('id', code.id,{
          token : null,
          token_created_at : null,
          is_active : true,
      })
      

      await auth.login(code)
      return code

    }
    
    async verifyResetPassword(data,response, auth){
  
      const userInfo = await User.findBy('email', data.email)
      let number =Math.floor(Math.random() * 899999 + 100000)
      const user =  await this.authQuery.updateUserInfo('id', userInfo.id,{
          token : number,
          token_created_at : new Date()
      })
      try{
        await Mail.send('emails.verify_email', userInfo , (message) => {
          message.from('nasuhaakhter52@gmail.com')
          message.to(userInfo.email) 
          message.subject('Please confirm your email address.')
        });
        
      }catch(e){
        // return response.status(401).json(
        //   {
        //     'message': 'Invalid email address. Please try again.'
        //   }
        // )
      }
      return user 

    }
    
    
    
  
    async verifyResetPasswordCode(data,response, auth){
      const validation = await this.authValidator.validateResetPasswordData(data)
      
      if (validation.fails()) {
        return response.status(401).send(validation.messages())
      }
      
      // const code = await User.findBy('token',data.verificationCode)
        
      const userInfo = await User.findBy('token', data.verificationCode)
      
      if(userInfo){
        return response.json('code verified') 
      }

    }
    
    
         //Reset-old-Password
    async resetOldPassword(data,response, auth){
      const validation = await this.authValidator.validateResetPasswordData(data)
      if (validation.fails()) {
        return response.status(401).send(validation.messages())
      }
      const userInfo = await User.findBy('token', data.token)
      if(!userInfo){
        return response.status(401).send({message:'Invalid token!'})
      }
      if(data.email != userInfo.email ){
        return response.status(401).send({message:'Invalid token!'})
      }
      const tokenExpired = moment().subtract(2, 'days').isAfter(userInfo.token_created_at)
        if (tokenExpired) {
          return response.status(406).json('token expired') 
        }
      await this.authQuery.updateUserInfo('id', userInfo.id,{
          password : await Hash.make(data.password),
          token : null,
          token_created_at : null
      })
      return await this.login({email:userInfo.email, password:data.password}, response, auth)    
  }
    
  
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  


}

module.exports = AuthService

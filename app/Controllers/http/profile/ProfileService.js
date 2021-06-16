'use strict'
const ProfileValidator = use('./ProfileValidation')
const ProfileQuery = use('./ProfileQuery')
const Mail = use('Mail')
const moment = require('moment') 

const User = use('App/Models/User')
const Hash = use('Hash')

class ProfileService {
    constructor(){
        this.profileValidator = new ProfileValidator()
        this.ProfileQuery = new ProfileQuery()
      }
    
    
        //updateSocialLink
   async updateSocialLink(data,response, auth){
       
    //    const userInfo = await User.findBy('email', data.email)
       
      const user = await this.ProfileQuery.updateUserInfo('id', auth.user.id,{
           facebook : data.facebook,
           twitter : data.twitter,
           youtube : data.youtube,
           linkedin : data.linkedin,
           instagram : data.instagram,
       })
       
       return user
   }
          
   async updateEmail(data,response, auth){
        const validation = await this.profileValidator.validateEmailUpdateData(data)
        
        if (validation.fails()) {
        return response.status(401).send(validation.messages())
        }
        
        const userInfo = await User.findByOrFail('email', auth.user.email)
        
       // generating number
       let number =Math.floor(Math.random() * 899999 + 100000)
       
       await this.ProfileQuery.updateUserInfo('id', auth.user.id,{
           token : number,
           token_created_at : new Date()
       })
       
       await Mail.send('emails.verify_email', userInfo.toJSON(), (message) => {
        message.from('foo@bar.com')
        message.to(data.newEmail)
        message.subject('Please confirm your email address')
      })
       
       return data.newEmail
   }
          
          
   async verifyNewEmail(data,response, auth){
        const validation = await this.profileValidator.validateEmailCodeData(data)
        
        if (validation.fails()) {
        return response.status(401).send(validation.messages())
        }
        
        
        
    
       const user =  await this.ProfileQuery.updateUserInfo('id', auth.user.id,{
           token : null,
           token_created_at : null,
           email : data.email,
       })
       
       const userInfo = await User.findBy('email', data.email)
       
       return userInfo
   }
          
          
   async changePassword(data,response, auth){
        const validation = await this.profileValidator.validateNewPasswordData(data)
        
        if (validation.fails()) {
          return response.status(401).send(validation.messages())
        }        
        const userInfo = await User.findBy('email',auth.user.email)
        
        const check = await Hash.verify(data.currentPassword, userInfo.password)
        if (check){
            // generating number
            let number =Math.floor(Math.random() * 899999 + 100000)
            
                
            const user =  await this.ProfileQuery.updateUserInfo('id', userInfo.id,{
                token : number,
                token_created_at : new Date()
            })
            // registering when token was created and saving token
            // user.token_created_at = new Date()
            // user.token = number
            // await user.save()
            
              await Mail.send('emails.verify_email', userInfo.toJSON(), (message) => {
                message.from('foo@bar.com')
                message.to(userInfo.email)
                message.subject('Please confirm your email address')
              })
              
              return data.newPassword
        }else{
            
          return response.status(406).json('password doesn`t match')
        }
   }
          
          
          
   async verifyNewPasswordCode(data,response, auth){
        const validation = await this.profileValidator.validateNewPasswordCode(data)
        
        if (validation.fails()) {
        return response.status(401).send(validation.messages())
        }
        
      // get user with the cinfirmation token
      const userInfo = await User.findBy('email',auth.user.email)
      
      // set confirmation to null and is_active to true
      if(userInfo.token === data.code){
        const user =  await this.ProfileQuery.updateUserInfo('id', userInfo.id,{
            token : null,
            token_created_at : null,
            password : await Hash.make(data.password),
            
        })
        
       return user;
       
      }else{
        return response.status(406).json('invalid')
      }
      
   }
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
}

module.exports = ProfileService

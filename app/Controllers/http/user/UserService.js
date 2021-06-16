'use strict'
const UserValidator = use('./UserValidation')
const UserQuery = use('./UserQuery')
const Mail = use('Mail')
const moment = require('moment') 

const User = use('App/Models/User')
const Hash = use('Hash')

class UserService {
    constructor(){
        this.UserValidator = new UserValidator()
        this.UserQuery = new UserQuery()
    }
    async getAllUser(filterField, page,response, auth){
       const user = await this.UserQuery.getAllUser(filterField, page)
       return user 
    }
    async addProfilePicture(data,response, auth){
      let user = await auth.getUser()
      let uid = user.id
      const profile_picture = await this.UserQuery.addProfilePicture(data, uid)
      return this.UserQuery.singleUser(uid)
    }  
    async updatePassword(data,response, auth){
      const validation = await this.UserValidator.validateNewPasswordData(data)
      if (validation.fails()) {
        return response.status(401).send(validation.messages())
      }        
      const userInfo = await User.findBy('email',auth.user.email)
      const check = await Hash.verify(data.currentPassword, userInfo.password)
       if (check){
          let number =Math.floor(Math.random() * 899999 + 100000)
          const user =  await this.UserQuery.updateUser({
              id:userInfo.id,
              token : number,
              token_created_at : new Date(),
              password:await Hash.make(data.password),
          })
          // registering when token was created and saving token
          // user.token_created_at = new Date()
          // user.token = number
          // await user.save()
            // await Mail.send('emails.verify_email', userInfo.toJSON(), (message) => {
            //   message.from('foo@bar.com')
            //   message.to(userInfo.email)
            //   message.subject('Please confirm your email address')
            // })
            return data.password
      }else{
        return response.status(406).json('Current password doesn`t match')
      }
    }
    async addUser(data,response, auth){
       const validation = await this.UserValidator.validateRegisterData(data)
        if (validation.fails()) {
          return response.status(401).send(validation.messages())
        }
        let username = data.firstName +'_'+data.lastName
        let totalUsers = await this.UserQuery.countUserFieldByKey('username', username)
        let newCount = totalUsers > 0 ? ++totalUsers : ''
        if(newCount > 0){
            username = username+'_'+ newCount
        }
       const user = await this.UserQuery.createUser({
        firstName  : data.firstName,
        lastName : data.lastName,
        username : username,
        email : data.email,
        contact : data.contact,
        profile_picture : data.profile_picture,
        gender : data.gender,
        is_active : 1,
        password: await Hash.make(data.password),
      })
      if (!user) {
        return false
      }
       return user
    }
    async updateUser(data,response, auth){
      // email verification
      // password validation
      // unique username
       const user = await this.UserQuery.updateUser({
        id  : data.id,
        firstName  : data.firstName,
        lastName : data.lastName,
        email : data.email,
        contact : data.contact,
        profile_picture : data.profile_picture,
        gender : data.gender,
        is_active : 1,
       })
      if (!user) {
        return false
      }
       return this.UserQuery.singleUser(data.id)
    }
    async deleteUser (data,response, auth){
      const user = await this.UserQuery.deleteUser( 
         data.id,
       )
        if (!user) {
          return false
        }
       return user

    }
    async get_home_data(data,response, auth){
      const latestUser = await this.UserQuery.getLatestUser()
      const latestBlogs = await this.UserQuery.getlatestBlogs()
      const totalBlogs = await this.UserQuery.gettotalBlogs()
      const totalUsers = await this.UserQuery.gettotalUsers()
      const totalCourse = await this.UserQuery.gettotalCourse()
      const dashboard_data = {
        latestUser:latestUser,
        latestBlogs:latestBlogs,
        totalBlogs:totalBlogs,
        totalCourse:totalCourse,
        totalUsers:totalUsers,
      }
      return dashboard_data

    }
           
          
          
          
          
          
          
          
          
}

module.exports = UserService

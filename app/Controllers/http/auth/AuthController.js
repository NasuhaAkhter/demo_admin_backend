'use strict'
// import AuthQuery from './AuthQuery'
// import AuthValidation from './AuthValidation'

// const AuthQuery = new AuthQuery
// const authRules = new AuthValidation
const AuthService = use('./AuthService') 
const User = use('App/Models/User')

class AuthController { 
    constructor(){
        this.authService = new AuthService() 
    }
     
    
  async getAuthUser({ auth}){
       try {
        const user = await auth.getUser()
        return user
      } catch (error) {
           return error
      }

  }
  async initdata ({ request, response, auth }) {
    //   return "hello"
    try {
      const user = await auth.getUser()
      return user
    } catch (error) {
      console.log(error.message)
      return false
    }
}
    async registerUser({request, response, auth}){
        return this.authService.createUser(request.all(), response, auth)
  
    }
    async darkModeSave({request, response, auth}){
        return this.authService.darkModeSave(request.all(), response, auth)
    }
    async lightModeSave({request, response, auth}){
        return this.authService.lightModeSave(request.all(), response, auth)
    }
    async login({request, response, auth}){
        return this.authService.login(request.all(), response, auth)
    }   
    // async verifyRegEmail(ctx){
    //     return this.authService.verifyUserEmail(ctx)
    // }
    
    async verifyRegEmail({request, response, auth}){
        return this.authService.verifyUserEmail(request.all(), response, auth)
    }
    
    async sendResetLink({request, response, auth}){
        return this.authService.verifyResetPassword(request.all(), response, auth)
    }
    
    async verifyPasswordResetCode({request, response, auth}){
        return this.authService.verifyResetPasswordCode(request.all(), response, auth)
    }
    
    async passwordReset({request, response, auth}){
        return this.authService.resetOldPassword(request.all(), response, auth)
    }
      
    async logout({auth, session}){ 
        session.clear()
         await auth.logout()
         return "Logged Out"
     }
    
    
    
    
    
    
    
    
    
    
} 

module.exports = AuthController

'use strict'
const User = use('App/Models/User')
class UserController {
    
   async user1({request, response, params, auth}){
       try {
          const user = await auth.loginViaId(34)

       } catch (error) { 
          return error
       }
 
   }
   async login({request, response,view,auth }){
      const data = request.all();
      try {
        // return data
        //  let user = await auth.authenticator('admin').query().attempt(data.email, data.password) 
        let user = await auth.query().attempt(data.email, data.password) 
        return user;
      } catch (e) {
          return response.status(401).json({  
              'message': "Password doesn't match !"
          })
      }  
    } 

   
  async initdata ({ request, response, auth }) {
     try {
      const user = await auth.getUser()
        // user: user
        return user
       
    } catch (error) {
      console.log(error.message)
      return false
    }
}
  async logout({request, response, params, auth}){
      await auth.logout()
      return 'logged out'
  }

}

module.exports = UserController

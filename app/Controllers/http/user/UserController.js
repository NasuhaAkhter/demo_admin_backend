'use strict'
const UserService = use('./UserService')
 
 
class UserController {
     
    constructor(){
        this.UserService = new UserService() 
    }
    async getAllUser({request, response, auth}){
        return this.UserService.getAllUser(request.input('filterField'),request.input('page'), response, auth)
    } 
    async updateUser({request, response, auth}){
        return this.UserService.updateUser(request.all(), response, auth)
    }
    async addUser({request, response, auth}){
        return this.UserService.addUser(request.all(), response, auth)
    }
    async addProfilePicture({request, response, auth}){
        return this.UserService.addProfilePicture(request.all(), response, auth)
    }
    async updatePassword({request, response, auth}){
        return this.UserService.updatePassword(request.all(), response, auth)
    }
    async deleteUser({request, response, auth}){
        return this.UserService.deleteUser(request.all(), response, auth)
    }
    async get_home_data({request, response, auth}){
        return this.UserService.get_home_data(request, response, auth)
    }    
}

module.exports = UserController

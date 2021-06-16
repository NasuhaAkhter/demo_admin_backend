const User = use('App/Models/User')

class AuthQuery {
    
    createUser(user){
       return User.create(user)
    }  
    darkModeSave(data, id){
       return User.query().where('id', id).update({'dark_mode':data.dark_mode})
    }  
     
    lightModeSave(data, id){
       return User.query().where('id', id).update({'dark_mode':data.dark_mode})
    }  
     
    countUserFieldByKey(column, value){
       return User.query().where(column, value).getCount()
    }
    
    updateUserInfo(column, value, user){
      return User.query().where(column, value).update(user)
    }
    
    
   //  verifyResetPasswordCode(column, value, user){
   //    return User.query().where(column, value).update(user)
   //  }
    
   //  updateSocialLink(column, value, social){
   //     return User.query().where(column, value).update(social)
   //  }
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
}

module.exports = AuthQuery
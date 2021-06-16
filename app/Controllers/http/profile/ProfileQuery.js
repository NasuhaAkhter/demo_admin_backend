const User = use('App/Models/User')

class ProfileQuery {  
    
    
    updateUserInfo(column, value, profile){
        return User.query().where(column, value).update(profile)
    }   
    
    
    
    
    
    
    
}


module.exports = ProfileQuery
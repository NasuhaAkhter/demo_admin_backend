'use strict' 

const { validate, rule } = use('Validator')

class UserValidation {
    registerRules(){
        return {
            firstName: 'required|string|max:255',
            lastName: 'required|string|max:255',
            email: 'required|string|max:255|email|unique:users',
            password: 'required|string|min:6',
            gender: 'required|string',
      }
    }
    messages () {
        return {
            'firstName.required' : 'First name is required',
            'lastName.required' : 'Last name is required',
            'gender.required' : 'Gender is required',
            'email.required' : 'Email is required',
            'email.unique':'This email already in use. Choose a different one.',
            'password.required' : 'Password is required',
            'password.minLength' : 'Password must be at least 6 characters long',
            'password_confirmation.confirmed':'The password confirmation doesn`t match.',
        }
      }
      async validateRegisterData (data) {
        return validate(data, this.registerRules(), this.messages())
      }
      newPasswordRules(){
        return {
            password: 'required|string|min:6'
      }
    }
    
    newPasswordMessages () {
        return {
            'password.required':'Password is required',
            'password.min' : 'Password must be at least 6 characters long',

        }
      }
    async validateNewPasswordData (data) {
        return validate(data, this.newPasswordRules(), this.newPasswordMessages())
    }
    emailUpdateRules(){
        return {
            newEmail: 'required|string|max:255|email|unique:users,email'
      }
    }
    emailUpdateMessages () {
        return {
            'newEmail.unique':'This email is already in use .',
            'newEmail.max':'The email must not be greater than 255 charecters.',
        }
    }
    async validateEmailUpdateData (data) {
        return validate(data, this.emailUpdateRules(), this.emailUpdateMessages())
    }
    
    
    verifyEmailUpdateRules(){
        return {
            token: 'required|string|max:6'
      }
    }
    
    verifyEmailUpdateMessages () {
        return {
            'token.required':'Token is required'
        }
      }
    
    async validateEmailCodeData (data) {
        return validate(data, this.verifyEmailUpdateRules(), this.verifyEmailUpdateMessages())
    }
    
    
     
    
    
    verifyNewPasswordCodeRules(){
        return {
            code: 'required|string|max:6'
      }
    }
    
    verifyNewPasswordCodeMessages () {
        return {
            'code.required':'Verification code is required'
        }
      }
    
    async validateNewPasswordCode (data) {
        return validate(data, this.verifyNewPasswordCodeRules(), this.verifyNewPasswordCodeMessages())
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}



module.exports = UserValidation
'use strict'
const OtherValidation = use('./OtherValidation')
const OtherQuery = use('./OtherQuery')
const Question = use('App/Models/Question')
class OtherService {
    constructor(){
      this.OtherValidation = new OtherValidation()
      this.OtherQuery = new OtherQuery()
    }
    async getQuestions( filterField, page, response, auth ){
       
      let YourQuestions = await this.OtherQuery.getQuestions(filterField,page)
      if (!YourQuestions) {
        return false
      }
      return YourQuestions
    }
    async addQuestion( data, response, auth ){
      let uid = 0
      var user = {}
      try {
          user = await auth.getUser()
          uid = user.id
      }catch (error) {
        return response.status(401).send({message: 'You are not authorized!'})
      }
      const validation = await this.OtherValidation.validateQuestionData(data)
      if (validation.fails()) {
        return response.status(422).send({message: 'Invalid question data.'})
      }
      let YourQuestions = await this.OtherQuery.addQuestion({
        question:data.question,
        answer:data.answer,
        user_id:uid
      })
      if (!YourQuestions) {
        return false
      }
      return YourQuestions
    }
    async updateQuestion(data,response, auth){            
      let uid = 0
      var user = {}
      try {
          user = await auth.getUser()
          uid = user.id
      }catch (error) {
        return response.status(401).send({message: 'You are not authorized!'})
      }
      const validation = await this.OtherValidation.validateQuestionData(data)
      if (validation.fails()) {
        return response.status(422).send({message: 'Invalid question data.'})
      }
      const update_question = await this.OtherQuery.update_question({
          id : data.id,
          question : data.question,
          answer : data.answer,
          user_id : uid,
       })
      return update_question
  }
  async deleteQuestion(data,response, auth){           
      const delete_blog = await Question.query().where('id', data.id).delete() 
      return delete_blog
  }
     




}

module.exports = OtherService
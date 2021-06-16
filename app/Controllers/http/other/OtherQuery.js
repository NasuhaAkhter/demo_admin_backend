'use strict'
const Question = use('App/Models/Question')
  
class OtherQuery{ 
  async getQuestions(filterField, page){ 
    let allData =  Question.query()
    if(filterField){
          allData.where('question', 'LIKE','%'+filterField+'%')
          allData.orWhere('answer', 'LIKE','%'+filterField+'%')
    }
    return await allData.orderBy('id', 'desc').paginate(page, 10)
  }
  addQuestion(data){
    return Question.create(data) 
  }
  update_question(data){
    return Question.query().where('id', data.id).update(data)
  } 
     
} 


module.exports = OtherQuery
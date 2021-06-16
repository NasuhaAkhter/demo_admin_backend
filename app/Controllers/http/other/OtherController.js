'use strict'
const OtherService = use('./OtherService')

class OtherController {

  constructor(){
      this.OtherService = new OtherService()
  } 

  async getQuestions({ request, response, auth }){
      return this.OtherService.getQuestions(request.input('filterField'), request.input('page'), response, auth )
  }
   
  async addQuestion({  request, response, auth  }){
    return this.OtherService.addQuestion(request.all(), response, auth)
  }
  async deleteQuestion({  request, response, auth  }){
    return this.OtherService.deleteQuestion(request.all(), response, auth)
  }
  async updateQuestion({  request, response, auth  }){
    return this.OtherService.updateQuestion(request.all(), response, auth)
  }

}


module.exports = OtherController
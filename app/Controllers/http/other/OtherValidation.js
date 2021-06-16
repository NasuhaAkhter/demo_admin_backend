const { validateAll } = use('Validator')

class OtherValidation {

     
    questionData(){
      return {
        question: 'required|string',
      }
    }
    async validateQuestionData(data){
       return validateAll(data, this.questionData())
    }

}

module.exports = OtherValidation
const { validateAll } = use('Validator')
class CourseValidation {

    createRules(){
      return {
        comment_id: 'required',
      }
    }

    async validateLikeData(data){
      return validateAll(data, this.createRules())
    }
    createLikeRules(){
      return {
        comment_id: 'required',
      }
    } 
    async validateCommentLikeData(data){
      return validateAll(data, this.createLikeRules())
    }
    createReplyLikeRules(){
      return {
        id: 'required',
        comment_id: 'required',
      }
    }
    async validateReplyLikeData(data){
      return validateAll(data, this.createReplyLikeRules())
    }

}

module.exports = CourseValidation
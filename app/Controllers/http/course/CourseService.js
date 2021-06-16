'use strict'
  
 const CourseQuery = use('./CourseQuery')
 const CourseValidation = use('./CourseValidation')


class CourseService { 
    
    constructor(){ 
      this.CourseValidation = new CourseValidation()
      this.CourseQuery = new CourseQuery()
    }
    async getAllCourses(filterField, page,response, auth){ 
       let LatestCourse = await this.CourseQuery.getAllCourses(filterField, page)
      if (!LatestCourse) {
        return false
      }
      return LatestCourse
    }
    async addCourse(data,response, auth){ 
      if(!auth){
          return "Please Login!"
      }
      let user =  await auth.getUser()       
      let user_id = user.id
      let create_course = await this.CourseQuery.create_course({
          title : data.title,
          description : data.description,
          cover_pic: data.cover_pic,
          user_id : user_id,
          data : JSON.stringify(data.data),
          activity_type : "Course",
      })
      create_course = create_course.toJSON()
      create_course.data = JSON.parse(create_course.data)
      return create_course
    }
    async updateCourse(data,response, auth){ 
      if(!auth){
          return "Please Login!"
      }
      let user =  await auth.getUser()       
      let user_id = user.id
      const update_course = await this.CourseQuery.update_course({
          id : data.id,
          title : data.title,
          description : data.description,
          cover_pic: data.cover_pic,
          user_id : user_id,
          data : JSON.stringify(data.data),
          activity_type : "Course",
      })
      return update_course
    }
    async getSingleCourse(data,response, auth){
      let SingleCourse = await this.CourseQuery.getSingleCourse(data)
      SingleCourse = SingleCourse.toJSON()
      if (!SingleCourse) {
        return false
      }
      return SingleCourse
  }






    async searchBlogOrCourse(data,response, auth){ 
      let searchResult = await this.CourseQuery.searchBlogOrCourse(data)
      if (!searchResult) {
        return false
      }
      return searchResult
    }
    async totalCourse(data,response, auth){
      let total  = await this.CourseQuery.getTotalCourse(data)
      if (!total) {
        return false
      }
      return total
    }
   
  
}

module.exports = CourseService

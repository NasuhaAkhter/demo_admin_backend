'use strict'
const CourseService = use('./CourseService') 
 
class CourseController { 
  constructor(){
    this.CourseService = new CourseService() 
  }
  async getAllCourse({  request, response, auth  }){
    return this.CourseService.getAllCourses( request.input('filterField'), request.input('page'), response, auth)
  }
  async addCourse({  request, response, auth  }){
    return this.CourseService.addCourse(request.all(), response, auth)
  }
  async updateCourse({  request, response, auth  }){
    return this.CourseService.updateCourse(request.all(), response, auth)
  }
  async getSingleCourse({  request, response, auth  }){
    return this.CourseService.getSingleCourse(  request.input('id'), response, auth)
  }



  async totalCourse({  request, response, auth  }){
    return this.CourseService.totalCourse( request, response, auth)
  }
  
  async searchBlogOrCourse({  request, response, auth  }){
    return this.CourseService.searchBlogOrCourse(  request.input('str'), response, auth)
  }
} 

module.exports = CourseController

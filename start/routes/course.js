
const Route = use('Route')

Route.group(() =>{
      Route.get('/getAllCourse', 'Course/CourseController.getAllCourse')
      Route.get('/getSingleCourse', 'Course/CourseController.getSingleCourse')
      Route.post('/addCourse', 'Course/CourseController.addCourse')
      Route.post('/updateCourse', 'Course/CourseController.updateCourse')
 }).prefix('course') 
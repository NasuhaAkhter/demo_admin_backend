const BlogPost = use('App/Models/BlogPost')
const Database = use('Database')

class CourseQuery {
      async getAllCourses( filterField, page){
            let allData =  BlogPost.query()
            if(filterField){
                  allData.where('title', 'LIKE','%'+filterField+'%')
            }
            return await allData.where('activity_type', "Course").orderBy('id', 'desc').with('user')
        .paginate(page, 10)     
      //   for (let i of status.data) {
      //       if (i.data) {
      //           i.data = JSON.parse(i.data)
      //       }
      //   }    
      } 
      create_course(blogPost){
          return BlogPost.create(blogPost)
      }  
      update_course(blogPost){
          return BlogPost.query().where('activity_type', "Course").where('id', blogPost.id).update(blogPost)
      } 
      getSingleCourse(data){
            return BlogPost.query().where('activity_type', "Course").where('id', data).with('user').first()
      } 








      async getTotalCourse(data){
            const count = await Database
            .from('blog_posts').where('activity_type', "Course").count('* as total')
            const total = count[0].total  
            return total
      }
      
      viewCount(data){
           return BlogPost.query().where('id', data).increment('views',1)
      }
      searchBlogOrCourse(data){
           return BlogPost.query().where('title', 'LIKE', '%'+data+'%').fetch()
      }
}

module.exports = CourseQuery
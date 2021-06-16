const BlogPost = use('App/Models/BlogPost')

class BlogQuery {
    async getAllBlog( filterField, page){
        let allData =  BlogPost.query()
        if(filterField){
            allData.where('title', 'LIKE','%'+filterField+'%')
        }
        return await allData.where('activity_type', "Blog").orderBy('id', 'desc').with('user')
        .paginate(page, 10)         
    } 
    create_blog(blogPost){
        return BlogPost.create(blogPost)
    }  
    update_blog(blogPost){
        return BlogPost.query().where('id', blogPost.id).update(blogPost)
    }     
}

module.exports = BlogQuery
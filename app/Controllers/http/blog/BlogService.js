'use strict'
const Tag = use('App/Models/Tag')
const BlogPost = use('App/Models/BlogPost')

const BlogQuery = use('./BlogQuery')
const Helpers = use('Helpers')
const Env = use('Env')
class BlogService { 
    
    constructor(){ 
       this.BlogQuery = new BlogQuery() 
    }
    async getAllBlog(filterField, page,response, auth){ 
        let LatestBlog = await this.BlogQuery.getAllBlog(filterField, page)
       if (!LatestBlog) {
         return false
       }
       return LatestBlog
     }
    async addBlog(data,response, auth){ 
        if(!auth){
            return "Please Login!"
        }
        let user =  await auth.getUser()       
        let user_id = user.id
        // return auth.getUser      
        const create_blog = await this.BlogQuery.create_blog({
            title : data.title, 
            description : data.description,
            cover_pic: data.cover_pic,
            user_id : user_id,
            activity_type : "Blog",
        })
        return create_blog
    }
    async updateBlog(data,response, auth){            
               
        const update_blog = await this.BlogQuery.update_blog({
            id : data.id,
            title : data.title,
            description : data.description,
            cover_pic: data.cover_pic,
            user_id : data.user_id,
            activity_type : "Blog",
        })
        return update_blog
    }
    async deleteBlog(data,response, auth){           
        const delete_blog = await BlogPost.query().where('id', data.id).delete() 
        return delete_blog
    }
    async getSingleBlog(data,response, auth){       
        // return data    
        const SingleBlog = await BlogPost.query().where('id', data).first() 
        return SingleBlog
    }
    async uploadImage(data, response , auth ) {
          const file = data.file('file', {
            types: ['image', 'video'],
            size: '50mb'
        })
        if (file) {
            const type = file.toJSON().extname.toLowerCase();
            const name = `image_${new Date().getTime()}.${type}`
            // UPLOAD THE IMAGE TO UPLOAD FOLDER
            await file.move(Helpers.publicPath('uploads'), {
                name: name
            })
            if (!file.moved()) {
                console.log('error')
                return file.error()
            }
            let fileType
            if (type == 'mp4' || type == 'flv' || type == 'wmv' || type == 'mkv' || type == 'mov') {
                fileType = 'video'
            }
            if (type == 'jpg' || type == 'jpeg' || type == 'png' || type == 'gif') {
                fileType = 'image'
            }
            return response.status(200).json({
                message: 'File has been uploaded successfully!',
                url: `${Env.get('APP_URL')}/uploads/${name}`,
                extType: type,
                fileType: fileType
            })
        }
        return response.status(200).json({
            message: 'Invalid Request!'
        })
    }
    async createTag(data,response, auth){    
        return 0
    }
    async updateTag(data,response, auth){           
        const update_blog = await Tag.query().where('id', data.id).update() 
        return update_blog
    }
    async deleteTag(data,response, auth){           
        const delete_tag = await Tag.query().where('id', data.id).delete() 
        return delete_tag
    }
}

module.exports = BlogService

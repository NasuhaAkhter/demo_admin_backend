'use strict'
const BlogService = use('./BlogService') 
const BlogPost = use('App/Models/BlogPost')
const Tag = use('App/Models/Tag')
const Helpers = use('Helpers')
const Env = use('Env')
class BlogController {  
    constructor(){
        this.BlogService = new BlogService() 
    }
     
  async getBlogTags({ request, response, auth }){ 
    // return await Tag.all()
    let page = request.input('page') ? request.input('page') : 1;
    let pageSize = request.input('pageSize') ? request.input('pageSize') : 10;
    let tag_raw = Tag.query()
         .orderBy('id', 'desc')
    let tag = await tag_raw.paginate(page, pageSize)
    if (!tag) {
        return []
    }
    // tag = tag.toJSON();
    // for (let i of tag.data) {
    //     if (i.data) {
    //         i.data = JSON.parse(i.data)
    //     }
    // }
    return tag
  }
  async getAllBlog({ request, response, auth }) {
    return this.BlogService.getAllBlog( request.input('filterField'), request.input('page'), response, auth)
  }
  async getSingleBlog({  request, response, auth  }){
    return this.BlogService.getSingleBlog( request.input('id'), response, auth)
  }
  async deleteBlog({  request, response, auth  }){
    return this.BlogService.deleteBlog(request.all(), response, auth)
  }
  async updateBlog({  request, response, auth  }){
    return this.BlogService.updateBlog(request.all(), response, auth)
  }
  async addBlog({  request, response, auth  }){
    return this.BlogService.addBlog(request.all(), response, auth)
  }
  async uploadImage({  request, response, auth  }){
      return this.BlogService.uploadImage(request, response, auth)
  }
  async deleteTag({  request, response, auth  }){
    return this.BlogService.deleteTag(request.all(), response, auth)
  }

} 

module.exports = BlogController

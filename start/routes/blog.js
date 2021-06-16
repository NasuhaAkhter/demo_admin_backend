
const Route = use('Route')

Route.group(() =>{
    Route.post('/getSingleBlog', 'Blog/BlogController.registerUser')
    Route.get('/getSingleBlog', 'Blog/BlogController.getSingleBlog')
    Route.get('/getAllBlog', 'Blog/BlogController.getAllBlog')
    Route.get('/getBlogTags', 'Blog/BlogController.getBlogTags')
    Route.post('/deleteBlog', 'Blog/BlogController.deleteBlog')
    Route.post('/addBlog', 'Blog/BlogController.addBlog')
    Route.post('/updateBlog', 'Blog/BlogController.updateBlog')
    Route.post('/upload/image', 'Blog/BlogController.uploadImage')
 }).prefix('blog') 
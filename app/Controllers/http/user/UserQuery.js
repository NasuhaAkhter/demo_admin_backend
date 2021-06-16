const User = use('App/Models/User')
const Database = use('Database')
const BlogPost = use('App/Models/BlogPost')

class UserQuery {  
    getLatestUser(){
        return User.query().limit(5).fetch()
    }
    getlatestBlogs(){
        return BlogPost.query().where('activity_type', "Blog").with('user').limit(5).fetch()
    }
    async gettotalBlogs(){
        const count = await Database
        .from('blog_posts').where('activity_type', "Blog").count('* as total')
        const total = count[0].total  
        return total
    }
    async gettotalUsers(){
        const count = await Database
        .from('users').count('* as total')
        const total = count[0].total  
        return total
    }
    async gettotalCourse(){
        const count = await Database
        .from('blog_posts').where('activity_type', "Course").count('* as total')
        const total = count[0].total  
        return total
    }
    async getAllUser( filterField, page){
        let allData =  User.query()
        if(filterField){
            allData.where( (b)=>{
                b.where('firstName', 'LIKE','%'+filterField+'%')
                b.orWhere('lastName', 'LIKE','%'+filterField+'%')
              }).orWhereRaw("concat(firstName, ' ', lastName) like ?", ['%'+filterField+'%']);
        }
        return await allData.orderBy('id', 'desc').paginate(page, 10)         
    } 
    createUser(data){
        return User.create(data) 
    } 
    updateUser(data){
        return User.query().where('id', data.id).update(data)
    }
    addProfilePicture(data, uid){
        return User.query().where('id', uid).update(data)
    }
    countUserFieldByKey(column, value){
        return User.query().where(column, value).getCount()
     }    
    singleUser(id){
        return User.query().where('id', id).first()
    }
    deleteUser(id){
        return User.query().where('id', id).delete()
    }
    
}
module.exports = UserQuery
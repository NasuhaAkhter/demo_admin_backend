'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
require('./routes/auth')
require('./routes/profile')
require('./routes/user')
require('./routes/blog')
require('./routes/course')
require('./routes/other')
const Route = use('Route')
 
Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})  

// Route.post('/login', 'UserController.login')
Route.get('/get_home_data', 'user/UserController.get_home_data')
// Route.post('/post', 'UserController.getUser')
// Route.get('/logout', 'UserController.logout')

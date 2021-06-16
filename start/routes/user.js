const Route = use('Route')

Route.group(() =>{ 
    Route.get('/getAllUser', 'user/UserController.getAllUser')    
    Route.post('/deleteUser', 'user/UserController.deleteUser')    
    Route.post('/updateUser', 'user/UserController.updateUser')    
    Route.post('/addUser', 'user/UserController.addUser')    
    Route.post('/addProfilePicture', 'user/UserController.addProfilePicture')    
    Route.post('/updatePassword', 'user/UserController.updatePassword')    
   }).prefix('user') 
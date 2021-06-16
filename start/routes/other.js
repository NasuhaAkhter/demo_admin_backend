const Route = use('Route')

Route.group(() =>{

    Route.get('/getQuestions', 'Other/OtherController.getQuestions')
    Route.post('addQuestion', 'Other/OtherController.addQuestion')
    Route.post('/deleteQuestion', 'Other/OtherController.deleteQuestion')
    Route.post('/updateQuestion', 'Other/OtherController.updateQuestion')
  }).prefix('other') 
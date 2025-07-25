import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('/', 'UserController.showAll')

    Route.post('/signUp', 'UserController.signUp')
    Route.post('/login', 'UserController.login')
    Route.get('/auth/me', 'UserController.me')
    Route.post('/auth/logout', 'UserController.logout')

    Route.put('/:id', 'UserController.update')
    Route.delete('/:id', 'UserController.delete')
}).prefix('/user')
import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.post('/', 'RentedsController.rentProp')

    Route.get('/:id', 'RentedsController.viewRented')

    Route.post('/:id', 'RentedsController.removeRented')

}).prefix('/rent')


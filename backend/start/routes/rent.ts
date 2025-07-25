import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.post('/', 'RentedsController.rentProp')

    Route.put('remove/:id', 'RentedsController.removeRented')

    Route.get('/:id', 'RentedsController.viewRented')


}).prefix('/rent')


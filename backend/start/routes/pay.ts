import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.post('/', 'RentedsController.postPayment')

    Route.put('/:id', 'RentedsController.updatePayment')

}).prefix('/pay')


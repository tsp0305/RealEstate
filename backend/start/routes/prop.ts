import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.post('/', 'PropertiesController.postProp')

    Route.get('/', 'PropertiesController.showAll')

    Route.post('/:id', 'PropertiesController.update')

    Route.delete('/:id', 'PropertiesController.delete')
}).prefix('/prop')


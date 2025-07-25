import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.post('/', 'PropertiesController.postProp')

    Route.get('/:id', 'PropertiesController.showBy')

    Route.get('/', 'PropertiesController.showAll')

    Route.put('/:id', 'PropertiesController.updateProp')

    Route.delete('/:id', 'PropertiesController.deleteProp')
}).prefix('/prop')


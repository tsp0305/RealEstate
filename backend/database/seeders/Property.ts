import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Property from 'App/Models/Property'
import User from 'App/Models/User'

export default class PropertiesSeeder extends BaseSeeder {
  public async run() {
    // Get owner user ID

    await Property.createMany([
      {
        name: 'Green Apartments',
        type: 'Apartment',
        price: '1200.00',
        location: '123 Main St, Cityville',
        owner_id: 1,
      },
      {
        name: 'Sunshine Villa',
        type: 'Villa',
        price: '2500.00',
        location: '456 Park Ave, Townsville',
        owner_id: 1,
      },
    ])
  }
}

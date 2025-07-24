import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Property from 'App/Models/Property'
import User from 'App/Models/User'

export default class PropertiesSeeder extends BaseSeeder {
  public async run() {
    // Get owner user ID
    const owner = await User.findByOrFail('email', 'owner@example.com')

    await Property.createMany([
      {
        name: 'Green Apartments',
        type: 'Apartment',
        price: '1200.00',
        location: '123 Main St, Cityville',
        owner_id: owner.id,
      },
      {
        name: 'Sunshine Villa',
        type: 'Villa',
        price: '2500.00',
        location: '456 Park Ave, Townsville',
        owner_id: owner.id,
      },
    ])
  }
}

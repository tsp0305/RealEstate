import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Rented from 'App/Models/Rented'
import User from 'App/Models/User'
import Property from 'App/Models/Property'
import { DateTime } from 'luxon'

export default class RentedsSeeder extends BaseSeeder {
  public async run() {
    const owner = await User.findByOrFail('email', 'tsp3602@gmail.com')
    const tenant = await User.findByOrFail('email', 'ranisankar6703@gmail.com')
    const property = await Property.findByOrFail('name', 'Green Apartments')

    await Rented.create({
      owner_id: owner.id,
      prop_id: property.id,
      tent_id: tenant.id,
      start_date: DateTime.now().minus({ months: 2 }),
      end_date: DateTime.now().plus({ months: 10 }),
      amount: 1200,
      status: 'Active',
    })
  }
}

import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Payment from 'App/Models/Payment'
import Rented from 'App/Models/Rented'
import { DateTime } from 'luxon'

export default class PaymentsSeeder extends BaseSeeder {
  public async run() {
    const rented = await Rented.firstOrFail() // Assuming only one record seeded above

    await Payment.createMany([
      {
        rent_id: rented.id,
        amount: 1200,
        due_date: DateTime.now().minus({ months: 1 }),
        pay_date: DateTime.now().minus({ months: 1 }).plus({ days: 2 }),
        status: 'paid',
      },
      {
        rent_id: rented.id,
        amount: 1200,
        due_date: DateTime.now(),
        pay_date: null,
        status: 'pending',
      }
    ])
  }
}

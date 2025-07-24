import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UsersSeeder extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        name: 'John Owner',
        email: 'tsp3602@gmail.com',
        password: 'password', // in production hash your passwords
        phone: '1234567890',
        role: 'owner',
      },
      {
        name: 'Alice Tenant',
        email: 'ranisankar6703@gmail.com',
        password: 'password',
        phone: '0987654321',
        role: 'tenant',
      },
      {
        name: 'Bob Staff',
        email: '71762231038@cit.edu.in',
        password: 'password',
        phone: '1112223333',
        role: 'staff',
      },
    ])
  }
}

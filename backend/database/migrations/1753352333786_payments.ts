import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Payments extends BaseSchema {
  protected tableName = 'payments'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('rent_id')
      table.integer('amount')
      table.dateTime('due_date')
      table.dateTime('pay_date')
      table.enu('status', ['pending', 'paid', 'overdue'])
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
      table.foreign('rent_id').references('id').inTable('renteds').onDelete('SET NULL')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}

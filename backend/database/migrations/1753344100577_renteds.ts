import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Renteds extends BaseSchema {
  protected tableName = 'renteds'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('owner_id')
      table.integer('prop_id')
      table.integer('tent_id')
      table.dateTime('start_date')
      table.dateTime('end_date')
      table.integer('amount')
      table.enu('status', ['Active', 'Inactive'])

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })

      table.foreign('owner_id').references('id').inTable('users').onDelete('SET NULL')
      table.foreign('prop_id').references('id').inTable('properties').onDelete('SET NULL')
      table.foreign('tent_id').references('id').inTable('users').onDelete('SET NULL')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}

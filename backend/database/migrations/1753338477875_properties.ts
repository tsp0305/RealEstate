import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Properties extends BaseSchema {
  protected tableName = 'properties'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')
      table.string('type')
      table.decimal('price', 10, 2)
      table.string('location')
      table.integer('owner_id')
      /**
       * Uses timestampz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })

      table.foreign('owner_id').references('id').inTable('users').onDelete('SET NULL')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}

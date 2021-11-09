import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Characters extends BaseSchema {
  protected tableName = 'characters'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')
      table.string('height')
      table.string('mass')
      table.string('hair_color')
      table.string('eye_color')
      table.string('skin_color')
      table.string('birth_year')
      table.string('gender')
      table.string('homeworld')
      table.json('films')
      table.json('species')
      table.json('vehicles')
      table.json('starships')
      table.string('url')
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

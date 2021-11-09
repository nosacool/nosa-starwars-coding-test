import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class MovieComments extends BaseSchema {
  protected tableName = 'movie_comments'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('episode_id')
      table.string('body',500)
      table.string('author')
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

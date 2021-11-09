import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import MovieComment from './MovieComment'


export default class Movie extends BaseModel {
  @column({ isPrimary: true })
  public episode_id: number

  @column()
  public title: string

  @column()
  public opening_crawl: string

  @column()
  public director: string

  @column()
  public producer: string

  @column()
  public release_date: string

  @column()
  public comment_count: number

  @hasMany(() => MovieComment, {
    foreignKey: 'episode_id'
  })
  public comments: HasMany<typeof MovieComment>;



  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime


}

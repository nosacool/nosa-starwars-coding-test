import { DateTime } from 'luxon'
import { afterFetch, BaseModel, beforeSave, column } from '@ioc:Adonis/Lucid/Orm'

export default class Character extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public height: string

  @column()
  public mass: string

  @column()
  public hair_color: string

  @column()
  public skin_color: string

  @column()
  public eye_color: string

  @column()
  public birth_year: string

  @column()
  public gender: string

  @column()
  public homeworld: string

  @column()
  public films: string

  @column()
  public species: string

  @column()
  public vehicles: string

  @column()
  public starships: string

  @column()
  public url: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async jsonStringify(character: Character){
    character.films = JSON.stringify(character.films)
    character.species = JSON.stringify(character.species)
    character.vehicles = JSON.stringify(character.vehicles)
    character.starships = JSON.stringify(character.starships)
  }

  /*@afterFetch()
  /*public static async jsonParse(character: Character){
    character.films = JSON.parse(character.films)
    character.species = JSON.parse(character.species)
    character.vehicles = JSON.parse(character.vehicles)
    character.starships = JSON.parse(character.starships)
  }*/

}

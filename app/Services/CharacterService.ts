//import CharacterServices from "@ioc:MyProject/CharacterService";
import Character from "App/Models/Character";
import CharacterInterface from "Contracts/interfaces/Character.Interface";
import BaseService from "./BaseService";
import axios from "axios";
//import Database from "@ioc:Adonis/Lucid/Database";

export default class CharacterService extends BaseService implements CharacterInterface{
  protected query
  constructor(){
    super(Character)

  }

  async fetchCharacters(sortType,order,filter) {

    //console.log(filter)
    //console.log(sortType)
    try {
      (await Character.query())
      if((filter != undefined)&&(sortType != undefined)){

        const result = await this.model.query().where('gender',filter).orderBy(sortType,order)

        return result
      }
      else if((sortType != undefined)&&(filter == undefined)){
        const result = this.model.query().orderBy(sortType,order)

        return result

      }
      else if((sortType == undefined)&&(filter != undefined)){
        const result = this.model.query().where('gender',filter)

        return result

      }
      else{
        const result = this.model.query()

        return result
      }


    } catch (error) {
      console.log(error)
      return sortType+' is not a valid sort Type'
    }


  }

  async fetchdata(){
    try {
      for(var i = 1; i<=9 ; i++){
        const result = (await axios.get('https://swapi.dev/api/people/?page='+i)).data
        result.results.forEach(async character => {
          delete character.created
          delete character.edited
          await Character.create(character)
          //console.log(people)
        });
      }
      return true
    } catch (error) {
      return false
    }

  }


}

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CharacterServices from '@ioc:MyProject/CharacterService';
import BaseController from "./BaseController";
import { schema, rules} from '@ioc:Adonis/Core/Validator'
import Helpers from 'App/Helpers/Helpers';

export default class CharactersController extends BaseController {

  public async fetchData(){
    if(await CharacterServices.fetchdata()){
      return 'done'
    }
    else{
      return 'error'
    }
  }

  public async getCharacters({request}: HttpContextContract){


    const characterSchema = schema.create({
      sort: schema.string.optional({ trim: true,escape:true},[
        rules.regex(new RegExp('^(gender|name|height)$'))
      ]),
      order: schema.string.optional({trim: true, escape:true},[
        rules.regex(new RegExp('^(asc|ASC|desc|DESC)$')),
        rules.requiredIfExists('sort')
      ]),
      filter: schema.string.optional({trim: true, escape:true})

    })


    const payload = await request.validate({schema: characterSchema,messages:{
      'sort.regex': 'Please use gender, name or height for the sort parameter',
      'order.regex': 'Please use ASC or DESC for the order parameter'
    }});


    const data = await CharacterServices.fetchCharacters(payload.sort,payload.order,payload.filter)
    const result =  {
      metadata:{
        count: data.length,
        Height:await this.totalHeight(data),
      },
      characters: data
    }
    return this.sendResponse(Helpers.successMessage(),result)

  }

  async totalHeight (characters) {
    var total = 0
    characters.forEach(async character => {
      //console.log(character)
     if(!isNaN(character.height)){
        total+= Number(character.height)
      }
    });
    return {
      cm: total,
      feet: await this.toFeet(total)
    }
  }

  async toFeet(n) {
    var realFeet = ((n*0.393700) / 12);
    var feet = Math.floor(realFeet);
    var inches = ((realFeet - feet) * 12).toFixed(2);
    return feet + "ft" +' '+ inches + 'inches';
  }



}

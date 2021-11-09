

export default class BaseController  {


  public  sendResponse(message,result){
    return {
      status : '00',
      message: message,
      data: result
     }

  }

  public  sendError(error,status = "01", errorMessages = []){
    return {
      status:status,
      message:error,
      data:errorMessages
    }
  }

}

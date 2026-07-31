class apiresponse {
    constructor(message,statusCode,data={}){
        this.message=message
        this.statusCode=statusCode
        this.data=data
        this.success=statusCode>=300 && statusCode<400
    }
}
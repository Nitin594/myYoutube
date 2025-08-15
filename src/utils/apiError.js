class ApiError extends Error{                   //class is a blueprint for creating objects
    constructor(
        statusCode,
        message="Something went wrong",
        errors = [],
        stack = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false
        this.errors = errors

        if(stack){
            this.stack = stack      //stack trace is the list of events that occured before the error
        }else{
            Error.captureStackTrace(
                this, this.constructor
            )
        }
    }
}

export{ApiError}
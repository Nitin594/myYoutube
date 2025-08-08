class ApiResponse {
    constructor(statusCode, data, message="Success"){       //success message is default
        this.statusCode = statusCode
        this.data = data 
        this.message = message
        this.success = statusCode < 400  //below 400 success code shows success 
    }
}
class apierror extends Error {
    constructor(message="Something went wrong", statusCode=500,error=[],stack="",data={}) {
        super(message);
        this.statusCode = statusCode;
        this.error = error;
        this.stack = stack;
        this.data = data;
        this.success = false
    }
}
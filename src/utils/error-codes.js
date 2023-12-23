const clientErrorCodes=Object.freeze({
    BAD_REQ:404,
    UNAUTHORIZED:401,
    NOT_FOUND:404
})

const serverErrorCodes=Object.freeze({
    INTERVAL_SERVER_ERROR:500,
    NOT_IMPLEMENTED:401
})

const successfullErrorCodes=Object.freeze({
    OK:200,
    CREATED:201
})
module.exports={
    clientErrorCodes,
    serverErrorCodes,
    successfullErrorCodes
}
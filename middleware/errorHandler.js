const { constants } = require("../constants");
const errorHandler = (err,req,res,next) => {
const statusCode = res.statusCode ? res.statusCode: 500;
switch (statusCode){
    case constants.VALIDATION_ERROR:
        res.json({title:"Validation_ERROR",
        message: err.message,
        stackTrace: err.stack,
    });
        break;
    case constants.NOT_FOUND:
        res.json({title:"not found",
        message: err.message,
        stackTrace: err.stack,
    });
     break;
    case constants.UNAUTHORIZED:
        res.json({
            title: "Unauthorized",
            message:err.message,
            stackTrace:err.stack,
        })
    case constants.FORBIDDEN:
        res.json({
            title:"Forbidden",
            message:err.message,
            stackTrace: err.stack, 
        });
    case constants.SERVER_ERROR:
        res.json({
            title:"SERVER Error",
            message:err.message,
            stackTrace: err.stack,
        })
    default:
        console.log("NO Error,ALL good !");
        break;
}
 res.json({title:"not found",message: err.message,stackTrace: err.stack});
}; 
module.exports = errorHandler;
    
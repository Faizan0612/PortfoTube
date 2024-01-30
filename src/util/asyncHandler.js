//
//         Promises
// 
//  const asyncHandler = (requestHandler) => {
//     (req,res,next) => {
//         return Promise.resolve(requestHandler(req,res,next))
//         .reject((error)=>{next(error)});
//     }
// }


//          Try Catch
// 
const asyncHandler = (requestHandler) => async (req,res,next) => {
    try {
        await requestHandler(req,res,next)
    } catch (error) {
        res.status(error.code||500).json({
            success:false,
            message:error.message
        })
    }
}

export {asyncHandler}
import mongoose from "mongoose";

const videoSchema = mongoose.Schema(
{
    title: {
        type:String,
        required:true
    },
    description: {
        type:String,
        required:true
    },
    duration: {
        type:Number,
        required:true
    },
    views: {
        type:Number,
        default:0
    },
    isPublished: {
        type:Boolean,
        default : true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
},
{
    timestamps : true
}
)

const video = mongoose.model("Video", videoSchema)

export default video;
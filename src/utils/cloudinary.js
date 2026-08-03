import {v2 as cloudinary} from 'cloudinary'
import { response } from 'express'
import fs from 'fs'
cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
})


const uploadToCloudinary=async (localfilepath)=>{
    try {
        if(!localfilepath) return null
        else {
const response=await cloudinary.uploader.upload(localfilepath,{resource_type:"auto"})
        }
        console.log("File is successfully uploaded",response.url,response.public_id)
        return {url:response.url, public_id:response.public_id}
        return response
    }
    catch (error){
            fs.unlinkSync(localfilepath)
            return null
    }
}


cloudinary.v2.uploader.upload("path/to/file", { resource_type: "auto" }, function (error, result) {
    if(error){
        console.log("ERROR: ", error,error.message)
    }
    console.log(result)
})
import { useState } from "react"
import { ImageForm } from "./ImageForm"
import { ImageList } from "./ImageList"

export const ImageBoard = ()=>{
    const [imageFormValue, setImageFormValue] = useState("");
    
    console.log(imageFormValue)
    return (
        <div>
            <h1>Pic!t</h1>
            <p>Create your inspiration board with Pic!t!</p>
            <ImageForm setImageFormValue={setImageFormValue}/>
            <ImageList imageFormValue={imageFormValue}/>
        </div>
    )
}
import { useState } from "react"
import { ImageForm } from "./ImageForm"
import { ImageList } from "./ImageList"

export const ImageBoard = ()=>{
    const [url, setUrl] = useState("");
    const [imageList, setImageList] = useState([]);
    
    const submit = (e) => {
        setImageList([...imageList, url]);
    }
    console.log(imageList)
    const handleChange = (e) => {
        setUrl(e.target.value);
      };
    
    return (
        <div>
            <h1>Pic!t</h1>
            <p>Create your inspiration board with Pic!t!</p>
            <ImageForm submit={submit} handleChange={handleChange} url={url} />
            <ImageList imageList={imageList}/>
        </div>
    )
}
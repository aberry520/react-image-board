import { useState } from "react";

export const ImageForm = ({setImageFormValue, submit, handleChange, url})=>{
    return (
        <form>
            <input type="url" placeholder="image url" value={url} onChange={(e) => { handleChange(e) }}/>
            <br/>
            {/* <input type="text" placeholder="image caption"/> */}
            <br/>
            <button type="button" onClick={(e)=>submit(e)}>Submit</button>
        </form>
    );
}
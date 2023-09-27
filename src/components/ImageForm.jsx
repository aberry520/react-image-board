import { useState } from "react";

export const ImageForm = ({setImageFormValue})=>{
    const [value, setValue] = useState("");
    const submit = (e) => {
        setImageFormValue(value);
    }
    const handleChange = (e) => {
        setValue(e.target.value);
      };
    return (
        <form>
            <input type="url" placeholder="image url" value={value} onChange={(e) => { handleChange(e) }}/>
            <br/>
            <input type="text" placeholder="image caption"/>
            <br/>
            <button type="button" onClick={(e)=>submit(e)}>Submit</button>
        </form>
    );
}
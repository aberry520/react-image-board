import { useState } from "react";


export const ImageList = ({imageFormValue}) => {
    // const [image, setImage] = useState();
    return (
        <>
            <ul>
                {/* {image.map((item, index) =>
                    <li key={index}><img src={item}/></li>
                )} */}
                <li><label><img src={imageFormValue} /><br />image caption</label></li>
            </ul>
        </>
    );

}
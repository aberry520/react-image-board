import { useState } from "react";


export const ImageList = ({imageList}) => {    
    return (
        <>
            <ul>
                {imageList.map((item, index) =>
                    <li key={index}><img src={item}/></li>
                )}
            </ul>
        </>
    );

}
import React from "react";
import {HashLoader} from "react-spinners";



export default function Loader() {
    return(
        <div className="sweet-loading">
            <HashLoader color={'#FF7A00'}/>
        </div>
    )
}

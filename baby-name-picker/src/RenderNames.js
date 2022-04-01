import React from "react";

const RenderNames = (props) => {
    return props.names.sort((a, b) => a.name.localeCompare(b.name)).map((babyName, i) => {
        return (
            <p key={i} className={babyName.sex} >
                {babyName.name}
           </p>
       )
   }) 
}
export default RenderNames;
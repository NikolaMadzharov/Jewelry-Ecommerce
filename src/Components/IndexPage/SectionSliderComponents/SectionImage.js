import React from "react";

export const SectionImage = (props) =>{
    return(
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <img src={props.image} style={{ width: '100%',  }} />
    </div>
      
    
    )
};
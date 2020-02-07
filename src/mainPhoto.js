import React from "react";

const MainPhoto = props => {
    console.log(props)
    return (
<div>
  <img src={props.photo} alt=''></img>  
</div>
    )
};
export default MainPhoto;
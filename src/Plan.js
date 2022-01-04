import React from 'react'
function Plan(props) {
    return(
        <>
        
        <li className="shadow py-2 my-2 col-sm-9">{props.value}</li>
        <button className="btn btn-danger m-2 col-sm-2 offset=1" 
        onClick = {()=>{props.sendData(props.id)}} >Del</button>
        </> 
    )
}
export default Plan;
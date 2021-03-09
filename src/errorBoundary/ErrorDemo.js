import React from 'react'

function ErrorDemo(props) {
  if(props.name!=="Jack Sparrow"){
    throw new Error("Name is not JACK");
  }
  return (
    <div>
      {props.name}
    </div>
  )
}

export default ErrorDemo

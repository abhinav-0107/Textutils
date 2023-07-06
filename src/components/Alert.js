import React from 'react'

function Alert(props) {

  // This function is use to capitalize the first letter of the word
  const capitalize = (word) =>{
    const str = word.toLowerCase();
    return str.charAt(0).toUpperCase() + str.slice(1); // slice(1) gives the string except first char
  } 

  return (
      props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
      </div>
  )
}

export default Alert
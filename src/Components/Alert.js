import React from 'react'

function Alert(props) {
  const captalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  return (
    <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong className='m-0'>{captalize(props.alert.type)} :  {props.alert.msg}</strong>
    </div>
  )
}

export default Alert

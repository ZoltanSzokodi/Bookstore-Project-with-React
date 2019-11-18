import React from 'react'
import '../styles/ContentWrapper.css'

function ContentWrapper(props) {
  return (
    <div className="ContentWrapper">
      {props.children}
    </div>
  )
}

export default ContentWrapper;

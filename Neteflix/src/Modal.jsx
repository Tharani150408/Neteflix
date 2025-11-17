import React from 'react'
import './Modal.css'

function Modal({children }) {
    if(!show) return null;
  return (
    <div className='modal-overlay' onClick={close}>
      <div className='modal-content' onClick={(e) =>{e.stopPropagation()}}>
        {children}
        <button onClick={close}>Close</button>
      </div>
    </div>
  )
}

export default Modal
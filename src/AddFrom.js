import React, { useState } from 'react'
import nameToInitials from './nameToInitials'

function AddForm({ onAdd, onCancel }) {
  const [name, setName] = useState('Sam')
  const [phoneNumber, setPhoneNumber] = useState('99999999')
  return (
    <div className="contact-item">
      <div className="contact-item__image">{nameToInitials(name)}</div>
      <div className="contact-item__content">
        <div className="contact-item__name">
          <input
            value={name}
            placeholder="Name"
            onChange={function(e) {
              setName(e.target.value.toUpperCase())
            }}
          />
        </div>
        <div className="contact-item__number">
          <input
            value={phoneNumber}
            placeholder="Phone Number"
            onChange={function(e) {
              setPhoneNumber(e.target.value.replace(/\D/g, ''))
            }}
          />
        </div>
      </div>
      <div className="contact-item__actions">
        <a href="##" className="contact-item__cancel-button" onClick={onCancel}>
          cancel
        </a>
        <a
          href="##"
          className="contact-item__add-button"
          onClick={() => onAdd({ name, phoneNumber })}
        >
          save
        </a>
      </div>
    </div>
  )
}

export default AddForm

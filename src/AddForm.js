import React, { useState, useRef, useEffect } from 'react'

import nameToInitials from './nameToInitials'

function AddForm({ hideForm, addContact }) {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const nameInput = useRef(null)
  useEffect(() => {
    nameInput.current.focus()
  }, [])
  return (
    <form
      onSubmit={function() {
        if (name.trim() === '' || /[^a-z\s]/i.test(name)) {
          alert(
            'please make sure the name only contains alphabetic characters only'
          )
          return
        }
        if (number.length === 0 || /\D/.test(number)) {
          alert(
            'please make sure the phone number only contains numberic characters'
          )
          return
        }
        addContact(name, number)
        hideForm()
      }}
      className="contact-item"
    >
      <div className="contact-item__image">{nameToInitials(name)}</div>
      <div className="contact-item__content">
        <div className="contact-item__name">
          <input
            placeholder="Name"
            value={name}
            ref={nameInput}
            onChange={function(e) {
              setName(e.target.value)
            }}
          />
        </div>
        <div className="contact-item__number">
          <input
            placeholder="Phone Number"
            value={number}
            onChange={function(e) {
              setNumber(e.target.value)
            }}
          />
        </div>
      </div>
      <div className="contact-item__actions">
        <a href="##" className="contact-item__cancel-button" onClick={hideForm}>
          cancel
        </a>
        <input
          type="submit"
          value="save"
          className="contact-item__add-button"
        />
      </div>
    </form>
  )
}

export default AddForm

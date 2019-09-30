import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import nameToInitials from './nameToInitials'

function renderName(name) {
  return name[0].toUpperCase() + name.slice(1)
}

function ContactItem({ contact, deleteContact }) {
  const [isDeleting, setIsDeleting] = useState(false)
  return (
    <div
      className="contact-item"
      onMouseLeave={function() {
        setIsDeleting(false)
      }}
    >
      <div className="contact-item__image">{nameToInitials(contact.name)}</div>
      <div className="contact-item__content">
        <div className="contact-item__name">{renderName(contact.name)}</div>
        <div className="contact-item__number">{contact.phoneNumber}</div>
      </div>
      {isDeleting && (
        <a
          href="##"
          className="contact-item__remove-button"
          onClick={() => {
            deleteContact(contact.id)
          }}
        >
          <FontAwesomeIcon
            size="lg"
            icon={faExclamationCircle}
            color="#f59f62"
          />
        </a>
      )}
      {!isDeleting && (
        <a
          href="##"
          className="contact-item__remove-button"
          onClick={function() {
            setIsDeleting(true)
          }}
        >
          <FontAwesomeIcon size="lg" icon={faTimes} color="#f16e6e" />
        </a>
      )}
    </div>
  )
}

export default ContactItem

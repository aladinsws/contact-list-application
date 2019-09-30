import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

import ContactItem from './ContactItem'

function ContactList({
  contacts,
  deleteContact,
  showPrevButton,
  showNextButton,
  goToNextPage,
  goToPrevPage
}) {
  return (
    <div className="contact-list">
      {contacts.map(function(el) {
        return (
          <ContactItem key={el.id} deleteContact={deleteContact} contact={el} />
        )
      })}

      <div className="more-button">
        <input
          type="button"
          value="previous"
          disabled={!showPrevButton}
          onClick={goToPrevPage}
        />
      </div>

      <div className="more-button">
        <input
          type="button"
          value="next"
          disabled={!showNextButton}
          onClick={goToNextPage}
        />
      </div>
    </div>
  )
}

export default ContactList

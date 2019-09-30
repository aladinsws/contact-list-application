import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import AddButton from './AddButton'

function Header({ search, setSearchString, pageNumber, showForm }) {
  return (
    <header className="contact-list-header">
      <AddButton showForm={showForm} />
      <h1 className="contact-list-header__title">
        Contacts(page {pageNumber})
      </h1>
      <label className="contact-list-header__search">
        <div className="contact-list-header__search-icon">
          <FontAwesomeIcon icon={faSearch} color="#757575" />
        </div>
        <input
          type="text"
          value={search}
          onChange={function(e) {
            setSearchString(e.target.value)
          }}
          className="contact-list-header__search-input"
          placeholder="Search"
        />
      </label>
    </header>
  )
}

export default Header

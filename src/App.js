import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { PulseLoader } from 'react-spinners'

import Header from './Header'
import ContactList from './ContactList'
import AddForm from './AddForm'

const firstPage = 1
const lastPage = 3

function App() {
  const [searchString, setSearchString] = useState('')
  const [contactsByPage, setContactsByPage] = useState({})
  const [isFormVisible, setIsFormVisible] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [pageNumber, setPageNumber] = useState(1)

  function addContact(name, number) {
    // const newContact = { id: Math.random(), name: name, phoneNumber: number }
    // setContacts([newContact].concat(contacts))
  }
  function deleteContact(id) {
    setContacts(
      contacts.filter(function(el) {
        if (el.id === id) {
          return false
        } else return true
      })
    )
  }
  function showForm() {
    setIsFormVisible(true)
  }
  function hideForm() {
    setIsFormVisible(false)
  }
  function goToNextPage() {
    setPageNumber(pageNumber + 1)
  }
  function goToPrevPage() {
    setPageNumber(pageNumber - 1)
  }
  const filteredContacts = (contactsByPage[pageNumber] || []).filter(function(
    el
  ) {
    return el.name.toLowerCase().includes(searchString.toLowerCase())
  })
  useEffect(
    function() {
      const linkToData =
        'https://my-json-server.typicode.com/ghsamm/fake-react-app-data/contacts?_page=' +
        pageNumber
      if (contactsByPage[pageNumber]) {
        return
      }
      axios
        .get(linkToData)
        .then(function(response) {
          setContactsByPage({
            ...contactsByPage,
            [pageNumber]: response.data
          })
        })
        .catch(err => {
          setHasError(true)
        })
        .finally(() => {
          setIsLoading(false)
        })
    },
    [pageNumber]
  )
  return (
    <div className="contact-list-app">
      <Header
        showForm={showForm}
        pageNumber={pageNumber}
        search={searchString}
        setSearchString={setSearchString}
      />
      {isFormVisible && <AddForm hideForm={hideForm} addContact={addContact} />}
      <div style={{ display: 'flex', justifyContent: 'center', padding: 10 }}>
        <PulseLoader loading={isLoading} color="#4c68fe" />
      </div>
      {hasError && 'Error while getting data'}
      <ContactList
        goToNextPage={goToNextPage}
        goToPrevPage={goToPrevPage}
        deleteContact={deleteContact}
        showPrevButton={
          contactsByPage[pageNumber] &&
          contactsByPage[pageNumber].length > 0 &&
          pageNumber > firstPage
        }
        showNextButton={
          contactsByPage[pageNumber] &&
          contactsByPage[pageNumber].length > 0 &&
          pageNumber < lastPage
        }
        contacts={filteredContacts}
      />
    </div>
  )
}
export default App

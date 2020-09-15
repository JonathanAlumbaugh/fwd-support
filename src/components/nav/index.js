import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import '../html/css/webflow.scss'
import '../html/css/normalize.scss'
import './Nav.scss'
import '../html/css/code-export-test.scss'

function Nav() {
  let [searchShown, setSearchShown] = useState(false)
  let [contactShown, setContactShown] = useState(false)

  let location = useLocation()

  return (
    <div
      data-collapse="medium"
      data-animation="default"
      data-duration="400"
      role="banner"
      className="navbar w-nav"
    >
      {/* SEARCH */}
      <div
        className={`w-container search-container ${
          searchShown ? ' search-container-shown' : ''
        }`}
      >
        <form action="/search" className="search w-form">
          <input
            tabIndex={searchShown ? '0' : '-1'}
            type="search"
            className="search-bar w-input"
            maxLength="256"
            name="query"
            placeholder="Search all clips and resources"
            id="search"
            required=""
          />
          <input
            tabIndex={searchShown ? '0' : '-1'}
            type="submit"
            value="Search"
            className="search-button w-button"
          />
          <button
            tabIndex={searchShown ? '0' : '-1'}
            className="search-button w-button"
            onClick={(e) => {
              e.preventDefault()
              setSearchShown(!searchShown)
            }}
          >
            X
          </button>
        </form>
        <div
          className={`search-background ${
            searchShown ? ' search-background-shown' : ''
          }`}
        ></div>
      </div>

      {/* CONTACT */}
      <div
        className={`w-container contact-container ${
          contactShown ? ' contact-container-shown' : ''
        }`}
      >
        <div className="contact-wrapper">
          <div className="contact-form-row-wrapper">
            <h6 className="contact-header">Get in touch</h6>
            <div
              data-w-id="4c333146-6201-ee09-73ab-b3ddd9581db2"
              className="contact-form-close"
            >
              X
            </div>
          </div>
          <p className="contact-description">
            Interested in helping out? Giving feedback? Contributing to the
            resource list? Something else? Punch me up below.
          </p>
          <div className="form-block w-form">
            <form
              id="email-form"
              name="email-form"
              data-name="Email Form"
              className="form"
            >
              <label htmlFor="Email" className="field-label-2">
                Name
              </label>
              <label htmlFor="Name" className="field-label-2">
                Email Address
              </label>
              <input
                type="text"
                className="text-field w-input"
                maxLength="256"
                name="Name"
                data-name="Name"
                placeholder="your name"
                id="Name"
                required=""
              />
              <input
                type="email"
                className="text-field w-input"
                maxLength="256"
                name="Email"
                data-name="Email"
                placeholder="your email"
                id="Email"
                required=""
              />
              <textarea
                name="field"
                maxLength="5000"
                id="field"
                placeholder="what&#x27;s up?"
                required=""
                data-name="Field"
                className="textarea w-input"
              ></textarea>
              <input
                type="submit"
                value="Submit"
                data-wait="Please wait..."
                className="submit-button w-button"
              />
            </form>
            <div className="w-form-done">
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div className="w-form-fail">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <div className="nav-container w-container">
        <div className="brand-wrapper">
          <Link to="/" className="brand w-nav-brand">
            <h1 className="site-title">FWD: Support </h1>
          </Link>
        </div>

        <nav role="navigation" className="nav-menu w-nav-menu">
          <Link
            to="/"
            aria-current="page"
            className={`nav-link w-nav-link ${
              location.pathname === '/' ? 'w--current' : ''
            }`}
          >
            Home
          </Link>
          <Link
            to="/why"
            className={`nav-link w-nav-link ${
              location.pathname === '/why' ? 'w--current' : ''
            }`}
          >
            Why?
          </Link>
          <button
            data-w-id="7996200d-150f-a560-79d5-7ba7b8b5f92f"
            className="nav-link w-nav-link unstyled-button"
            onClick={() => setContactShown(!searchShown)}
          >
            Contact
          </button>
          <button
            data-w-id="92929321-8195-1a30-6876-7156b7a01e2e"
            className={`nav-link w-nav-link unstyled-button search-button-nav ${
              searchShown ? '' : 'search-button-nav-shown'
            }`}
            onClick={() => setSearchShown(!searchShown)}
          >
            Search
          </button>
        </nav>

        <div className="menu-button w-nav-button">
          <div className="w-icon-nav-menu"></div>
        </div>
      </div>
    </div>
  )
}

export default Nav

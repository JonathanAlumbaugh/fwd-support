import React from 'react'

import './Filters.scss'

function Filters() {
  return (
    <div className="filters">
      <div className="filter-group-wrapper">
        <h1 className="filter-category">Author/source</h1>
        <div className="filter-button-wrapper">
          <a href="/#" className="filter-button w-button">
            T. Greg Doucette
          </a>
          <a href="/#" className="filter-button w-button">
            Blueleaks
          </a>
          <a href="/#" className="filter-button w-button">
            the FBI
          </a>
        </div>
      </div>
    </div>
  )
}

export default Filters

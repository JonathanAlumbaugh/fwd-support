import React from 'react'

import Featured from '../../components/featured'
import Filters from '../../components/filters'
import HomePage from '../../components/home'

function HomeContainer() {
  return (
    <div className="main-container w-container">
      <Featured />
      <Filters />
      <HomePage />
    </div>
  )
}

export default HomeContainer

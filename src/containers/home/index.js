import React from 'react'

import Featured from '../../components/featured'
import Filters from '../../components/filters'
import Library from '../../components/library'

function HomeContainer() {
  return (
    <div className="main-container w-container">
      <Featured />
      <Filters />
      <Library />
    </div>
  )
}

export default HomeContainer

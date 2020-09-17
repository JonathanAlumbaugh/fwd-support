import React from 'react'

import Featured from '../../components/featured'
import Filters from '../../components/filters'
import { CardList } from '../../components/CardList'

function HomeContainer() {
  return (
    <div className="main-container w-container">
      <Featured />
      <Filters />
      <CardList />
    </div>
  )
}

export default HomeContainer

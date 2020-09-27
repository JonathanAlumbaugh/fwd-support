import React from 'react'

import Featured from '../../components/featured'
import Filters from '../../components/filters'
import CardList from '../../components/CardList'

function HomeContainer({ match }) {
  return (
    <div className="main-container w-container">
      <Featured />
      <Filters />
      <CardList cardSlug={match.params.cardSlug} match={match} />
    </div>
  )
}

export default HomeContainer

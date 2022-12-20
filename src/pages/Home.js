import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import request from '../data/request'

const Home = () => {
  return (
    <>
      <Main />
      <Row rowId='1' title="Up Coming" fetchUrl={request.upcomingRequest}/>
      <Row rowId='2' title="Popular" fetchUrl={request.popularRequest}/>
      <Row rowId='3' title="Trending" fetchUrl={request.trendingRequest}/>
      <Row rowId='4' title="Top Rated" fetchUrl={request.topRatedRequest}/>
      <Row rowId='5' title="Horror" fetchUrl={request.horrorRequest}/>

    </>
  )
}

export default Home
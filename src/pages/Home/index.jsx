import React, { Component } from 'react'
import Example from '../../components/Carousel/Carousel'
import Header from './../../components/SideMenu/Header'
import MiddleSection from './../../components/SideMenu/MiddleSection'

export default class App extends Component {
  render() {
    return (
      <>
       <Header/>
       <MiddleSection/>
       <Example/>
      </>
    )
  }
}

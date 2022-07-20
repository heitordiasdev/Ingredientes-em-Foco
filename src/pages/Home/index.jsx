import React, { Component } from 'react'
import Header from '../../components/SideMenu/Header'
import MiddleSection from '../../components/SideMenu/MiddleSection'
import Scroll from '../../components/Scroll/index'

export default class App extends Component {
  render() {
    return (
      <>
       <Header/>
       <Scroll showBelow={250}/>
       <MiddleSection/>
      </>
    );
  }
}

import React, { Component } from 'react'
import MainBanner from './MainBanner'
import MainProductList from './MainProductList'

class Main extends Component {
  render() {
    return (
      <div className='main'>
        <MainBanner/>
        <MainProductList/>
      </div>
    )
  }
}

export default Main
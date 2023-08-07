import React, { Component } from 'react'
import Footer from './c-cpns/Footer'
import Header from './c-cpns/Header'
import Main from './c-cpns/Main'

export class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    )
  }
}

export default App
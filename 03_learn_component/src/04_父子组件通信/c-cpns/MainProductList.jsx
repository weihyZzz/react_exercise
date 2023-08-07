import React, { Component } from 'react'

class MainProductList extends Component {
  render() {
    const { productList } = this.props
    return (
      <div>
        <h2>商品列表</h2>
        <ul>
          {
            productList.map(item => {
              return (
                <li key={item.id}>{item.name}</li>                
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default MainProductList
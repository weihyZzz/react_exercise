import React, { Component } from 'react'
import PropTypes from 'prop-types'
class MainProductList extends Component {
  render() {
    const { productList, title } = this.props
    return (
      <div>
        <h2>{title}</h2>
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
// MainProductList组件传入的props类型进行验证
MainProductList.propTypes = {
  productList: PropTypes.array,
  title: PropTypes.string
}
// MainProductList组件传入的props设置默认值
MainProductList.defaultProps = {
  productList: [],
  title: "默认标题"
}
export default MainProductList
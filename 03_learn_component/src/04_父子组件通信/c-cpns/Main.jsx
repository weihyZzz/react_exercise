import React, { Component } from 'react'
import axios from 'axios'
import MainProductList from './MainProductList'
const url = "https://www.fastmock.site/mock/1c5e8f3cc0c26cb2cac70e4c6541c965/cms"
class Main extends Component {
  constructor() {
    super()
    this.state = {
      productList: []
    }
  }
  componentDidMount() {
    const path = url + '/goods/list'
    axios.post(path).then(res => {
      const data = res.data.data.list
      console.log('请求商品数据', data);
      this.setState({productList: data})
    }) 
  }
  render() {
    const { productList } = this.state
    return (
      <div className='main'>
        <MainProductList productList={productList} title={"商品列表"}/>
        {/* 验证组件参数的默认值是否生效 */}
        <MainProductList/>
      </div>
    )
  }
  
}

export default Main
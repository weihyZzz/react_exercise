let lianyingFlag = false

let clientSource = "yinShan"
lianyingFlag = clientSource === "yinShan"

console.log('lianyingFlag', lianyingFlag);

let lianyingFlag = false
    let yinshanFlag = false
    if (user) {
      console.log('open 页面 user-clientSource', user.clientSource);
      lianyingFlag = (user.clientSource === 'lianYing')
      yinshanFlag = (user.ClientSource === 'yinShan')
    }
    // if (uiflag) { // open for united imaging
    //   this.setData({
    //     picurl: 'https://kangfu-action-video-1258481652.cos.ap-beijing.myqcloud.com/picture/shouhuxing/uiopenpage.jpg',
    //   })
    //   wx.redirectTo({
    //     url: '/packageD/pages/open/open',
    //   })
    // }
    console.log('联影flag', lianyingFlag, '银杉flag', yinshanFlag);
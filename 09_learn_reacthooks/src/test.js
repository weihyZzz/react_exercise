
let clientSource = "yinShan";


let lianyingFlag = false;
let yinshanFlag = false;

  console.log("open 页面 user-clientSource", clientSource);
  lianyingFlag = clientSource === "lianYing";
  yinshanFlag = clientSource === "yinShan";

// if (uiflag) { // open for united imaging
//   this.setData({
//     picurl: 'https://kangfu-action-video-1258481652.cos.ap-beijing.myqcloud.com/picture/shouhuxing/uiopenpage.jpg',
//   })
//   wx.redirectTo({
//     url: '/packageD/pages/open/open',
//   })
// }
console.log("联影flag", lianyingFlag, "银杉flag", yinshanFlag);

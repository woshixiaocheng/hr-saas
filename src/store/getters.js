// 像计算属性，针对依赖于state的状态
// 这里的app user是模块，因为在index.js中是以模块的方式注册的
const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name
}
export default getters

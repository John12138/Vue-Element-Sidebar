//development开发环境不用lazy-Loding/too many pags因为会导致webpack热更新速度变慢------所以我们只在产品环境下使用Lazy-Loding
module.exports = file => require('@/views/' + file + '.vue').default // vue-loader at least v13.0.0+
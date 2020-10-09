const info = (...params) => {
    if (process.env.NODE_ENV !== 'test') {
      console.log(...params)
    }
  }
  
  const error = (...params) => {
    console.error(...params)
  }
  
  module.exports = {
    info, error
  }
   //输出 HTTP 请求信息的中间件阻碍了测试执行输出。修改日志记录器，使其不会在测试模式下打印到控制台
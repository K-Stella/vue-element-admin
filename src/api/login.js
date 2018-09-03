import request from '@/utils/request'

export function loginByUsername(username, password) {
  const data = {
    username,
    password
  }
  return request({
    url: '/login/login',
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    url: '/login/logout',
    method: 'post'
  })
}

export function getUserInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function loginByThirdparty(code) {
  const client_id = '856266c32571042e52d7'
  const client_secret = 'eba58af6a2f645e6231bb982a561e35762de7924'
  console.log('loginByThirdparty api')
  // console.log('code:', code)
  return request({
    url: '/api',
    method: 'post',
    params: { 
      client_id,
      client_secret,
      code
    }
  })    
}


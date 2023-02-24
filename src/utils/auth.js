//存token
export function setToken(token){
  sessionStorage.setItem("token",token)
} 
//取token
export function getToken(){
  return sessionStorage.getItem("token")
}
//删除token
export function removeToken(){
  /* sessionStorage.removeItem("token") */
  sessionStorage.clear()
}
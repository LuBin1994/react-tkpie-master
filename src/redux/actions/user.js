const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const REGISTER = "REGISTER";
const TOGGLE_LOGIN="TOGGLE_LOGIN";
//action creater
export function toggleLogin(){
    return {type:TOGGLE_LOGIN}
}
export function login(){
    return {type:LOGIN}
}
export function register(){
    return {type:REGISTER}
}
export function logout(){
    return {type:LOGOUT}
}
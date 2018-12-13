var initState = {
    userName:'',
    isLogin:false,
};
const user =(state=initState,action={}) =>{
    switch(action.type){
        case "LOGIN":
            return{
                ...state,
                userName:'张三',
                isLogin:true,

            };
        case "LOGOUT":
            return{
                ...state,
                userName:'',
                isLogin:false,
            };
        default:return state;
    }
};
export default user;
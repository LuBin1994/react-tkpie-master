import React from 'react'  
import { BrowserRouter,Route,Router} from 'react-router-dom'

// 引入所有基础配置
import Index from '@/pages/index/';
import Login from '@/pages/login';
import Register from '@/pages/register';

export default class RouteMap extends React.Component{
    updateHandle () {  
        console.log('每次router变化之后都会触发')
    }  
    render () {  
        return (
            <BrowserRouter onUpdate={this.updateHandle.bind(this)}>
                <div>
                    <Route path='/' extra exact component={Index}></Route>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/Register' component={Register}></Route>
                </div>
            </BrowserRouter>
        )  
    }  
}  

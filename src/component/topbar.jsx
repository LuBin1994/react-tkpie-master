import React from 'react';
import $ from 'jquery';
import {connect} from 'react-redux';
import {login,logout} from '@/redux/actions/user'
import LogoutIcon from '@/static/images/logout.png';
@connect(state=>(
    {isLogin:state.isLogin,userName:state.userName}
    ),{login,logout})
class TopBar extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        var width1 = {width:130+'px'};
        var width2 = {width:145+'px'};
        return <div>
            <div className="g-box g-topbar">
                <div className="g-topbarInner">
                    <a className="u-logo fl" href="../index/"></a>
                    <ul className="m-nav fl">
                        <li style={width1}><a>资讯</a></li>
                        <li style={width1}><a>任务</a></li>
                        <li style={width2}><a>币知识</a></li>
                        <li style={width2}><a>商务合作</a></li>
                    </ul>
                    {this.props.isLogin?
                        <div className="m-logoutGroup fr">
                            <span className="u-logout fr" onClick={this.props.logout}><img src={LogoutIcon}/></span>
                            <a className="u-tel fr" href="../center/" target="_blank">{this.props.userName}</a>
                        </div>:<a className="u-login fr" onClick={this.props.login}>登录</a>
                    }
                   <div className="m-langChoose fr">
                       <div className="m-choose">
                           简体中文
                           <div className="u-arrow"></div>
                       </div>
                      {/* <ul  className="m-langList">
                       </ul>*/}
                    </div>
                </div>
            </div>
        </div>
    }
}
;export default TopBar
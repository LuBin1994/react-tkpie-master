import React from 'react';
class Footer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
      return <div className="g-box g-footer">
          <div className="g-boxInner">
              <ul className="m-userSup fl">
                  <p>用户支持</p>
                  <li><a href="">帮助中心</a></li>
                  <li><a href="">公告</a></li>
              </ul>
              <ul className="m-connectUs fl">
                  <p>联系我们</p>
                  <li><a href="../cooperation/">商务合作</a></li>
              </ul>
              <ul className="m-footIcons fr">
                  <li className="m-internet"><a href=""></a></li>
                  <li className="m-qq"><a href=""></a></li>
                  <li className="m-mail"><a href=""></a></li>
              </ul>
          </div>
          <div className="m-copyright">
          <ul className="m-copyrightGroup">
             <li className="u-footLogo"></li>
             <li className="u-footRight">
             Tkpie - 天天领糖果，专业数字资产投融资服务平台<br/>
             ©2017-2018 All rights reserved
             </li>
          </ul>
          </div>
      </div>
    }
}
export default Footer;
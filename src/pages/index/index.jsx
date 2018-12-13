import React, { Component } from 'react';
import Footer from '@/component/footer';
import Topbar from '@/component/topbar';
class Index extends Component {
  render() {
    return (
      <div className="App">
          <Topbar/>
          <Footer/>
      </div>
    );
  }
}
export default Index;

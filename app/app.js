import React from 'react';
import ReactDOM from 'react-dom';
import { Menu, Breadcrumb, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
import Header from './header.js';

import 'antd/dist/antd.css';
import './app.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
    };
  }
  handleChange(date) {
    message.info('您选择的日期是: ' + date.toString());
    this.setState({ date });
  }
  render() {
    return (
      <div className="ant-layout-topaside">
        <Header/>
        <div className="ant-layout-subheader">
          <div className="ant-layout-wrapper">
            <Menu mode="horizontal"
              defaultSelectedKeys={['1']} style={{marginLeft: 124}}>
              <Menu.Item key="1">二级导航</Menu.Item>
              <Menu.Item key="2">二级导航</Menu.Item>
              <Menu.Item key="3">二级导航</Menu.Item>
            </Menu>
          </div>
        </div>
        <div className="ant-layout-wrapper">
          <div className="ant-layout-breadcrumb">
            <Breadcrumb>
              <Breadcrumb.Item>首页</Breadcrumb.Item>
              <Breadcrumb.Item>应用列表</Breadcrumb.Item>
              <Breadcrumb.Item>某应用</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="ant-layout-container">
            <aside className="ant-layout-sider">
              <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']}>
                <SubMenu key="sub1" title={<span><Icon type="user" />导航一</span>}>
                  <Menu.Item key="1">选项1</Menu.Item>
                  <Menu.Item key="2">选项2</Menu.Item>
                  <Menu.Item key="3">选项3</Menu.Item>
                  <Menu.Item key="4">选项4</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="laptop" />导航二</span>}>
                  <Menu.Item key="5">选项5</Menu.Item>
                  <Menu.Item key="6">选项6</Menu.Item>
                  <Menu.Item key="7">选项7</Menu.Item>
                  <Menu.Item key="8">选项8</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" title={<span><Icon type="notification" />导航三</span>}>
                  <Menu.Item key="9">选项9</Menu.Item>
                  <Menu.Item key="10">选项10</Menu.Item>
                  <Menu.Item key="11">选项11</Menu.Item>
                  <Menu.Item key="12">选项12</Menu.Item>
                </SubMenu>
              </Menu>
            </aside>
            <div className="ant-layout-content">
              <div style={{ height: 240 }}>
                <div style={{clear: 'both'}}>内容区域</div>
              </div>
            </div>
          </div>
          <div className="ant-layout-footer">
            jiangjun 版权所有 © 2016 由jiangjun 支持
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('content'));
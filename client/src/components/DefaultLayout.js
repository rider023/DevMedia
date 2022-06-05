import { Layout, Menu } from 'antd'
import { useSelector } from 'react-redux'
import React from 'react'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  UploadOutlined,
  LogoutOutlined,ProfileOutlined
} from '@ant-design/icons'
import './defaultlayout.css'
import { Link } from 'react-router-dom'
const { Header, Sider, Content } = Layout

class DefaultLayout extends React.Component {
  state = {
    collapsed: false,
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  render() {
    const userid = JSON.parse(localStorage.getItem('user')).user
    return (
      <Layout>
        <Layout className="site-layout">
          <Header className="site-layout-background " style={{ padding: 0 }}>
            <div className=" d-flex justify-content-between align-items-center">
              <h4>{JSON.parse(localStorage.getItem('user')).user.username}</h4>
              <h2>DevMedia</h2>
              {React.createElement(
                this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: 'trigger',
                  onClick: this.toggle,
                },
              )}
            </div>
          </Header>
          <Content
            className="site-layout-background"
            style={
              {
                // margin: '24px 16px',
                // padding: 24,
                // minHeight: 280,
              }
            }
          >
            {this.props.children}
          </Content>
        </Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo">DevMedia</div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[window.location.pathname]}
          >
            <Menu.Item key="/" icon={<UserOutlined />}>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="/addpost" icon={<UploadOutlined />}>
              <Link to="/addpost">AddPost</Link>
            </Menu.Item>
            <Menu.Item key="/profile" icon={<ProfileOutlined  />}>
            <Link to={`/profile/${userid._id}`}>Profile</Link>
            </Menu.Item>
            <Menu.Item key="/allusers" icon={<UserOutlined />}>
              <Link to="/allusers">AllUsers</Link>
            </Menu.Item>
           
            <Menu.Item  icon={<LogoutOutlined />}>
              <Link to='' onClick={() =>{localStorage.removeItem(('user'), window.location.reload())}}>Logout</Link>
            </Menu.Item>
          </Menu>
        </Sider>
      </Layout>
    )
  }
}

export default DefaultLayout

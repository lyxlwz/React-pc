import { Outlet, useNavigate, useLocation } from 'react-router-dom'

import { Layout, Menu, Popconfirm } from 'antd'
import {
  HomeOutlined,
  DiffOutlined,
  EditOutlined,
  LogoutOutlined
} from '@ant-design/icons'
import './index.scss'

const { Header, Sider } = Layout
//4.20.0 用法升级
const items = [
  {
    label: '数据概览',
    key: '/',
    icon: <HomeOutlined />,
  },
  {
    label: '内容管理',
    key: '/article',
    icon: <DiffOutlined />,
  },
  {
    label: '发布文章',
    key: '/publish',
    icon: <EditOutlined />,
  },
]

const GeekLayout = () => {

  const { pathname } = useLocation()
  const navigate = useNavigate()

  const toMenuItem = (e) => {
    navigate(e.key)
  }

  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <div className="user-info">
          <span className="user-name">user.name</span>
          <span className="user-logout">
            <Popconfirm title="是否确认退出？" okText="退出" cancelText="取消">
              <LogoutOutlined /> 退出
            </Popconfirm>
          </span>
        </div>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          {/* 高亮原理：defaultSelectedKeys === item的key属性值 */}
          {/* 获取当前激活的path路径 */}
          <Menu
            mode="inline"
            theme="dark"
            defaultSelectedKeys={pathname}
            style={{ height: '100%', borderRight: 0 }}
            items={items}
            onClick={toMenuItem}
          >
            {/* 4.20.0 用itms 代替 */}
            {/* <Menu.Item icon={<HomeOutlined />} key="1">
              数据概览
            </Menu.Item>
            <Menu.Item icon={<DiffOutlined />} key="2">
              内容管理
            </Menu.Item>
            <Menu.Item icon={<EditOutlined />} key="3">
              发布文章
            </Menu.Item> */}
          </Menu>
        </Sider>
        <Layout className="layout-content" style={{ padding: 20 }}>
          {/* 二级路由 */}
          <Outlet />
        </Layout>
      </Layout>
    </Layout>
  )
}

export default GeekLayout
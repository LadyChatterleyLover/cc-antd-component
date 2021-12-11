import {GithubOutlined} from '@ant-design/icons'

import { Layout } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons'

const { Header } = Layout


interface Props {
  collapsed: boolean,
  toggle: () => void
}

const NavHeader = (props: Props) => {
  const { collapsed, toggle } = props

  return (
    <Header style={{ padding: '0 20px', background: '#fff', display: 'flex', justifyContent: 'space-between' }}>
      <div onClick={toggle}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </div>
      <div style={{ cursor: 'pointer' }}>
        <a href="//github.com/ant-design/ant-design/" target="_blank">
          <GithubOutlined style={{color: '#000', fontSize: 18}} />
        </a>
      </div>
    </Header>
  )
}

export default NavHeader

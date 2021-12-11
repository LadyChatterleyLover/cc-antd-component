import React, { useState } from 'react'
import { Layout } from 'antd'

import NavHeader from '@/components/navHeader/navHeader'
import NavSider from '@/components/navSider/navSider'

const { Content } = Layout

interface Props {
  children: React.ReactNode
}

const Layouts = (props: Props) => {
  const [collapsed, setCollapsed] = useState<boolean>(false)

  const toggle = () => {
    setCollapsed(!collapsed)
  }

  return (
    <Layout>
     <NavSider collapsed={collapsed}></NavSider>
      <Layout>
        <NavHeader collapsed={collapsed} toggle={toggle}></NavHeader>
        <Content
          style={{
            margin: '24px 16px',
            background: '#fff',
            padding: 24,
            minHeight: 280,
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  )
}

export default Layouts

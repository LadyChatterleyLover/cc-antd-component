import { Layout } from 'antd'
import CcMenus from '../menus'

const { Sider } = Layout

interface Props {
  collapsed: boolean
}

const NavSider = (props: Props) => {
  const data = [
    {
      title: '首页',
      key: '/',
      icon: 'HomeOutlined',
      children: [],
    },
    {
      title: '图标选择器',
      key: '/chooseIcon',
      icon: 'EditOutlined',
      children: [],
    },
    {
      title: '省市区选择器',
      key: '/chooseArea',
      icon: 'BulbOutlined',
      children: [],
    },
    {
      title: '时间选择器',
      key: '/chooseTime',
      icon: 'FieldTimeOutlined',
      children: [],
    },
    {
      title: '城市选择器',
      key: '/chooseCity',
      icon: 'AppstoreOutlined',
      children: [],
    },
    {
      title: '趋势标记',
      key: '/trend',
      icon: 'VerticalAlignMiddleOutlined',
      children: [],
    },
    {
      title: '通知菜案',
      key: '/notification',
      icon: 'BellOutlined',
      children: [],
    },
    {
      title: '进度条',
      key: '/progress',
      icon: 'AlignLeftOutlined',
      children: [],
    },
    {
      title: '时间轴',
      key: '/timeline',
      icon: 'UnorderedListOutlined',
      children: [],
    },
    {
      title: '日历',
      key: '/calendar',
      icon: 'CalendarOutlined',
      children: [],
    },
    {
      title: '表单',
      key: '/form',
      icon: 'DatabaseOutlined',
      children: [],
    }
  ]

  return (
    <Sider trigger={null} collapsible collapsed={props.collapsed}>
      <CcMenus data={data} theme="light" mode="inline"></CcMenus>
    </Sider>
  )
}

export default NavSider

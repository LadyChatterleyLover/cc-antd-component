import { createElement } from 'react'
import * as Icons from '@ant-design/icons'
import { Menu } from 'antd'
import { useHistory, useLocation } from 'umi'

const { SubMenu } = Menu

interface Props {
  data: any[],
  key?: string,
  title?: string,
  icon?: string,
  children?: string,
  [key: string]: any
}


const CcMenus = (props: Props) => {
  const { data, key, title, icon, children, ...rest } = props
  const history = useHistory()
  const location = useLocation()


  const renderMenu = (data: any[]) => {
    return data.map(item => {
      if (item[children!] && item[children!].length) {
        return (
          <SubMenu
            key={item[key!]}
            title={item[title!]}
            icon={createElement((Icons as any)[item[icon!]])}>
            {renderMenu(item[children!])}
          </SubMenu>
        )
      }
      return (
        <Menu.Item
          key={item[key!]}
          icon={createElement((Icons as any)[item[icon!]])}>
          {item[title!]}
        </Menu.Item>
      )
    })
  }

  const clickItem = ({ key }: { key: string }) => {
    history.push(key)
  }

  return (
    <Menu
      defaultOpenKeys={[location.pathname]}
      defaultSelectedKeys={['/' + location.pathname.split('/')[1]]}
      {...rest}
      onClick={clickItem}
    >
      {renderMenu(data)}
    </Menu>
  )
}

CcMenus.defaultProps = {
  key: 'key',
  title: 'title',
  icon: 'icon',
  children: 'children',
}

export default CcMenus

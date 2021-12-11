import { createElement, ReactNode } from 'react'
import { Badge, Popover } from 'antd'
import * as Icons from '@ant-design/icons'

interface Props {
  count: ReactNode,
  overflowCount?: number,
  dot?: boolean,
  icon?: string,
  iconSize?: number | string,
  children: ReactNode
}


const CcNotification = (props: Props) => {
  const { count, overflowCount, dot, icon, iconSize, children } = props

  return (
    <Popover
      title={null}
      content={children}
      trigger='click'
      placement='bottom'
      overlayStyle={{width: 300, padding: 0}}
      overlayClassName='notification-popover-inner-content'
    >
      <Badge
        count={count}
        overflowCount={overflowCount}
        dot={dot}>
        {createElement((Icons as any)[icon!], {
          style: {
            fontSize: iconSize + 'px',
            cursor: 'pointer'
          }
        })}
      </Badge>
    </Popover>
  )
}

CcNotification.defaultProps = {
  overflowCount: 99,
  dot: false,
  icon: 'BellOutlined',
  iconSize: 22,
}

export default CcNotification

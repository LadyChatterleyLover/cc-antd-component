import { createElement } from 'react'
import * as Icons from '@ant-design/icons'

interface Props {
  text?: string,
  type?: 'up' | 'down',
  upIconColor?: string,
  downIconColor?: string,
  iconSize?: string | number,
  textColor?: string,
  textSize?: string | number,
  upIcon?: string,
  downIcon?: string,
  [key: string]: any
}

const CcTrend = (props: Props) => {
  const { text, type, upIconColor, downIconColor, iconSize, textColor, textSize, upIcon, downIcon } = props
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ fontSize: textSize + 'px', color: textColor }}>{text}</div>
      {
        type === 'up' ?
          <div style={{ marginLeft: 6 }}>
            {createElement((Icons as any)[upIcon!], {
              style: {
                fontSize: iconSize + 'px',
                color: upIconColor
              }
            })}
          </div>
          :
          <div style={{ marginLeft: 6 }}>
            {createElement((Icons as any)[downIcon!], {
              style: {
                fontSize: iconSize + 'px',
                color: downIconColor
              }
            })}
          </div>
      }
    </div>
  )
}

CcTrend.defaultProps = {
  text: '',
  type: 'up',
  upIconColor: 'red',
  downIconColor: 'green',
  iconSize: '14',
  textColor: '#000',
  textSize: '14',
  upIcon: 'UpOutlined',
  downIcon: 'DownOutlined',
}

export default CcTrend

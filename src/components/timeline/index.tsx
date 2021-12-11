import { ReactNode, useState, useEffect } from 'react'
import { Timeline } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import './index.less'

export interface TimelineItem {
  title: string,
  desc?: ReactNode,
  flag?: boolean,
  color?: string,
  dot?: ReactNode,
  label?: ReactNode,
  position?: 'left' | 'right' | ''
  height?: number,
  initHeight?: number,
  opacity?: number
}

interface Props {
  data: TimelineItem[],
  toggle?: boolean
  [key: string]: any
}

const CcTimeline = (props: Props) => {
  const { data, toggle, ...rest } = props
  const [timelineData, setTimelineData] = useState<TimelineItem[]>([...data])

  useEffect(() => {
    let arr = [...data]
    arr.map((item, index) => {
      if (item.desc && toggle) {
        item.flag = false
        let content = document.getElementById(`timeline-item-desc-${index}`)!
        item.height = Number(window.getComputedStyle(content).height.replace('px', ''))
        item.initHeight = Number(window.getComputedStyle(content).height.replace('px', ''))
      }
    })
    setTimelineData([...arr])
  }, [data])

  const clickItem = (item: TimelineItem) => {
    if (!item.desc || !toggle) return
    item.flag = !item.flag
    item.height = !item.flag ? item.initHeight : 0
    item.opacity = !item.flag ? 1 : 0
    setTimelineData([...timelineData])
  }

  return (
    <Timeline {...rest}>
      {data.map((item, index) => {
        return (
          <Timeline.Item key={index} color={item.color}>
            <div
              onClick={() => clickItem(item)}
              className={`${item.desc && toggle ? 'cursor' : ''}`
              }>
              <div style={{ display: 'flex' }}>
                <div>{item.title}</div>
                {
                  item.desc && toggle ? <div
                    className={`timeline-item-arrow ${item.flag && toggle ? 'timeline-item-arrow-rotate' : ''}`}
                    style={{ marginLeft: 6 }}>
                    <DownOutlined />
                  </div> : null
                }
              </div>
              <div
                id={`timeline-item-desc-${index}`}
                className='timeline-item-desc'
                style={{ height: item.height + 'px', opacity: item.opacity }}>
                {item.desc}
              </div>
            </div>
          </Timeline.Item>
        )
      })}
    </Timeline>
  )
}

CcTimeline.defaultProps = {
  toggle: false
}

export default CcTimeline

import { Tabs, Avatar, Tag } from 'antd'
import styles from './index.less'
import * as Icons from '@ant-design/icons'
import { createElement } from 'react'

const { TabPane } = Tabs

// 列表的每一项
export interface ListItem {
  // 头像
  avatar?: string,
  // 标题
  title?: string,
  // 描述
  desc?: string,
  // 时间
  time?: string,
  // 标签内容
  tag?: string,
  tagColor?: string
}

// 列表
export interface ListOptions {
  title: string,
  content: ListItem[]
}

// 操作选项
export interface ActionOptions {
  text: string,
  icon?: string
}

interface Props {
  list: ListOptions[],
  actions?: ActionOptions[]
}



const CcList = (props: Props) => {
  const { list, actions } = props
  return (
    <Tabs className='notification-list-tab'>
      {
        list.map((item, index) => {
          return (
            <TabPane tab={item.title} key={index}>
              <div>
                {
                  item.content.map((item1, index1) => {
                    return (
                      <div key={index1} className={styles.container}>
                        {item1.avatar ? <div className={styles.avatar}><Avatar src={item1.avatar}></Avatar></div> : null}
                        <div className={styles.content}>
                          {item1.title ?
                            <div className={styles.title}>
                              <div>{item1.title}</div>
                              {item1.tag ? <Tag color={item1.tagColor}>{item1.tag}</Tag> : null}
                            </div>

                            : null
                          }
                          {item1.desc ? <div className={styles.time}>{item1.desc}</div> : null}
                          {item1.time ? <div className={styles.time}>{item1.time}</div> : null}
                        </div>
                      </div>
                    )
                  })
                }
                <div className={styles.actions}>
                  {actions!.length ? actions!.map((action, i) => {
                    return (
                      <div
                        key={i}
                        className={`${styles['a-item']} ${i !== actions!.length ? `${styles.border}` : ''}`}
                      >
                        {action.icon ? <div className={styles['a-icon']}>
                          {createElement((Icons as any)[action.icon])}
                        </div> : null}
                        <div className={styles['a-text']}>{action.text}</div>
                      </div>
                    )
                  }) : null}
                </div>
              </div>
            </TabPane>
          )
        })
      }
    </Tabs >
  )
}

CcList.defaultProps = {
  actions: []
}

export default CcList

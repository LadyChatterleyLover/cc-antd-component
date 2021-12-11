import { Modal, message } from 'antd';
import * as Icons from '@ant-design/icons'
import './index.less'
import { createElement } from 'react'

export interface ChooseIconProps {
  visible: boolean,
  title?: string,
  onClose: () => void,
  clickItem?: (item: string) => void,
  [key: string]: any
}

const CcChooseIcon = (props: ChooseIconProps) => {
  const { title, visible, onClose,  ...rest } = props
  const clickItem = (item: string) => {
    navigator.clipboard.writeText(`<${item} />`).then(() => {
      message.success('复制成功')
      props.clickItem && props.clickItem(item)
      onClose()
    }).catch(() => {
      message.error('复制失败')
      props.clickItem && props.clickItem(item)
      onClose()
    })
  }
  return (
    <Modal
      title={title}
      visible={visible}
      footer={null}
      onCancel={onClose}
      width={700}
      {...rest}
      className='cc-choose-icon-modal-height'
    >
      <div className='cc-choose-icon-container'>
        {
          Object.keys(Icons).map((item, index) => {
            if ( typeof (Icons as any)[item] === 'object' && item !== 'default' && item !== 'IconProvider') {
              return (
                <div
                  key={index}
                  className='cc-choose-icon-container-item'
                  onClick={() => clickItem(item)}>
                  <div>
                    {createElement((Icons as any)[item], {
                      style: {
                        fontSize: 26
                      }
                    })}
                  </div>
                  <div className='cc-choose-icon-container-item-text'>{item}</div>
                </div>
              )
            }
          })
        }
      </div>
    </Modal>
  )
}
CcChooseIcon.defaultProps = {
  visible: false,
  title: '选择图标'
}

export default CcChooseIcon

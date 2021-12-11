import { useState } from 'react'
import {Button} from 'antd'
import CcChooseIcon from '@/components/chooseIcon/chooseIcon'

const Index = () => {
  const [visible, setVisible] = useState<boolean>(false)
  const onClose = () => {
    setVisible(false)
  }
  return (
    <div>
      <Button type='primary' onClick={() => setVisible(true)}>选择图标</Button>
      <CcChooseIcon
      clickItem={(item: string) => console.log(item)}
      visible={visible}
      onClose={onClose}
      ></CcChooseIcon>
    </div>
  )
}

export default Index

import CcForm from '@/components/form'
import { FormOptions } from '@/components/form/types'
import { Button, FormInstance, message } from 'antd';
import {useRef} from 'react'

const Index = () => {
  const config: FormOptions[] = [
    {
      type: 'input',
      prop: 'username',
      label: '用户名',
      value: '',
      rules: [
        {
          required: true,
          message: '用户名不能为空'
        }
      ],
      attrs: {
        allowClear: true
      }
    },
    {
      type: 'password',
      prop: 'password',
      label: '密码',
      value: '',
      rules: [
        {
          required: true,
          message: '用户名不能为空'
        }
      ],
      attrs: {
        allowClear: true
      }
    },
    {
      type: 'editor',
      prop: 'desc',
      label: '描述',
      value: '',
      rules: [
        {
          required: true,
          message: '描述不能为空'
        }
      ],
    }
  ]
  const form = useRef<FormInstance | null>(null)
  const login = () => {
    form.current!.validateFields().then(() => {
      const values = form.current!.getFieldsValue()
      console.log(values)
      message.success('登录成功')
    }).catch(() => {
      message.error('表单填写有误,请检查')
    })
  }

  const buttons = (
    <Button type='primary' block onClick={login}>登录</Button>
  )
  return (
    <div style={{ width: 500 }}>
      <CcForm ref={form} config={config} buttons={buttons}></CcForm>
    </div>
  )
}

export default Index

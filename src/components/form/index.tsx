import  { useState, useEffect, forwardRef, ReactNode } from 'react'
import { FormOptions } from './types'
import { Form } from 'antd'
import { components } from './config'
import E from "wangeditor"


export interface Components {
  name: string,
  component: ReactNode
}


export interface Col {
  span: number,
  offset?: number
}

export interface Layout {
  labelCol?: Col,
  wrapperCol?: Col
}
export interface TailLayout {
  wrapperCol?: Col
}

export interface Props {
  // 表单配置项
  config: FormOptions[],
  // 按钮配置
  buttons?: React.ReactNode,
  // 表单布局
  layout?: Layout,
  // 按钮布局
  tailLayout?: TailLayout,
  validateTrigger?: string | string[],
  onValuesChange?: (changeValue?: any, allValue?: any) => void
}

const CcForm = forwardRef((props: Props, _ref: any) => {
  let [img, setImg] = useState<string>('')
  // 编辑器实例
  let [edit, setEdit] = useState<any>()
  let toArray = (val: any) => {
    if (Array.isArray(val)) return val
    else {
      let arr: any[] = []
      arr.push(val)
      return arr
    }
  }


  useEffect(() => {
    // 表单初始值
    props.config.map((item: FormOptions) => {
      if (item.type === 'editor') {
        if (!edit) {
          const editor = new E("#editor")
          editor.create()
          editor.config.onchange = (html: string) => {
            form.setFields([{
              name: item.prop!,
              value: html
            }])
          }
          setEdit(editor)
        } else {
          if (item.value) {
            edit.txt.html(item.value)
          }
          edit.config.onchange = (html: string) => {
            form.setFields([{
              name: item.prop!,
              value: html
            }])
          }
        }
      }
    })
  }, [props])
  useEffect(() => {
    let values: any = {}
    props.config.map((item: FormOptions) => {
      if (item.type === 'upload') {
        setImg(item.value)
        values[item.prop!] = toArray(item.value)
      }
      if (item.type !== 'editor' && item.type !== 'upload') {
        values[item.prop!] = item.value
      }
    })
    form.setFieldsValue(values)
  }, [])

  let [form] = Form.useForm()

  // 根据配置项生成表单元素
  let renderComponent = (type: string) => {
    let com: any = null
    components.map((c: Components) => {
      if (c.name === type) com = c.component
    })
    return com
  }

  // 文件验证
  let normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e
    }
    return e && e.fileList
  }

  return (
    <Form
      {...props.layout}
      form={form}
      ref={_ref}
      validateTrigger={props.validateTrigger!}
      onValuesChange={props.onValuesChange!}
    >
      {
        props.config.map((item: FormOptions, index: number) => {
          item.component = renderComponent(item.type)
          if (item.children && item.children.length) {
            item.children.map((child: FormOptions) => {
              child.component = renderComponent(child.type)
            })
          }
          if (item.type !== 'upload' && item.type !== 'editor') {
            return (
              <Form.Item
                key={index}
                label={item.label}
                name={item.prop!}
                rules={item.rules!}
                valuePropName={item.valuePropName!}
              >
                {
                  item.children && item.children.length ?
                    <item.component {...item.attrs} style={{ ...item.style }}>
                      {
                        item.children.map((child: FormOptions, index: number) => {
                          return (
                            <child.component
                              key={index}
                              value={child.value}
                              label={child.label}
                            >
                              {child.label}
                            </child.component>
                          )
                        })
                      }
                    </item.component> :
                    <item.component options={item.options} {...item.attrs} style={{ ...item.style }} />
                }
              </Form.Item>
            )
          } else if (item.type === 'editor') {
            return (
              <Form.Item
                key={index}
                label={item.label}
                name={item.prop!}
                rules={item.rules!}>
                <div id='editor'></div>
              </Form.Item>
            )
          } else {
            return (
              <Form.Item
                key={index}
                label={item.label}
                name={item.prop!}
                rules={item.rules!}
                valuePropName='fileList'
                getValueFromEvent={normFile}>
                <item.component {...item.attrs} {...item.uploadAttrs} style={{ ...item.style }}>
                  {item.upload}
                </item.component>
              </Form.Item>
            )
          }
        })
      }
      {
        props.buttons ?
          <Form.Item {...props.tailLayout}>
            {props.buttons}
          </Form.Item> : null
      }
    </Form>
  )
})

// 默认属性值
CcForm.defaultProps = {
  layout: {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 }
  },
  tailLayout: {
    wrapperCol: {
      offset: 4,
      span: 20
    }
  },
  validateTrigger: 'onBlur'
}

export default CcForm

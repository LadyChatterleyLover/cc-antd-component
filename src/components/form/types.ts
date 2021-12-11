import { CSSProperties } from 'react'
import React from 'react'
import {Rule} from 'rc-field-form/lib/interface'


export interface Attrs {
  placeholder?: string,
  disabled?: boolean,
  size?: '' | 'large' | 'middle' | 'small' ,
  addonAfter?: React.ReactNode,
  addonBefore?: React.ReactNode,
  prefix?: React.ReactNode,
  suffix?: React.ReactNode,
  allowClear?: boolean,
  bordered?: boolean,
  maxLength?: number,
  allowHalf?: boolean,
  autoFocus?: boolean,
  headers?: any,
  action?: string,
  fileName?: string,
  rows?: number,
  showTime?: boolean,
  min?: number,
  max?: number,
  mode?: '' | 'multiple' | 'tags',
  showUploadList?: boolean,
  disabledDate?: (current: string) => boolean,
  disabledDateTime?: any
  fieldNames?: {
    label?: string,
    value?: string,
    children?: string
  }
}

export interface FormOptions {
  type: 'input' | 'search' | 'password' | 'textarea' | 'checkbox-group' |
  'checkbox' | 'radio-group' | 'radio' | 'cascader' | 'rate' |
  'input-number' | 'select' | 'option' | 'slider' | 'switch' |
  'date-picker' | 'time-picker' | 'upload' | 'tree-select' | 'editor',
  value: any,
  prop?: string,
  label?: string,
  rules?: Rule[],
  attrs?: Attrs,
  style?: CSSProperties,
  children?: FormOptions[],
  options?: any[]
  component?: any,
  upload?:any,
  valuePropName?: string,
  uploadAttrs?: any
  // 上传图片路径
  img?: string,
}

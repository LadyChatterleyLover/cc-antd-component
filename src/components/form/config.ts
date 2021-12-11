import {  Input, Checkbox, Radio, Cascader, InputNumber, Rate, Select, Slider, Switch, DatePicker, TimePicker, Upload, TreeSelect, FormInstance } from 'antd';

export interface Components {
  name: string,
  component: React.ReactNode
}

export const components: Components[] = [
  {
    name: 'input',
    component: Input
  },
  {
    name: 'search',
    component: Input.Search
  },
  {
    name: 'password',
    component: Input.Password
  },
  {
    name: 'textarea',
    component: Input.TextArea
  },
  {
    name: 'checkbox-group',
    component: Checkbox.Group,
  },
  {
    name: 'checkbox',
    component: Checkbox,
  },
  {
    name: 'radio-group',
    component: Radio.Group,
  },
  {
    name: 'radio',
    component: Radio,
  },
  {
    name: 'cascader',
    component: Cascader,
  },
  {
    name: 'rate',
    component: Rate,
  },
  {
    name: 'input-number',
    component: InputNumber,
  },
  {
    name: 'select',
    component: Select,
  },
  {
    name: 'option',
    component: Select.Option,
  },
  {
    name: 'slider',
    component: Slider,
  },
  {
    name: 'switch',
    component: Switch
  },
  {
    name: 'date-picker',
    component: DatePicker
  },
  {
    name: 'time-picker',
    component: TimePicker
  },
  {
    name: 'upload',
    component: Upload
  },
  {
    name: 'tree-select',
    component: TreeSelect
  },
]

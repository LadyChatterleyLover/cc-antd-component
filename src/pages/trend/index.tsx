import CcTrend from '@/components/trend'
import { Divider } from 'antd'

const Index = () => {
  return (
    <div>
      <Divider>正常趋势</Divider>
      <div style={{ display: 'flex' }}>
        <div>
          <CcTrend text='营业额'></CcTrend>
        </div>
        <div style={{ marginLeft: 20 }}>
          <CcTrend text='销售额' type='down'></CcTrend>
        </div>
      </div>
      <Divider>自定义图标颜色</Divider>
      <div style={{ display: 'flex' }}>
        <div>
          <CcTrend text='营业额' upIconColor='#abc123'></CcTrend>
        </div>
        <div style={{ marginLeft: 20 }}>
          <CcTrend text='销售额' type='down' downIconColor='#123abc'></CcTrend>
        </div>
      </div>
      <Divider>自定义文字颜色</Divider>
      <div style={{ display: 'flex' }}>
        <div>
          <CcTrend text='营业额' textColor='#abc123'></CcTrend>
        </div>
        <div style={{ marginLeft: 20 }}>
          <CcTrend text='销售额' type='down' textColor='#123abc'></CcTrend>
        </div>
      </div>
      <Divider>自定义图标</Divider>
      <div style={{ display: 'flex' }}>
        <div>
          <CcTrend text='营业额' upIcon='CaretUpOutlined'></CcTrend>
        </div>
        <div style={{ marginLeft: 20 }}>
          <CcTrend text='销售额' type='down' downIcon='CaretDownOutlined'></CcTrend>
        </div>
      </div>
      <Divider>自定义字体大小</Divider>
      <div style={{ display: 'flex' }}>
        <div>
          <CcTrend text='营业额' textSize={20} iconSize={20}></CcTrend>
        </div>
        <div style={{ marginLeft: 20 }}>
          <CcTrend text='销售额' type='down' textSize={30} iconSize={30}></CcTrend>
        </div>
      </div>
    </div>
  )
}

export default Index

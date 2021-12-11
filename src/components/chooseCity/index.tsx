import { useState } from 'react'
import { Popover, Radio, Select, Row, Col } from 'antd'
import { RadioChangeEvent } from 'antd/lib/radio/index.d'
import { DownOutlined } from '@ant-design/icons'
import styles from './index.less'
import cityData from './lib/city'


const { Option } = Select


export interface CityItem {
  id: number,
  spell: string,
  name: string,
}

interface Props {
  clickItem?: (c: CityItem) => void
}

const Content = (props: Props) => {
  const cities = cityData.cities
  const allCity = Object.values(cities).flat(2)
  const [radioValue, setRadioValue] = useState<string>('city')

  const changeRadio = (e: RadioChangeEvent | undefined) => {
    setRadioValue(e!.target.value)
  }

  const clickChat = (item: string) => {
    let dom = document.getElementById(item)
    if (dom) dom.scrollIntoView()
  }

  const clickItem = (item: CityItem) => {
    props.clickItem && props.clickItem(item)
  }
  const changeSelect = (val: number) => {
    const city = allCity.find(i => i.id === val)!
    props.clickItem && props.clickItem(city)
  }


  return (
    <div>
      <div style={{ display: 'flex' }}>
        <div>
          <Radio.Group value={radioValue} onChange={changeRadio} buttonStyle="solid">
            <Radio.Button value="city">按城市</Radio.Button>
            {/* <Radio.Button value="province">按省份</Radio.Button> */}
          </Radio.Group>
        </div>
        <div>
          <Select
            placeholder="请搜索城市"
            showSearch
            optionFilterProp="children"
            style={{ width: 262, marginLeft: 20 }}
            filterOption={(input, option: any) => {
              return option!.key.toLowerCase().indexOf(input.toLowerCase()) >= 0 || option.children.indexOf(input) >= 0
            }}
            onChange={changeSelect}
          >
            {allCity.map(item => {
              return (
                <Option key={item.spell} value={item.id}>{item.name}</Option>
              )
            })}
          </Select>
        </div>
      </div>
      <div className={styles.city}>
        {Object.keys(cities).map(item => {
          return (
            <div
              onClick={() => clickChat(item)}
              className={styles.chat}
              key={item}>
              {item}
            </div>
          )
        })}
      </div>
      <div style={{ maxHeight: 300, overflowY: 'scroll' }}>
        {
          Object.keys(cities).map((item, index) => {
            return (
              <Row key={index} id={item}>
                <Col span={2}>{item}:</Col>
                <Col span={22} className={styles.name}>
                  {
                    (cities as any)[item].map((c: CityItem) => {
                      return (
                        <div onClick={() => clickItem(c)} className={styles['name-item']} key={c.id}>{c.name}</div>
                      )
                    })
                  }
                </Col>
              </Row>
            )
          })
        }
      </div>
    </div>
  )
}



const CcChooseCity = (props: {onChange?: (r: CityItem) => void}) => {
  const [result, setResult] = useState<string>('请选择')
  const [flag, setFlag] = useState<boolean>(false)
  const [visible, setVisible] = useState<boolean>(false)

  const clickItem = (c: CityItem) => {
    setResult(c.name)
    setVisible(!visible)
    setFlag(!flag)
    props.onChange && props.onChange(c)
  }


  return (
    <Popover
      visible={visible}
      placement="bottomLeft"
      title={null}
      content={<Content clickItem={clickItem} />}
      trigger="click"
      overlayStyle={{ width: 500 }}
    >
      <div
        style={{ display: 'flex', cursor: 'pointer', width: 'fit-content' }}
        onClick={() => {
          setFlag(!flag)
          setVisible(!visible)
        }
        }
      >
        <div>{result}</div>
        <div style={{ marginLeft: 6 }}>
          <DownOutlined className={`${styles.icon} ${flag ? styles.rotate : ''}`} />
        </div>
      </div>
    </Popover>
  )
}

export default CcChooseCity

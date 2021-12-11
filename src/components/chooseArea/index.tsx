import { useState, useMemo } from 'react'
import area from './lib/pca-code.json'
import { Select } from 'antd'

const { Option } = Select

type Result = {
  name: string,
  code: string
}

export interface Area {
  province: Result,
  city: Result,
  area: Result
}

interface Props {
  width?: number | string,
  margin?: number | string,
  size?: 'small' | 'middle' | 'large'
  onChange?: (res: Area) => void
}

const CcChooseArea = (props: Props) => {
  let [provinceCode, setProvinceCode] = useState<string | undefined>(undefined)
  let [cityCode, setCityCode] = useState<string | undefined>(undefined)
  let [areaCode, setAreaCode] = useState<string | undefined>(undefined)

  const changeProvince = (val: string) => {
    if (val) setProvinceCode(val)
  }
  const changeCity = (val: string) => {
    if (val) setCityCode(val)
  }
  const changeArea = (val: string) => {
    if (val) {
      setAreaCode(val)
      const provinceValue = area.find(item => item.code === provinceCode)!
      const cityValue = cities.find(item => item.code === cityCode)!
      const areaValue = areas.find(item => item.code === val)!
      props.onChange && props.onChange({
        province: {
          name: provinceValue.name,
          code: provinceValue.code,
        },
        city: {
          name: cityValue.name,
          code: cityValue.code,
        },
        area: {
          name: areaValue.name,
          code: areaValue.code,
        }
      })
    }
  }
  const cities = useMemo(() => {
    if (provinceCode) {
      return area.find(item => item.code === provinceCode)!.children
    } else {
      return []
    }
  }, [provinceCode])

  const areas = useMemo(() => {
    if (cityCode) {
      return cities.find(item => item.code === cityCode)!.children
    } else {
      return []
    }
  }, [cityCode])


  return (
    <div style={{ display: 'flex' }}>
      <Select
        size={props.size!}
        value={provinceCode}
        onClear={() => {
          setProvinceCode(undefined)
          setCityCode(undefined)
          setAreaCode(undefined)
        }}
        placeholder="请选择省份"
        allowClear
        style={{ width: props.width + 'px' }}
        onChange={changeProvince}
      >
        {
          area.map(item => {
            return (
              <Option key={item.code} value={item.code}>{item.name}</Option>
            )
          })
        }
      </Select>
      <Select
        value={cityCode}
        size={props.size!}
        onChange={changeCity}
        onClear={() => {
          setCityCode(undefined)
          setAreaCode(undefined)
        }
        }
        placeholder="请选择城市"
        allowClear
        disabled={!provinceCode}
        style={{ width: props.width + 'px', marginLeft: props.margin! + 'px' }}>
        {
          cities.map(item => {
            return <Option key={item.code} value={item.code}>{item.name}</Option>
          })
        }
      </Select>
      <Select
        size={props.size!}
        value={areaCode}
        placeholder="请选择区域"
        allowClear
        disabled={!provinceCode || !cityCode}
        onChange={changeArea}
        onClear={() => {
          setAreaCode(undefined)
        }
        }
        style={{ width: props.width + 'px', marginLeft: props.margin! + 'px' }}>
        {
          areas.map(item => {
            return <Option key={item.code} value={item.code}>{item.name}</Option>
          })
        }
      </Select>
    </div>
  )
}

CcChooseArea.defaultProps = {
  width: 300,
  margin: 20,
  size: 'middle'
}

export default CcChooseArea

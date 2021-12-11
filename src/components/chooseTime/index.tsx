import { useState } from 'react'
import { TimePicker } from 'antd'
import moment, { Moment } from 'moment'

export interface Result {
  startTime: Moment,
  endTime: Moment
}



interface Props {
  allowClear?: boolean,
  startPlaceholder?: string,
  endPlaceholder?: string,
  size?: 'small' | 'middle' | 'large',
  margin?: number | string,
  width?: number | string,
  onChange?: (res: Result) => void
}



const CcChooseTime = (props: Props) => {
  const { allowClear, startPlaceholder, endPlaceholder, size, width, margin, onChange } = props
  const [startValue, setStartValue] = useState<Moment | undefined>(undefined)
  const [endValue, setEndValue] = useState<Moment | undefined>(undefined)
  const [startHour, setStartHour] = useState<number | undefined>(undefined)
  const [startMinute, setStartMinute] = useState<number | undefined>(undefined)
  const [startSecond, setStartSecond] = useState<number | undefined>(undefined)

  const Hours = Array.from(Array(24), (_, k) => k)
  const Minutes = Array.from(Array(60), (_, k) => k)
  const Seconds = Array.from(Array(60), (_, k) => k)


  const changeStartTime = (val: Moment | null) => {
    setStartValue(val!)
    if (val) {
      setStartHour(moment(val).hour())
      setStartMinute(moment(val).minute())
      setStartSecond(moment(val).second())
    } else {
      setEndValue(undefined)
    }
  }
  const changeEndTime = (val: Moment | null) => {
    setEndValue(val!)
    if (startValue && val) {
      const result: Result = {
        startTime: startValue,
        endTime: val
      }
      onChange && onChange(result)
    }
  }

  const disabledHours = () => {
    if (startValue) {
      return Hours.slice(0, startHour)
    }
    return []
  }
  const disabledMinutes = (h: number) => {
    if (startValue) {
      if (h > startHour!) return []
      return Minutes.slice(0, startMinute!)
    }
    return []
  }
  const disabledSeconds = (h: number, m: number) => {
    if (startValue) {
      if (h > startHour!) return []
      if (m > startMinute!) return []
      return Seconds.slice(0, startSecond! + 1)
    }
    return []
  }

  return (
    <div style={{ display: 'flex' }}>
      <TimePicker
        allowClear={allowClear}
        size={size}
        placeholder={startPlaceholder}
        style={{ width: width + 'px' }}
        onChange={changeStartTime}
      ></TimePicker>
      <TimePicker
        value={endValue}
        allowClear={allowClear}
        size={size}
        placeholder={endPlaceholder}
        disabled={!startValue}
        disabledHours={disabledHours}
        disabledMinutes={disabledMinutes}
        disabledSeconds={disabledSeconds}
        onChange={changeEndTime}
        style={{ marginLeft: margin + 'px', width: width + 'px' }}
      ></TimePicker>
    </div>
  )
}

CcChooseTime.defaultProps = {
  allowClear: true,
  startPlaceholder: '请选择开始时间',
  endPlaceholder: '请选择结束时间',
  size: 'middle',
  margin: 20,
  width: 300
}

export default CcChooseTime

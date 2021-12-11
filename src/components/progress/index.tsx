import { useState, useEffect } from 'react'
import { Progress } from 'antd'

interface Props {
  percent: number,
  isAnimate?: boolean,
  time?: number
  [key: string]: any
}


const CcProgress = (props: Props) => {
  const { percent, isAnimate, time, ...rest } = props
  let [p, setP] = useState<number>(0)

  useEffect(() => {
    if (isAnimate) {
      let t = Math.ceil(time! / percent)
      let timer = setInterval(() => {
        p += 1
        setP(p)
        if (p >= percent) {
          setP(percent)
          clearInterval(timer)
        }
      }, t)
    } else {
      setP(percent)
    }
  }, [percent])

  return (
    <Progress percent={p} {...rest}>

    </Progress>
  )
}

CcProgress.defaultProps = {
  isAnimate: false,
  time: 3000
}

export default CcProgress

import { useEffect, useState } from 'react'
import { ButtonTextCompoundInput, Calendar, EventClickArg, EventContentArg, ToolbarInput } from '@fullcalendar/core'
import daygridPlugin from '@fullcalendar/daygrid'
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction'


export interface EventItem {
  // 事件标题
  title: string,
  // 开始时间
  start: string,
  // 结束时间
  end: string,
  // 是否可拖动编辑
  editable?: boolean
}

interface Props {
  local?: string,
  initialView?: string,
  buttonText?: ButtonTextCompoundInput,
  headerToolbar?: ToolbarInput,
  footerToolbar?: ToolbarInput,
  events?: EventItem[],
  eventContent?: (arg: EventContentArg) => void,
  dateClick?: (info: DateClickArg) => void,
  eventClick?: (info: EventClickArg) => void
}



const CcCalendar = (props: Props) => {
  let [calendar, setCalendar] = useState<Calendar | null>(null)
  const renderCalendar = () => {
    const el = document.getElementById('calendar')
    if (el) {
      // 日历的配置选项
      let calendar = new Calendar(el, {
        // 使用到的插件
        plugins: [daygridPlugin, interactionPlugin],
        // 视图模式
        initialView: props.initialView,
        // 语言
        locale: props.local,
        // 按钮文字
        buttonText: props.buttonText,
        // 头部工具栏
        headerToolbar: props.headerToolbar,
        // 底部工具栏
        footerToolbar: props.footerToolbar,
        // 事件源
        eventSources: [
          {
            // 生成事件
            events(e, callback) {
              if (props.events && props.events!.length) callback(props.events!)
              else callback([])
            }
          }
        ],
        // 点击日历的某一天
        dateClick(info: DateClickArg) {
          props.dateClick && props.dateClick(info)
        },
        // 点击日历上的时间
        eventClick(info: EventClickArg) {
          props.eventClick && props.eventClick(info)
        },
        // 显示事件的结束时间
        displayEventEnd: true,
        // 自定义渲染内容
        eventContent: props.eventContent,
      })
      calendar.render()
      setCalendar(calendar)
    }
  }


  useEffect(() => {
    renderCalendar()
  }, [props.events, calendar])
  return (
    <div id='calendar'></div>
  )
}


CcCalendar.defaultProps = {
  local: 'zh-CN',
  initialView: 'dayGridMonth',
  buttonText: {
    today: '今天',
    month: '月',
    week: '周',
    day: '日',
    prevYear: '上一年',
    nextYear: '下一年',
    prev: '上一月',
    next: '下一月'
  },
  headerToolbar: {
    start: 'title',
    center: '',
    end: 'prev today next'
  },
  footerToolbar: {},
  events: [],
}

export default CcCalendar

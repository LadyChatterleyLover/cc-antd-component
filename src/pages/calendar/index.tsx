import CcCalendar from '@/components/calendar'

const Index = () => {
  let events = [
    {
      title: '购物',
      start: '2021-12-10 10:00:00',
      end: '2021-12-10 12:00:00',
      editable: true
    },
    {
      title: '学习',
      start: '2021-12-10 08:00:00',
      end: '2021-12-10 16:00:00'
    }
  ]
  return (
    <div>
      <CcCalendar events={events}></CcCalendar>
    </div>
  )
}

export default Index

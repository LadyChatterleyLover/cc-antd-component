import CcProgress from '@/components/progress'

const Index = () => {
  return (
    <div style={{width: 600}}>
      <CcProgress percent={60} isAnimate></CcProgress>
      <CcProgress percent={60} isAnimate time={5000}></CcProgress>
      <CcProgress percent={60} isAnimate type="circle"></CcProgress>
    </div>
  )
}

export default Index

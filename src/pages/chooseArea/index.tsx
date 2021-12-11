import CcChooseArea from '@/components/chooseArea'

const Index = () => {
  const handleChange = (val: any) => {
    console.log(val)
  }
  return (
    <div>
      <CcChooseArea onChange={handleChange}></CcChooseArea>
    </div>
  )
}

export default Index

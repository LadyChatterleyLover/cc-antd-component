import CcChooseCity from "@/components/chooseCity"

const Index = () => {
  const onChange = (val: any) => {
    console.log(val)
  }
  return (
    <div>
      <CcChooseCity onChange={onChange}></CcChooseCity>
    </div>
  )
}

export default Index

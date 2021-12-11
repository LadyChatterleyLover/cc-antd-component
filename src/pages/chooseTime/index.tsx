import CcChooseTime from "@/components/chooseTime"

const index = () => {
  const onChange = (val: any) => {
    console.log(val)
  }
  return (
    <div>
      <CcChooseTime onChange={onChange}></CcChooseTime>
    </div>
  )
}

export default index

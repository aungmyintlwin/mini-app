import { MdAccountBox } from "react-icons/md";

type Props = {
  name: string,
  point: number,
  bounus_point: number,
  bounus_status: boolean,
}

function FriendCard({
  name,
  point,
  bounus_point,
  bounus_status
}: Props) {
  return (
    <div className="flex flex-row justify-between items-center p-2 my-2 rounded-2xl bg-slate-600">
      <div className="flex flex-row justify-start items-center">
        <MdAccountBox className="w-12 h-12" />
        <div className="ml-2">
          <p className="text-start">{name}</p>
          <p className="text-start"> P- {point}</p>
        </div>
      </div>
      <div className="mr-2">
        <p className="text-center">P-{bounus_point}</p>
        {
          bounus_status ? <p className="text-center text-success">Complete</p> : <p className="text-center text-yellow-500">Processing</p>
        }
        
      </div>
    </div>
  )
}

export default FriendCard
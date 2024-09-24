import Layout from "../../components/layout/Layout"
import { SlPresent } from "react-icons/sl";
import { IoCopyOutline } from "react-icons/io5";
import { useState } from "react";
import FriendCard from "../../components/Friend/FriendCard";
type FriendUser = {
  id: number,
  name: string,
  point: number,
  bounus_point: number,
  bounus_status: boolean,
}

function Friend() {
  const [friends,setFriends] = useState<FriendUser[]>([
    {
      id: 1,
      name: "Aung Aung",
      point: 189000,
      bounus_point: 5000,
      bounus_status: false
    },
    {
      id: 2,
      name: "Chuu Chuu",
      point: 2189000,
      bounus_point: 5000,
      bounus_status: true
    },
    {
      id: 3,
      name: "Mg Mg ",
      point: 9000,
      bounus_point: 5000,
      bounus_status: false
    },
    {
      id: 4,
      name: "Joe",
      point: 67000,
      bounus_point: 5000,
      bounus_status: false
    },
    {
      id: 5,
      name: "Aye Aye",
      point: 2000,
      bounus_point: 5000,
      bounus_status: false
    },
    {
      id: 6,
      name: "John Doe",
      point: 222000,
      bounus_point: 5000,
      bounus_status: true
    },
    {
      id: 7,
      name: "Hnin Hnin",
      point: 233000,
      bounus_point: 5000,
      bounus_status: true
    },
    {
      id: 8,
      name: "U Hla",
      point: 1200,
      bounus_point: 5000,
      bounus_status: false
    },
  ])
  return (
    <Layout>
      <div>
        <div className="px-2 pt-4 pb-24">
            <h1 className="text-center text-3xl">Invite  Friends!</h1>
            <h5 className="text-center text-sm">You and your friend will receive bonuses</h5>
            <div className="flex flex-row justify-start items-center p-2 my-2 rounded-2xl bg-slate-400">
              <SlPresent className="w-16 h-16 text-orange-500" />
              <div className="justify-center ml-4">
                <h3 className="text-2xl py-1" >Invite a friend</h3>
                <h6 className="text-sm">
                  <span className="text-sm text-orange-400 mr-2">P-50000</span>for you and your friend
                </h6>
                <p>After your friend complete new user task</p>
              </div>
            </div>
            <div className="flex flex-row justify-start items-center p-4 my-2 rounded-2xl bg-orange-400">
                <h5 className="text-xl">
                  Your are already a referral , invited by
                  <span className="text-xl text-orange-800 ml-2">Aung Aung</span>
                </h5>
            </div>
            <div className="flex flex-row justify-start items-center p-4 my-2 rounded-2xl bg-slate-300">
              <input
                type="text"
                placeholder="Add invite code"
                className="input input-bordered input-success w-full max-w-xs" 
              />
              <button className="btn btn-primary ml-2">Get Bonuses</button>
            </div>
            <div>
              {
                friends.map(friend => (
                  <FriendCard
                    key={friend?.id}
                    name={friend?.name}
                    point={friend?.point}
                    bounus_point={friend?.bounus_point}
                    bounus_status={friend?.bounus_status}
                  />
                ))
              }
            </div>
        </div>
        <div className="fixed bottom-20 left-6 flex justify-center items-center z-60">
          <button className="btn btn-wide btn-primary btn-lg">Invite a friend</button>
          <button 
            className="btn btn-square btn-primary btn-lg ml-2"
            onClick={() =>  navigator.clipboard.writeText('https://t.me/hamster_kOmbat_bot/start?startapp=kentId5409341333')}
          >
            <IoCopyOutline className="w-8 h-8 text-white" />
          </button>
        </div>
      </div>
    </Layout>
  )
}

export default Friend
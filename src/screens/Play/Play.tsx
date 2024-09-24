import Layout from "../../components/layout/Layout"

import { palyAppOne,  palyAppTwo,  palyAppThree,  palyAppFour } from '../../assets/images';

import { useState } from "react";
import PlayAppCard from "../../components/PlayApp/PlayAppCard";

type PlayApp = {
  id: number,
  icon: string,
  title: string,
  amount: number,
}
function Play() {
  const [playApps,setPlayApps] = useState<PlayApp[]>([
    {
      id: 1,
      icon: palyAppOne,
      title: "Play App One",
      amount: 1000
    },
    {
      id: 2,
      icon: palyAppTwo,
      title: "Play App Two",
      amount: 1000
    },
    {
      id: 3,
      icon: palyAppThree,
      title: "Play App Three",
      amount: 1000
    },
    {
      id: 4,
      icon: palyAppFour,
      title: "Play App Four",
      amount: 1000
    }
  ])
  return (
    <Layout>
        <div className="px-2 pt-4 pb-24">

          <h1 className="text-xl ml-4 my-4">Intall App and Earn Mega Points</h1>
          <div className="flex flex-row justify-center flex-wrap gap-4">
            {
              playApps.map(play => (
                <PlayAppCard
                  key={play?.id}
                  img={play?.icon}
                  title={play?.title}
                />
              ))
            }
          </div>

        </div>
    </Layout>
  )
}

export default Play
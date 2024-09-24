
import { palyAppOne,  palyAppTwo,  palyAppThree,  palyAppFour } from '../../assets/images';

import { useState } from "react";
import Layout from '../../components/layout/Layout';

type PlayApp = {
  id: number,
  icon: string,
  title: string,
  amount: number,
}
function PlayDetail() {
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
          <h1 className="text-xl ml-4 my-4">How to install and Play App then Get Reward</h1>
          <div className="justify-items-center">

            <div className="grid justify-items-center">
              <div className="w-4/5">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
                  className="w-full"
                  alt="Tailwind CSS Carousel component" />
              </div>
              <p className="text-md my-4">How to install and Play App then Get Reward How to install and Play App then Get Reward</p>
            </div>
            
            <div className="grid justify-items-center">
              <div className="w-4/5">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
                  className="w-full"
                  alt="Tailwind CSS Carousel component" />
              </div>
              <p className="text-md my-4">How to install and Play App then Get Reward How to install and Play App then Get Reward</p>
            </div>

            <div className="grid justify-items-center">
              <div className="w-4/5">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
                  className="w-full"
                  alt="Tailwind CSS Carousel component" />
              </div>
              <p className="text-md my-4">How to install and Play App then Get Reward How to install and Play App then Get Reward</p>
            </div>

            <div className="grid justify-items-center">
              <div className="w-4/5">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
                  className="w-full"
                  alt="Tailwind CSS Carousel component" />
              </div>
              <p className="text-md my-4">How to install and Play App then Get Reward How to install and Play App then Get Reward</p>
            </div>

          </div>
          <button className="btn btn-block btn-primary btn-lg">Install & Play</button>
        </div>
    </Layout>
  )
}

export default PlayDetail
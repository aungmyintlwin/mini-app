import Layout from "../../components/layout/Layout"

import { atomIcon, ayaPayIcon, kbzPayIcon, mlbbIcon, mptIcon, myTelIcon, ooredooIcon, wavePayIcon } from '../../assets/images';
import TopUp from "../../components/TopUp/TopUp";
import { useState } from "react";

type topUp = {
  id: number,
  icon: string,
  title: string,
  amount: number,
}
function Home() {
  const [topUpData,setTopUpData] = useState<topUp[]>([
    {
      id: 1,
      icon: mptIcon,
      title: "MPT Top-up Card - 1,000 Ks",
      amount: 1000
    },
    {
      id: 2,
      icon: ooredooIcon,
      title: "Ooredoo Top-up Card - 1,000 Ks",
      amount: 1000
    },
    {
      id: 3,
      icon: atomIcon,
      title: "Atom Top-up Card - 1,000 Ks",
      amount: 1000
    },
    {
      id: 4,
      icon: myTelIcon,
      title: "MyTel Top-up Card - 1,000 Ks",
      amount: 1000
    },
    {
      id: 5,
      icon: mptIcon,
      title: "MPT Top-up Card - 3,000 Ks",
      amount: 3000
    },
    {
      id: 6,
      icon: ooredooIcon,
      title: "Ooredoo Top-up Card - 3,000 Ks",
      amount: 3000
    },
    {
      id: 7,
      icon: atomIcon,
      title: "Atom Top-up Card - 3,000 Ks",
      amount: 3000
    },
    {
      id: 8,
      icon: myTelIcon,
      title: "MyTel Top-up Card - 3,000 Ks",
      amount: 3000
    },
  ])
  const [gameItem,setGameItem] = useState<topUp[]>([
    {
      id: 1,
      icon: mlbbIcon,
      title: "MLBB  diamond - 10 Dia",
      amount: 1000
    },
    {
      id: 2,
      icon: mlbbIcon,
      title: "MLBB  diamond - 30 Dia",
      amount: 3000
    },
    {
      id: 3,
      icon: mlbbIcon,
      title: "MLBB  diamond - 50 Dia",
      amount: 5000
    },
    {
      id: 4,
      icon: mlbbIcon,
      title: "MLBB  diamond - 100 Dia",
      amount: 10000
    }
  ])
  const [cashItems,setCashItems] = useState<topUp[]>([
    {
      id: 1,
      icon: wavePayIcon,
      title: "WavePay  Transfer - 15,000 Ks",
      amount: 15000
    },
    {
      id: 2,
      icon: kbzPayIcon,
      title: "KBZ Pay  Transfer - 30,000 Ks",
      amount: 30000
    },
    {
      id: 3,
      icon: ayaPayIcon,
      title: "AYA Pay  Transfer - 30,000 Ks",
      amount: 30000
    },
    {
      id: 4,
      icon: wavePayIcon,
      title: "Wave Pay  Transfer - 30,000 Ks",
      amount: 30000
    },
    {
      id: 6,
      icon: ayaPayIcon,
      title: "AYA Pay  Transfer - 50,000 Ks",
      amount: 50000
    },
    {
      id: 6,
      icon: kbzPayIcon,
      title: "KBZ Pay  Transfer - 50,000 Ks",
      amount: 50000
    },
  ])
  return (
    <Layout>
        <div className="px-2 pt-4 pb-24">

          <h1 className="text-xl ml-4 my-4">Top Up Card</h1>
          <div className="flex flex-row justify-center flex-wrap gap-4">
            {
              topUpData.map(topup => (
                <TopUp
                  key={topup?.id}
                  img={topup?.icon}
                  title={topup?.title}
                  amount={topup?.amount}
                  btnText="Buy"
                />
              ))
            }
          </div>

          <h1 className="text-xl ml-4 my-4">Game Item</h1>
          <div className="ml-5 flex flex-row float-start flex-wrap gap-4 mb-4">
            {
              gameItem.map(topup => (
                <TopUp
                  key={topup?.id}
                  img={topup?.icon}
                  title={topup?.title}
                  amount={topup?.amount}
                  btnText="Buy"
                />
              ))
            }
          </div>

          <h1 className="text-xl ml-4 my-4">Cash Out Transfer</h1>
          <div className="ml-5 flex flex-row float-start flex-wrap gap-4">
            {
              cashItems.map(topup => (
                <TopUp
                  key={topup?.id}
                  img={topup?.icon}
                  title={topup?.title}
                  amount={topup?.amount}
                  btnText="Buy"
                />
              ))
            }
          </div>

        </div>
    </Layout>
  )
}

export default Home
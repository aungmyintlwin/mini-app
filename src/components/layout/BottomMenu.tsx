
import { NavLink } from 'react-router-dom';
import { SiCoinmarketcap } from "react-icons/si";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { PiUsersThreeFill } from "react-icons/pi";
import { FaGooglePlay } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { PiHandWithdrawFill } from "react-icons/pi";

function BottomMenu() {

  return (
        <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-xl bg-[#272a2f] flex justify-around items-center z-50 rounded-3xl text-xs">
            <NavLink 
                to="/" 
                className={({ isActive }) =>
                    isActive ? "text-center text-[#85827d] w-1/6 bg-[#1c1f24] m-1 p-2 rounded-2xl" : "text-center text-[#85827d] w-1/6"
                }
            >
                {
                    ({isActive}) => (
                        <>
                            <SiCoinmarketcap className={isActive ? "text-slate-200 w-8 h-8 mx-auto" : "text-slate-500 w-8 h-8 mx-auto"}/>
                            <p className={isActive ? "text-slate-200 mt-1" : "text-slate-500 mt-1"}>Market</p>
                        </>

                    )
                }
            </NavLink>
            <NavLink 
                to="/earn" 
                className={({ isActive }) =>
                    isActive ? "text-center text-[#85827d] w-1/6 bg-[#1c1f24] m-1 p-2 rounded-2xl" : "text-center text-[#85827d] w-1/6 p-2"
                }
            >
                {
                    ({isActive}) => (
                        <>
                            <RiMoneyDollarCircleLine className={isActive ? "text-slate-200 w-10 h-8 mx-auto" : "text-slate-500 w-8 h-8 mx-auto"}/>
                            <p className={isActive ? "text-slate-200 mt-1" : "text-slate-500 mt-1"}>Earn</p>
                        </>

                    )
                }
            </NavLink>
            <NavLink 
                to="/friend" 
                className={({ isActive }) =>
                    isActive ? "text-center text-[#85827d] w-1/6 bg-[#1c1f24] m-1 p-2 rounded-2xl" : "text-center text-[#85827d] w-1/6"
                }
            >
                {
                    ({isActive}) => (
                        <>
                            <PiUsersThreeFill className={isActive ? "text-slate-200 w-8 h-8 mx-auto" : "text-slate-500 w-8 h-8 mx-auto"}/>
                            <p className={isActive ? "text-slate-200 mt-1" : "text-slate-500 mt-1"}>Friends</p>
                        </>

                    )
                }
            </NavLink>
            <NavLink 
                to="/play" 
                className={({ isActive }) =>
                    isActive ? "text-center text-[#85827d] w-1/6 bg-[#1c1f24] m-1 p-2 rounded-2xl" : "text-center text-[#85827d] w-1/6"
                }
            >
                {
                    ({isActive}) => (
                        <>
                            <FaGooglePlay className={isActive ? "text-slate-200 w-8 h-8 mx-auto" : "text-slate-500 w-8 h-8 mx-auto"}/>
                            <p className={isActive ? "text-slate-200 mt-1" : "text-slate-500 mt-1"}>Play</p>
                        </>

                    )
                }
            </NavLink>
            <NavLink 
                to="/pay-out" 
                className={({ isActive }) =>
                    isActive ? "text-center text-[#85827d] w-1/6 bg-[#1c1f24] m-1 p-2 rounded-2xl" : "text-center text-[#85827d] w-1/6"
                }
            >
                {
                    ({isActive}) => (
                        <>
                            <PiHandWithdrawFill className={isActive ? "text-slate-200 w-8 h-8 mx-auto" : "text-slate-500 w-8 h-8 mx-auto"}/>
                            <p className={isActive ? "text-slate-200 mt-1" : "text-slate-500 mt-1"}>Pay Out</p>
                        </>

                    )
                }
            </NavLink>
            <NavLink 
                to="/user" 
                className={({ isActive }) =>
                    isActive ? "text-center text-[#85827d] w-1/6 bg-[#1c1f24] m-1 p-2 rounded-2xl" : "text-center text-[#85827d] w-1/6"
            }
            >
                {
                    ({isActive}) => (
                        <>
                            <FaUser className={isActive ? "text-slate-200 w-8 h-8 mx-auto" : "text-slate-500 w-8 h-8 mx-auto"}/>
                            <p className={isActive ? "text-slate-200 mt-1" : "text-slate-500 mt-1"}>User</p>
                        </>
    
                    )
                }
            </NavLink>
        </div>
  )
}
export default BottomMenu

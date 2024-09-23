
import Mine from '../../icons/Mine';
import Friends from '../../icons/Friends';
import Coins from '../../icons/Coins';
import { binanceLogo, hamsterCoin } from '../../assets/images';
import { Link, NavLink } from 'react-router-dom';

function BottomMenu() {

  return (
        <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-xl bg-[#272a2f] flex justify-around items-center z-50 rounded-3xl text-xs">
            <NavLink 
                to="/" 
                className={({ isActive }) =>
                    isActive ? "text-center text-[#85827d] w-1/5 bg-[#1c1f24] m-1 p-2 rounded-2xl" : "text-center text-[#85827d] w-1/5"
                }
            >
                <img src={binanceLogo} alt="Exchange" className="w-8 h-8 mx-auto" />
                <p className="mt-1">Home</p>
            </NavLink>
            <NavLink 
                to="/earn" 
                className={({ isActive }) =>
                    isActive ? "text-center text-[#85827d] w-1/5 bg-[#1c1f24] m-1 p-2 rounded-2xl" : "text-center text-[#85827d] w-1/5"
                }
            >
                <Mine className="w-8 h-8 mx-auto" />
                <p className="mt-1">Earn</p>
            </NavLink>
            <NavLink 
                to="/friends" 
                className={({ isActive }) =>
                    isActive ? "text-center text-[#85827d] w-1/5 bg-[#1c1f24] m-1 p-2 rounded-2xl" : "text-center text-[#85827d] w-1/5"
                }
            >
                <Friends className="w-8 h-8 mx-auto" />
                <p className="mt-1">Friends</p>
            </NavLink>
            <NavLink 
                to="/play" 
                className={({ isActive }) =>
                    isActive ? "text-center text-[#85827d] w-1/5 bg-[#1c1f24] m-1 p-2 rounded-2xl" : "text-center text-[#85827d] w-1/5"
                }
            >
                <Coins className="w-8 h-8 mx-auto" />
                <p className="mt-1">Play</p>
            </NavLink>
            <NavLink 
                to="/user" 
                className={({ isActive }) =>
                    isActive ? "text-center text-[#85827d] w-1/5 bg-[#1c1f24] m-1 p-2 rounded-2xl" : "text-center text-[#85827d] w-1/5"
                }
            >
                <img src={hamsterCoin} alt="Airdrop" className="w-8 h-8 mx-auto" />
                <p className="mt-1">User</p>
            </NavLink>
        </div>
  )
}
export default BottomMenu

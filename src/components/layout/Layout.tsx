import { ReactNode } from 'react';
import BottomMenu from './BottomMenu';


type LayoutProps = {
  children: ReactNode
}

function Layout(props: LayoutProps) {

  return (
    <>
      <div className="bg-white flex justify-center">
        <div className="w-full bg-gray-700 flex flex-col h-screen max-w-xl">
          {props?.children}
        </div>
        {/* Bottom Menu */}
        <BottomMenu/>

      </div>
    </>
  )
}

export default Layout

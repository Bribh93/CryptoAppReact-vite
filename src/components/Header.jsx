import { MdOutlineCyclone } from "react-icons/md";

export const Header = () => {
  return (
    < >
      <div className="flex justify-between items-center justify-items-center">
        <div >
          <span className="flex items-center gap-6 text-7xl text-[#FC4583] cursor-pointer"><MdOutlineCyclone className="animate-spin"/>
          <p className="text-5xl text-gray-300 font-bold ">BBH93</p></span>
        </div>

        <nav className="flex gap-20 text-2xl ">
          
            <button className=" text-gray-200">Home</button>
            <button className="hover:text-gray-200 text-gray-500">Token</button>
            <button className="hover:text-gray-200 text-gray-500"> Use Radix</button>
            <button className="hover:text-gray-200 text-gray-500">Learn</button>
          
        </nav>

        <button className="outline outline-offset-2 outline-[#FC4583] px-14 py-4 rounded-md text-gray-300 text-2xl
        transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#b5174c] duration-300">Get Started</button>
      </div>
    </> 
  )
}

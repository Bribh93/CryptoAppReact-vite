

import { MdOutlineArrowCircleRight } from "react-icons/md";

export const Body = () => {

    
    

  return (
    <>
       <div className="flex gap-4 mt-40"> 
            <section className="flex-initial w-3/5">
                <h1 className="text-gray-200 text-7xl font-bold mb-20">Radix Bring Asset Backed Investing the 
                    <span className="text-[#FC4583] border-b-4 border-[#FC4583] rounded"> Blokchain </span></h1>

                <p className="text-gray-400 text-2xl mb-28">The Radix Ecosystem allows for Asset Backed Financing across the 
                globe and spanning Real Assets, Mortgage Securities and the Metaverse.
                </p>
                <div className="flex gap-8">
                    <button className="bg-[#FC4583] px-14 py-4 rounded-md text-gray-200 text-2xl hover:bg-[#b5174c]">Get Started</button>
                    <button className="flex gap-4 items-center justify-center text-gray-200 text-xl">Explore Ecosystem <MdOutlineArrowCircleRight className="animate-pulse"/></button>
                </div>
                
            </section>
            <section className="flex-initial w-2/5 text-gray-200 text-center">
                <div className=" bg-gradient-to-b from-[#54434F] p-10 outline outline-offset-0 outline-1 rounded-md">
                    <h1 className="text-4xl mb-8">Token Sale Ends In</h1>
                    <div >
                        <div className="flex items-center justify-center gap-10 ">
                            <p className="bg-black/20 p-6 font-semibold rounded-md text-2xl">56</p>
                            <p className="bg-black/20 p-6 font-semibold rounded-md text-2xl">69</p>
                            <p className="bg-black/20 p-6 font-semibold rounded-md text-2xl">28</p>
                            <p className="bg-black/20 p-6 font-semibold rounded-md text-2xl">55</p>
                        </div>
                        <div className="flex items-center justify-center gap-x-14 text-gray-300">
                            <p className="mr-8">Days</p>
                            <p className="mr-2">Hours</p>
                            <p>Minutes</p>
                            <p>Second</p>
                        </div>
                    </div>
                    <button className="bg-[#FC4583] px-14 py-4 rounded-md text-gray-200 text-2xl m-4 hover:bg-[#b5174c]">Buy Token Now</button>
                    <div className="grid grid-cols-2 gap-4 text-gray-300">
                        <div className="text-left">
                            <p className="text-2xl text-gray-200 mb-4">$68,765,987</p>
                            <p className="mb-4">Worth of Tokens</p>
                            <p className="mb-4">$8m</p>
                            <p>Softcap in 3658 days</p>
                        </div>
                        <div className="text-right">
                            <p className="text-2xl text-gray-200 mb-4">7,675</p>
                            <p className="mb-4">BTC Ralsed</p>
                            <p className="mb-4">$78m</p>
                            <p>Hardcap</p>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
    </>
  )
}

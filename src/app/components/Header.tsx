

const Header = () => {
  return (
    <>
    <div className="border-b border-[#F7F779] flex justify-around bg-black py-5 text-white">
        <div>
            <h1 className="text-[#F7F779]  sm:text-xl font-bold">Anuj Rana</h1>
        </div>
        <div>
            <ul className="flex gap-8 font-semibold  ">
            <li className="hover:text-[#F7F779] hover:underline cursor-pointer">HOME</li>
            <li className="hover:text-[#F7F779] hover:underline cursor-pointer">ABOUT ME</li>
            <li className="hover:text-[#F7F779] hover:underline cursor-pointer">PORTFOLIO</li>
            <li className="hover:text-[#F7F779] hover:underline cursor-pointer">CONTACT</li>
            </ul>
        </div>
        <div>
            <button className="hover:bg-[#F7F779] hover:shadow-lg   hover:shadow-[#eded9b] text-black font-semibold mt-[-8px] px-4 py-2 rounded-lg bg-[#FFFF7D]">About Me</button>
        </div>
    </div>
    
    
    </>
  )
}

export default Header
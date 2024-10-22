import { FiBell } from "react-icons/fi";
import { BiMicrophone, BiSearch } from "react-icons/bi";
import { CgFileAdd } from "react-icons/cg";
import { useState,lazy,Suspense } from "react";

function Header({ setValue }) {
  const [active, setActive] = useState(false);
  
  const Account=lazy(()=>
    import("./Account")

  )
  // if (active){
  //   import('./Account').then(exported=>{
  //     exported.Account()
  //   })
  // }
  // function delayForDemo(promise) {
  //   return new Promise(resolve => {
  //     setTimeout(resolve, 2000);
  //   }).then(() => promise);
  // }
  
  return (
    <div className="flex p-3 h-[4rem] justify-between items-center w-full pr-[4rem]">
      <div></div>
      <form action="" className="flex h-[3rem] relative ">
        <input
          type="search"
          placeholder="Search"
          className="border rounded-[3rem] px-5 py-4 text-2xl w-[40rem] relative bg-gray-600"
          onChange={(e) => setValue(e.target.value)}
        />
        <BiSearch
          size={50}
          className="absolute right-[4rem]  bg-primarycolor rounded-tr-[3rem]  rounded-br-[3rem] p-2 mt-[-1px] w-[3rem] border border-l-0"
        />
        <BiMicrophone
          size={50}
          className=" rounded-full  p-2  bg-primarycolor ml-8 "
        />
      </form>
      <div className="flex w-[10rem] justify-between">
        <CgFileAdd size={40} />
        <FiBell size={40} />
      <div className="relative">
          <p className="text-2xl bg-red-500 text-white w-[2.5rem] h-[2.5rem] flex justify-center items-center font-bold p-2 rounded-full cursor-pointer " onClick={()=>setActive(!active)}>
          A
        </p>
        {/* {active && <Account />} */}
        {
           active && (
            <Suspense fallback={'loading'}>
              <Account />
            </Suspense>
          )
        }
        </div>
      </div>
    </div>
  );
}

export default Header;

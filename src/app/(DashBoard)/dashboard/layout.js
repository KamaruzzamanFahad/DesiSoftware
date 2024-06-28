"use client";
import { MdHome } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaMoneyBillWave } from "react-icons/fa6";
import { MegaMenuDropdown } from "flowbite-react";
import { GiMoneyStack } from "react-icons/gi";

export default function Layout({ children }) {
  const pathname = usePathname();
 
  return (
    <>
      <div className="flex -mx-[5%]">
        <div className="bg-white w-60 h-screen mt-1 pt-2">
          <div className="p-2">
            <Link href={"/dashboard"}>
              <div
                className={`flex items-center gap-2 py-1 rounded-md px-2 ${
                  pathname === "/dashboard"
                    ? "text-white bg-blue-500"
                    : "text-black"
                }`}
              >
                <MdHome />
                <h1>{"Dashboard"}</h1>
              </div>
            </Link>
          </div>

          <div className="p-2">
              <div
                className={`flex items-center gap-2 py-1 rounded-md px-2`}
              >
                <FaWallet />
                <MegaMenuDropdown toggle={<>Account</>} className=' border-none  shadow-none'>
            <ul className="grid grid-cols-1">
              <div className="">
                <li>
                  <div className="p-2">
                    <Link href={"/dashboard/alldeposit"}>
                      <div
                        className={`flex items-center gap-2 py-1 rounded-md px-2 ${
                          pathname === "/dashboard/alldeposit"
                            ? "text-white bg-blue-500"
                            : "text-black"
                        }`}
                      >
                        <FaMoneyBillWave />
                        <h1>{"All Deposit"}</h1>
                      </div>
                    </Link>
                  </div>
                </li>

                
                <li>
                  <div className="p-2">
                    <Link href={"/dashboard/allwithdraw"}>
                      <div
                        className={`flex items-center gap-2 py-1 rounded-md px-2 ${
                          pathname === "/dashboard/allwithdraw"
                            ? "text-white bg-blue-500"
                            : "text-black"
                        }`}
                      >
                        <GiMoneyStack  />
                        <h1>{"All Withdraw"}</h1>
                      </div>
                    </Link>
                  </div>
                </li>
              </div>
            </ul>
          </MegaMenuDropdown>
              </div>
            
          </div>


          
        </div>

        <div className="m-3 bg-white w-full">{children}</div>
      </div>
    </>
  );
}

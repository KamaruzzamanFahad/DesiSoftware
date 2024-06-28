import "flowbite/dist/flowbite.css";
import {
  Button,
  MegaMenu,
  MegaMenuDropdown,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  Badge,
} from "flowbite-react";
import Image from "next/image";
import { FaArrowRightToBracket, FaYoutube } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

export default function NavBer() {
  return (
    <div className="px-[5%] bg-white py-5 ">
      <Navbar fluid rounded>
        <NavbarBrand href="https://desisoftware" className='mr-auto'>
          <Image src="/download.png" width={50} height={50}></Image>
        </NavbarBrand>
        <div className="flex md:order-2">
          <Button>Get started</Button>
          <NavbarToggle />
        </div>
        <NavbarCollapse>
          <NavbarLink href="#" active>
            Home
          </NavbarLink>
          <NavbarLink href="#">Products</NavbarLink>
          <NavbarLink href="#">Services</NavbarLink>
          <NavbarLink href="#">Hosting</NavbarLink>
          <NavbarLink href="#">Blog</NavbarLink>
          <NavbarLink href="#">Careers</NavbarLink>
          <NavbarLink href="#">Reviews</NavbarLink>
          <MegaMenuDropdown toggle={<>Pages</>}>
            <ul className="grid grid-cols-1">
              <div className="space-y-4 p-4">
                <li>
                  <a
                    href="#"
                    className="hover:text-primary-600 dark:hover:text-primary-500"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary-600 dark:hover:text-primary-500"
                  >
                    Meet Our Team
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary-600 dark:hover:text-primary-500"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary-600 dark:hover:text-primary-500"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary-600 dark:hover:text-primary-500"
                  >
                    Terms & Condition
                  </a>
                </li>
              </div>
            </ul>
          </MegaMenuDropdown>
        </NavbarCollapse>
        <div className='flex gap-4 px-10'>
        <FaFacebookSquare  className='text-blue-500 text-3xl'/>
        <FaYoutube  className='text-white bg-red-500 p-[5px] rounded-[3px] text-[30px]'/>

          <div className="relative">
            <FaCartShopping className="text-xl" />
            <p className="absolute  -top-4 -right-3 bg-teal-500 rounded-full w-5 h-5 text-sm text-white flex justify-center items-center">
              0
            </p>
          </div>
        </div>
        <div className="flex gap-3 justify-center items-center ">
          <Button className="bg-blue-500">
            Login
            <FaArrowRightToBracket className="ml-2 h-5 w-5" />
          </Button>
          <Button className="bg-pink-500 px-4">Sigup</Button>
        </div>
      </Navbar>
    </div>
  );
}

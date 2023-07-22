'use client'

import { usePathname } from 'next/navigation'
import style from './Navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react'
import { AuthContext } from '@/provider/AuthProvider'

const liList = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "Donation", link: "/donation" },
  { id: 3, title: "Events", link: "/events" },
  { id: 4, title: "Seek help", link: "/seek_help" },
  { id: 5, title: "Blog", link: "/blog" },
];

function Navbar() {
  const{user,logOut}=useContext(AuthContext);
  const pathname = usePathname()
  // console.log(pathname)
  // const [isActive, setIsActive] = useState(false)
  const handleLogOut=()=>{
    logOut()
    .then(()=>{})
    .catch(error=>console.log(error));
  }
  return (
    <div className=" bg-bgColor">
      <div className="navbar mx-auto max-w-7xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="space-y-3 shadow glass  menu menu-sm dropdown-content mt-3 z-[1] p-2 rounded-box w-52"
            >
              {liList.map((li) => {
                <li className={style.li_style} key={li.id}>
                  <Link
                    className={
                      pathname === `${li.link}` ? `${style.active_class}` : "text-black"
                    }
                    href={`${li.link}`}
                  >
                    {li.title}
                  </Link>
                </li>;
              })}
            </ul>
          </div>
          <div className="w-full flex items-center cursor-pointer">
            <Image src="/log.png" alt="logo" width={40} height={30} priority />
            <span className="text-black font-bold text-xl"> Charity~wave</span>
          </div>
        </div>
        <div className="navbar-center py-0 hidden lg:flex">
          <ul className="space-x-2 menu menu-horizontal px-1 ">
            {liList.map((li) => {
              let isActive = false;
              if (pathname === `${li.link}`) {
                isActive = true;
              }
              return (
                <li className={style.li_style} key={li.id}>
                  <Link
                    className={isActive ? `${style.active_class}` : "text-black"}
                    href={`${li.link}`}
                  >
                    {li.title}
                  </Link>
                </li>
              );
            })}
            {
              user && <div className="avatar">
              <div className="w-10 rounded-full">
              <Image src={user?.photoURL} width={80} height={80} alt={user?.displayName} />
              </div>
            </div>
            }
            {/* <li><Image src={user?.photoURL} width={80} height={80}></Image></li> */}
          </ul>
        </div>
        <div className="navbar-end space-x-6">
          {user? <><button onClick={handleLogOut} className='my_button'>Logout</button></>:
          <><Link href='/login' className="my_button">SignIn</Link></>}
        </div>
      </div>
    </div>
  );
}

export default Navbar;

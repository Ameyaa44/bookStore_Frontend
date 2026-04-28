import React ,{useState , useEffect} from 'react'
import { Link } from 'react-router-dom'
import { IoMdHome } from "react-icons/io";
import { FaBook } from "react-icons/fa";
import { IoBagAdd } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";
import { useLocation } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import base_url from '../../services/base_url';
import { useContext } from 'react';
import { adminProfileContext } from '../../contextApi/ContextApi';

function AdminSidebar() {
    const location=useLocation()
    const [collapse,setCollapse]=useState(false)
    const { adminProfileStatus, setAdminProfileStatus } = useContext(adminProfileContext);
    const [username, setUsername] = useState("");
    const [profilelogo, setProfileLogo] = useState("");

          useEffect(() => {
              if (sessionStorage.getItem("uname")) {
                setUsername(sessionStorage.getItem("uname"));
                setProfileLogo(sessionStorage.getItem("dp"));
              } else {
                setUsername("");
              }
            }, [adminProfileStatus]);
    return (
        <>
            <div className="bg-blue-300 min-h-full flex flex-col items-center justify-center py-10">
                <img src={
                            profilelogo
                              ? profilelogo.startsWith("https://lh3.googleusercontent.com")
                                ? profilelogo
                                : `${base_url}/uploadImg/${profilelogo}`
                              : "https://static.vecteezy.com/system/resources/thumbnails/037/468/797/small/user-icon-illustration-for-graphic-design-logo-web-site-social-media-mobile-app-ui-png.png"
                          } alt="admin" className='w-[130px] h-[130px] rounded-full' />
                <h1 className="my-3 font-semibold flex items-center gap-3">{username}
                    <button onClick={()=>setCollapse(!collapse)}>
                        <GiHamburgerMenu />
                    </button>
                </h1>
                {
                    !collapse&&
                    <div>
                    <div className="flex gap-2 items-center my-3">
                        <input type="radio" name="sidebar" id="home"  checked={location.pathname==='/admin-dashboard'}/>{' '}
                        <Link to={'/admin-dashboard'}>
                            <label htmlFor="" className='flex gap-1 items-center'><IoMdHome/>Home</label>
                        </Link>
                    </div>
                    <div className="flex gap-2 items-center my-3">
                        <input type="radio" name="sidebar" id="allbooks" checked={location.pathname==='/admin-books'}/>{' '}
                        <Link to={'/admin-books'}>
                            <label htmlFor="" className='flex gap-1 items-center'><FaBook />Resourses</label>
                        </Link>
                    </div>
                    <div className="flex gap-2 items-center my-3">
                        <input type="radio" name="sidebar" id="careers" checked={location.pathname==='/admin-career'}/>{' '}
                        <Link to={'/admin-career'}>
                            <label htmlFor="" className='flex gap-1 items-center'><IoBagAdd />Careers</label>
                        </Link>
                    </div>
                    <div className="flex gap-2 items-center my-3">
                        <input type="radio" name="sidebar" id="settings" checked={location.pathname==='/admin-settings'}/>{' '}
                        <Link to={'/admin-settings'}>
                            <label htmlFor="" className='flex gap-1 items-center'><IoSettingsSharp />Settings</label>
                        </Link>
                    </div>
                </div>
                }
                
            </div>
        </>
    )
}

export default AdminSidebar
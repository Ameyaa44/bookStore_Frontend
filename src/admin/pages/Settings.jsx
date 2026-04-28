import React from 'react'
import { useState , useEffect } from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSidebar from '../components/AdminSidebar'
import Footer from '../../components/Footer'
import { RiImageEditLine } from "react-icons/ri";


import { FaPen } from "react-icons/fa6";
import base_url from '../../services/base_url';
import { getAdminProfileApi,AdminprofileUpdateApi } from '../../services/allApis';
import { toast } from 'react-toastify';
import { useContext } from 'react';

import { adminProfileContext } from '../../contextApi/ContextApi';

function Settings() {
    
  const [profileData, setProfileData] = useState({
      username: "", email: "", password: "", confirmPassword: "", profilePic: ""});
    const [preview, setPreview] = useState("");
    const { adminProfileStatus, setAdminProfileStatus } = useContext(adminProfileContext);
  
    useEffect(() => {
      if (sessionStorage.getItem("token")) {
        getAdminProfileData();
      }
    }, []);
  
    const getAdminProfileData = async () => {
      const response = await getAdminProfileApi();
      if (response.status === 200) {
        console.log(response?.data);
        const admin = response?.data;
        console.log(admin);
        setProfileData({
          username: admin?.username,
          email: admin?.email,
          password: admin?.password,
          confirmPassword: admin?.password,
          profilePic: admin?.profile,
        });
      } else {
        console.log("Error fetching profile data");
      }
    };
  
    // profile image upload
    const handleImageUpload = (e) => {
      const imgFile = e.target.files[0];
      const previewUrl = URL.createObjectURL(imgFile);
      setPreview(previewUrl);
      setProfileData({ ...profileData, profile: imgFile });
    };
  
    // profile edit submit handler
    const handleProfileEdit = async (e) => {
      // console.log(profileData)
      const {
        username,
        email,
        password,
        confirmPassword,
        profileLogo,
      } = profileData;
      if (!username || !email || !password || !confirmPassword ) {
        toast.warning("Enter Valid Details");
      } else {
        if (password !== confirmPassword) {
          toast.error("Password and Confirm Password should be same");
          console.log(password, confirmPassword);
        } else {
          const formData = new FormData();
          if (preview) {
            for (let key in profileData) {
              formData.append(key, profileData[key]);
            }
            const response = await AdminprofileUpdateApi(formData);
            console.log(response);
            if (response.status === 200) {
              toast.success("Profile Updated Successfully");
              getAdminProfileData();
              const profileData = response?.data;
              sessionStorage.setItem("dp", profileData?.profile);
              sessionStorage.setItem("uname", profileData?.username);
              setAdminProfileStatus(profileData);
            } else {
              toast.error("Error Updating Profile");
            }
          } else {
            const response = await AdminprofileUpdateApi(profileData);
            console.log(response);
            if (response.status === 200) {
              toast.success("Profile Updated Successfully");
              getAdminProfileData();
              const profileData = response?.data;
              sessionStorage.setItem("dp", profileData?.profile);
              sessionStorage.setItem("uname", profileData?.username);
              setAdminProfileStatus(profileData);
            } else {
              toast.error("Something went wrong! Try Again");
            }
          }
        }
      }
    };

  return (
    <>
      <AdminHeader/>
      <div className='min-h-[60vh] md:grid grid-cols-4'>
          <div className='col-span-1'>
              <AdminSidebar/>
          </div>
          <div className='col-span-3'>
              <h1 className='text-3xl text-center my-5'>Admin Settings</h1>
              <div className='md:grid grid-cols-2'>
                <div className='p-2'>
                  <p className='text-justify'>
                    {profileData.bio}</p>
                  <p className='text-justify mt-3'>
                    The Admin Settings section is an important part of the Job Application Tracker that allows the administrator 
                    to manage and control various system functionalities. In this section, the admin can update personal details 
                    such as username, email address, and password, ensuring that account information remains accurate and secure. 
                    It also provides the ability to manage job-related data and configure system preferences based on requirements. 
                    By offering access to modify permissions and maintain application settings, the Admin Settings module helps 
                    improve the overall performance, security, and reliability of the system.
                  </p>
                </div>
                <div className='p-2'>
                  <div className='w-full h-full bg-sky-300 py-4 px-5'>
                    <div className='relative'>
                      <label htmlFor="profile_pic" className="position-relative d-flex justify-content-center align-items-center">
                          <input type="file" name="" className='d-none' id="profile_pic" onChange={(e) => { handleImageUpload(e) }} />
                          {
                            preview ?
                              <>
                                <img
                                  src={preview}
                                  alt="Profile"
                                  style={{
                                    borderRadius: "50%",
                                    width: "110px",
                                    height: "110px",
                                    objectFit: "cover",
                                    backgroundPosition: "top",
                                    backgroundRepeat: "no-repeat"
                                  }}
                                />
                                <RiImageEditLine size={27} style={{
                                  top: "85",
                                  left: "65",
                                  cursor: "pointer",
                                  boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.89)",
                                  borderRadius: "50%",
                                  padding: "5px",
                                  backgroundColor: "white"
                                }} color='black' className='position-absolute' />
                              </>
                              :
                              <>
                                <img
                                  src={profileData?.profilePic ? profileData?.profilePic.startsWith("https://png.pngtree.com/png-vector/20240628/ourmid/pngtree-women-s-profile-icon-on-a-black-background-vector-png-image_7060865.png") ? profileData?.profilePic : `${base_url}/uploadImg/${profileData?.profilePic}` : "https://static.vecteezy.com/system/resources/thumbnails/037/468/797/small/user-icon-illustration-for-graphic-design-logo-web-site-social-media-mobile-app-ui-png.png"}
                                  alt="Profile"
                                  style={{
                                    borderRadius: "50%",
                                    width: "110px",
                                    height: "110px",
                                    objectFit: "cover",
                                    backgroundPosition: "top",
                                    backgroundRepeat: "no-repeat"
                                  }}
                                />
                                <RiImageEditLine size={27} style={{
                                  top: "85",
                                  left: "65",
                                  cursor: "pointer",
                                  boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.89)",
                                  borderRadius: "50%",
                                  padding: "5px",
                                  backgroundColor: "white"
                                }} color='black' className='position-absolute' />
                              </>

                          }
                        </label>
                    </div>

                    <input
                    type="text"
                    className="w-full bg-white border rounded-sm my-5 py-2"
                    placeholder="Username"
                    value={profileData.username}
                    onChange={(e)=>setProfileData({...profileData, username: e.target.value})}
                  />

                  <input
                    type="text"
                    className="w-full bg-white border rounded-sm my-5 py-2"
                    placeholder="Password"
                    value={profileData.password}
                    onChange={(e)=>setProfileData({...profileData, password: e.target.value})}
                  />

                  <input
                    type="text"
                    className="w-full bg-white border rounded-sm my-5 py-2"
                    placeholder="Confirm password"
                    onChange={(e)=>setProfileData({...profileData, confirmPassword: e.target.value})}
                  />
                <div className="mb-4 grid grid-cols-2 gap-2">
                  <button  className="bg-red-500 text-white p-3 hover:bg-white hover:border-red-500 hover:text-red-500 rounded">
                    Reset
                  </button>
                  <button onClick={handleProfileEdit} className="bg-green-500 text-white p-3 hover:bg-white hover:border-red-500  hover:text-green-500 rounded">
                    Update
                  </button>
                    </div>
                  </div>
                </div>
              </div>
          </div>
      </div>
      <Footer/>
    </>
  )
}

export default Settings
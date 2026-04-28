import React, { useState,useEffect } from 'react'

import Footer from '../../components/Footer'
import AdminHeader from '../components/AdminHeader'
import AdminSidebar from '../components/AdminSidebar'
import { getAdminAllBooksApi,getAdminAllUsersApi,adminApproveBookApi } from '../../services/allApis'

import base_url from '../../services/base_url'
import { toast } from 'react-toastify'

function BookList() {

  const[bookStatus,setBookStatus]=useState(true)
  const[userStatus,setUserStatus]=useState(false)
  const[bookList,setBookList]=useState([])
  const[userList,setUserList]=useState([])

  useEffect(()=>{
    if(bookStatus){
      getBookList()
    }
    if(userStatus){
      getUserList()
    }
  },[userStatus])

  const getBookList=async()=>{
    const response=await getAdminAllBooksApi()
    if(response.status===200){
      console.log(response.data)
    setBookList(response.data)
    }
    else{
      console.log(response)
    }
  }

    const getUserList=async()=>{
    const response=await getAdminAllUsersApi()
    if(response.status===200){
      console.log(response.data)
    setUserList(response.data)
    }
    else{
      console.log(response)
    }
  }

  const handleBookApproval=async(id)=>{
    const response=await adminApproveBookApi(id)
    if(response.status===200){
      toast.success("Book Approved!")
    getBookList()
    }
    else{
      console.log(response)
      toast.error("Something Went Wrong!")
    }
  }

  return (
    <>
      <AdminHeader/>
        <div className='min-h-[60vh] grid grid-cols-1 md:grid-cols-4'>
          <div className='md:col-span-1'>
            <AdminSidebar/>
          </div>
          <div className='md:col-span-3 px-2 md:px-5'>
            <h2 className='text-center text-2xl my-5'>Resource</h2>
            <div className='flex justify-center items-center text-sm md:text-base'>
              <div onClick={() =>{ setBookStatus(true); setUserStatus(false);}}
                className={bookStatus? "p-3 border-l border-r border-t rounded-t-sm  border-gray-600  text-blue-500":
                  "p-3 border-b border-gray-600 cursor-pointer"}>
                    All Books
              </div>
              <div onClick={() => {setBookStatus(false);setUserStatus(true);}}
                className={userStatus?"p-3 border-l border-r border-t rounded-t-sm  border-gray-600  text-blue-500":
                "p-3 border-b border-gray-600 cursor-pointer"}>
                Users
              </div>
            </div>
            {
              bookStatus &&
                <div className='px-10 py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-center mt-5'>
                  {
                    bookList.length>0 ?
                    <>
                    {
                      bookList.map(item=>(
                      <div className="p-2 w-full max-w-[16rem] shadow-xl text-center rounded-lg mb-3">
                        <img src={item?.image} alt="" 
                          style={{height:"300px" , width:'100%'}}/>
                        <h3 className="text-xl">{item?.title}</h3>
                        <p>{item?.abstract.slice(0,10)}...</p>
                        <h4 className='text-lg text-blue-500'>&#8377;{item?.price}</h4>
                        {
                          item?.status=="pending" ?
                            <button onClick={()=>handleBookApproval(item._id)} className='bg-green-500 text-white border border-green-600 w-full py-2 hover:bg-white hover:text-green-700'>Approve</button>
                            :
                            <h2 className='text-green-600 text-center'>Approved</h2>

                        }
                      </div>
                      ))
                    }
                    </>
                    :
                    <h2 className='m-5 text-red-600 text-center text-xl'>No Books Available</h2>
                  }
              
                </div>

                
            }


            {
              userStatus &&
              <div className='px-10 py-5 flex flex-wrap justify-around gap-5 mt-5'>
                {
                  userList.length>0 ?
                  <>
                  {
                    userList.map(item=>(
                    <div className='max-w-[18rem] border bg-gray-100 py-2 px-4'>
                      <h1 className="text-center my-4 text-amber-900">ID : {item?._id}</h1>
                      <div className='grid grid-cols-3 gap-3'>
                        <div className='col-span-1'>
                          <img src={item.profile?item.profile.startsWith("https://lh3.googleusercontent.com/a/ACg8ocLGhkZNxXy-6mMKcTJ_3jV38DQScdCho7cQ1ccRm8iBIzCvuQ=s96-c")?item.profile:`${base_url}/uploadImg/${item.profile}`:"https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png"} alt=""
                          width={'150px'} />
                        </div>
                        <div className='col-span-2 flex flex-col justify-center overflow-hidden'>
                          <h2 className="text-blue-600 text-lg">{item?.username}</h2>
                          <p className='text-green-700 break-all text-sm sm:text-base'>
                            {item.email}
                          </p>
                        </div>
                      </div>
                    </div> 

                    ))
                  }
                  </>
                  :
                  <h2 className='m-2 text-red-600 text-center'>No users</h2>
                }

              </div>
            }
          </div>
        </div>
      <Footer/>
    </>
  )
}

export default BookList


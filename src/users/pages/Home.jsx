import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../../components/Footer';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { latestBookApi } from '../../services/allApis';
import { useContext } from 'react';
import { searchContext } from '../../contextApi/ContextApi';

function Home() {

  const [latestBooks, setLatestBooks] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const {globalSearchKey,setGlobalSearchKey}=useContext(searchContext)
  

  useEffect(() => {
    fetchLatestBooks();
  }, []);

  const navigate=useNavigate()

  const fetchLatestBooks = async () => {
    try {
      setLoading(true);
      const result = await latestBookApi();
      if (result.status === 200) {
        setLatestBooks(result.data);
      } else {
        setError('Please login to load books.');
      }
    } catch (err) {
      setError('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };


  const gotoBooks=()=>{
    navigate('./books')
  }

  return (
    <>
    <Header/>
    
    {/* Hero */}
    <section className='w-full h-[85vh] bg-[url(/img1.jpg)] bg-cover bg-center bg-fixed'>
      <div className='w-full h-[85vh] bg-[rgba(0,0,0,0.3)] flex justify-center items-center '>
        <div className='w-[35%] text-white  text-center  '>
          <h1 className='text-5xl'> Wonderful Gifts</h1>
            <h2 className='text-2xl'>Give your family and friends a book</h2>
              <div className="mt-5 flex items-center justify-center bg-white p-2 rounded-full  ">
                <input type="text" className="placeholder-gray-700 text-black w-full focus:outline-none" placeholder='Search Books' onChange={(e)=>{setGlobalSearchKey(e.target.value)}}/>
                <FaMagnifyingGlass className='text-blue-950 me-3' onClick={gotoBooks}/>
              </div>
        </div>
      </div>
    </section>

     {/* New Arrivals */}
        <section className='my-3 px-5 md:px-40'>
          <h1 className='text-center text-2xl'>New Arrivals</h1>
          <h1 className='text-center text-4xl'>Explore Our Latest Collection</h1>
          {loading ? (
              <div className='flex justify-center items-center mt-10 h-[300px]'>
                <p className='text-gray-500 text-lg'>Loading books...</p>
              </div>
            )
            :
            error ? (
              <div className='flex justify-center items-center mt-10 h-[300px]'>
                <p className='text-red-500'>{error}</p>
              </div>
            )
            :
            (
            <div className="w-full mt-5 px-3">
              {latestBooks.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 place-items-center">
                  {latestBooks.map((book) => (
                    <div key={book._id} className="w-full max-w-[350px] p-2 shadow-xl text-center rounded-xl">
                      <img src={book.image || "/book1.jpg"} alt={book.title} className="h-[350px] w-full object-cover rounded-lg"/>
                      <h2 className="text-lg font-semibold mt-2"> {book.title}</h2>
                      <p className="text-sm text-gray-600 truncate px-2">{book.description}</p>
                      <h4 className="text-lg text-blue-600 font-bold">₹{book.price}</h4>
                    </div>
                  ))}
                </div>
                ) : (
                  <p className="text-center text-gray-500 mt-10">
                    No books available.
                  </p>
                )
              }
            </div>
          )}
          <div className='mt-5 flex justify-center'>
            <Link to={'./books'}><button className='px-3 bg-blue-900 text-white py-2'>Explore More...</button></Link>
          </div>
        </section>

      {/* Featured Authors */}
      <section className='my-20 px-5 md:px-40 grid md:grid-cols-2 gap-10'>
        <div>
          <h1 className="text-xl text-center">Featured Author</h1>
          <h2 className="text-3xl text-center">Captivates with every word</h2>
          <p className="text-justify mt-3">
            A featured author is a literary voice that resonates deeply with readers, captivating hearts and minds through the power 
            of storytelling. With a unique ability to weave emotions, imagination, and insight into every sentence, their work transcends
            ordinary narratives and creates unforgettable reading experiences. Each page reflects their passion, creativity, and dedication
            to the craft, drawing readers into worlds filled with meaning, inspiration, and authenticity. Through compelling characters and 
            thought-provoking themes, this author continues to leave a lasting impression, making every word a journey worth exploring.
          </p>
          <p className="text-justify mt-3">
            Renowned for their exceptional storytelling and distinctive voice, this featured author brings stories to life with
            elegance and depth. Their writing effortlessly blends creativity with emotion, allowing readers to connect with every
            character and moment on a personal level. With each carefully crafted sentence, they transport audiences into immersive 
            worlds filled with inspiration, imagination, and meaning. Their work not only entertains but also encourages reflection, 
            making every piece a memorable experience that lingers long after the final page is turned.
          </p>
        </div>
        <div className="flex items-center">
          <img src="https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.jpg?s=612x612&w=0&k=20&c=NJSugBzNuZqb7DJ8ZgLfYKb3qPr2EJMvKZ21Sj5Sfq4=" alt="author-img"
          className='items-center w-full' style={{height:'450px'}}/>
        </div>
      </section>
      {/* Testimonials */}
      <section className="text-center my-20 px-5 md:px-40">
        <h1 className="text-2xl">Testimonials</h1>
        <h1 className="text-3xl my-3">See What Others Are Sayings</h1>
        <div className="flex flex-col items-center my-5">
          <img src="https://st4.depositphotos.com/1017228/20282/i/450/depositphotos_202829902-stock-photo-close-portrait-smiling-young-man.jpg" alt="testimonial-img" 
          className='rounded-full mt-5' style={{height:'200px' , width:'250px'}}/>
          <h3>John Luther</h3>
        </div>
        <p className="text-justify">
          This bookstore offers an excellent collection of books across various genres, making it easy for readers to 
          find exactly what they’re looking for.With a user-friendly interface, affordable prices, and smooth ordering process, 
          customers can enjoy a convenient and satisfying shopping experience. Fast delivery and quality service make this platform a 
          reliable choice for students,professionals, and book lovers alike.
        </p>
      </section>

    
    <Footer/>
    </>
  )
}

export default Home
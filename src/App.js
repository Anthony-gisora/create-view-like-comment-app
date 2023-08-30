import PostCard from "./components/postCard";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";

function App () {
  
  const [ comment, setComment ] = useState( false )

  const handleComment = () => {
    setComment( !comment )
  }

  const [ currentComme, setCurrentComment ] = useState()

  const [ comments, setComments ] = useState( [ {} ] )

  const handleComments = (event) => {
    event.preventDefault()
    setComments([...comments, {message: comment}])
  }
  

  return (
    <div className="flex flex-col w-[100vw] md:px-44 h-[100vh] bg-[#d9d9d9] items-center relative">
      <div className='h-[10%] flex items-center justify-between w-full px-2'>
        <h2 className='font-bold text-[24px]'>RealTime Post</h2>
        <div className='flex w-[40%] items-center justify-evenly'>
          <button><AddCircleOutlineIcon /></button>
          <button>Posts</button>
        </div>
      </div>
      <div className='w-full overflow-auto relative h-full'>
        <PostCard handleComment={ handleComment } />
        <PostCard handleComment={ handleComment } />
        <PostCard handleComment={ handleComment } />
        <PostCard handleComment={ handleComment } />
        { comment &&
          <>
          <div className=' fixed top-0 left-0 bg-[#000000f2] w-[100vw] h-[100vh] z-[10] scroll-none ' onClick={()=>{handleComment()}}></div>
            <div className=" top-[30%] left-5 md:left-[30%] h-[50%] md:w-[40%] bg-[#5a5a5a] flex flex-col items-center fixed z-[15]">
              <div className='flex items-center justify-between px-2 w-full pt-2'>
                <h3 className='text-[20px] font-bold' >Comment</h3>
                <button onClick={()=>{handleComment()}}> <CloseIcon /> </button>
              </div>
              <form className='h-full bg-[#999999] w-full p-2 flex flex-col items-center justify-evenly'>
                <textarea cols="38" rows="7" className='p-2 focus:outline-none resize-none' onChange={(e)=> setCurrentComment(e.target.value)} />
                <button type='submit' className='bg-[#2fa82f] active:bg-[#42ff2f] w-20' onSubmit={(event)=> handleComments(event)}>Send</button>
              </form>
            </div>
          </>
          
      }
      </div>
    </div>
  );
}

export default App;

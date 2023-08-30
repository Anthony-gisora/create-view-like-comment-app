import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { useState } from 'react';

const PostCard = ({handleComment, pComments}) => {
    const [ like, setLike ] = useState( false )
    const [likes, setLikes] = useState(0)

    const handleLike = () => {
        setLike( !like )
        like ? setLikes(0) : setLikes(1)
    }

    return ( 
        <div className='w-[95%] my-2 h-[50%] flex flex-col items-center justify-between mx-auto bg-[#ffffff] rounded-md drop-shadow'>
            <div className="h-[15%] w-full flex items-center justify-between px-1">
                <div className="border-b border-b-[#8c8c8c70] w-full h-full pt-1 rounded-md ">
                    <h2 className='font-bold' >Me</h2>
                    <p className='text-[#e6e6e6]'>time</p>
                </div>
            </div>
            <div className="h-[72%] w-full flex items-center justify-center px-1">
                <p className='text-center'>This is a temporal post text.</p>
            </div>
            <div className="h-[13%]  w-full flex items-center justify-around px-1 border-t border-t-[#8c8c8c70]">
                <button className='rounded bg-[#808080] w-[30%] ' onClick={() =>{ handleLike() }}> { likes !==0 && `${likes} `} { like ?  <ThumbUpAltIcon className='text-[#166cff]' /> : <ThumbUpOffAltIcon  className='text-[#ffffff]'/>} </button>
                <button className='rounded bg-[#808080] w-[30%] ' onClick={()=>{handleComment()}} >{ pComments !==0 && `${pComments} `} <TextsmsOutlinedIcon className='text-[#ffffff]' /> </button>
            </div>
            
        </div>
     );
}
 
export default PostCard;
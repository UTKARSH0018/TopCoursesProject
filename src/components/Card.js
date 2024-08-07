import React from 'react';
import {FcLike , FcLikePlaceholder} from "react-icons/fc";
import { toast } from 'react-toastify';

const Card = (props) => {
    let course = props.course;
    let lickedCourses = props.lickedCourses;
    let setLikedCourses = props.setLikedCourses;

    function clickHandler() {
        if(lickedCourses.includes(course.id)){
            //Pehle se like hua pada tha
            setLikedCourses( (prev) => prev.filter( (cid) => (cid !== course.id) ) );
            toast.warning("Like Removed");
        }
        else{
            //pahle se like nahi hai ye course
            //insert karna h ye course liked courses me
            if(lickedCourses.length === 0){
                setLikedCourses([course.id]);
            }
            else{
                //non-empty pahle se
                setLikedCourses( (prev) => [...prev , course.id]);
            }
            toast.success("Liked Successfully");
        }
    }

  return (
    <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden '>

        <div className='relative'>
            <img alt="" src={course.image.url}/>
        
            <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px] grid place-items-center' >
                <button onClick={clickHandler}>
                    {
                        !lickedCourses.includes(course.id) ? (<FcLikePlaceholder fontSize="1.75rem"/>) : (<FcLike fontSize="1.75rem"/>)
                    }
                </button>
            </div>

        </div>

        <div className='p-4'>
            <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
            <p className='mt-2 text-white'>
                {
                    course.description.length > 100 ? (course.description.substr(0,100)) + "..." : (course.description)
                }
            </p>
        </div>

    </div>
  )
}

export default Card;

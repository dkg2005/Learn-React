import React from 'react'
import appwriteService from '../appwrite/config'
import {Link} from 'react-router-dom'


function PostCard({$id, title, featuredImage}) {

  return (
   <Link to={`/post/${$id}`}> 
     <div className='w-full bg-gray-100 rounded-xl p-4'>
         <div className='w-full justify-center mb-4'>
         <img src={appwriteService.getFilPreview(featuredImage)} alt={title} className='rounded-xl '/>
         </div> 
         <h2
          className='text-xl fort-bold'
          >{title}</h2>
      </div>
   </Link>
  )
}

export default PostCard


// FOR DEBUGGING THE ERROR IN GETTING THE ALL POSTS , ALSO MAKE CHANGES IN THE AllPosts.JSX file IN WHICH PROPS ARE NOT PASSED CORRECTLY IN THE PostCard
// {imageUrl ? (
//    <img src={imageUrl} alt={title} className='rounded-xl' />
// ) : (
//    <img src="https://via.placeholder.com/150" alt={title} className='rounded-xl' />
// )}
// let imageUrl = '';

   //  if (featuredImage) {
   //      try {
   //          imageUrl = appwriteService.getFilPreview(featuredImage).toString();
   //          console.log("Generated Image URL:", imageUrl);
   //      } catch (error) {
   //          console.error("Error generating image URL:", error);
   //      }
   //  } else {
   //   //  console.warn("featuredImage is missing or undefined" ,$id);
   //  // console.log($id)
   //  }
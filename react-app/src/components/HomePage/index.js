import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import './HomePage.css'
import { getAllPosts } from '../../store/posts'




const HomePage = () => {
  const dispatch = useDispatch();
  //
  const posts = useSelector((state) => state.posts)
  // console.log('posts========', posts);
  // console.log('object.values=====', Object.values(posts)); [{}]
  // Object.values(myObj).map(dosomething)


  useEffect(() => {
    dispatch(getAllPosts())
  }, [])



  return (
    <>
      <div className='homepage-outer-shell'>
      TEST
        </div>
    </>
  );
}

export default HomePage;

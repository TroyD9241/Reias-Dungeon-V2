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
      <div className= "homepage-deviations-container">
        Deviations
      </div>


      <div className="topics">
        Topics
      </div>
      <div className='new-artists'>
        New Deviants
      </div>
      <div className="popular-deviations">
        Popular Deviations
      </div>
        </div>
    </>
  );
}

export default HomePage;

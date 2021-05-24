import React from 'react';
import {useSelector} from 'react-redux'


const SideBar = () => {
  const user = useSelector(state => state.session.user)
  return (
    <>

    </>
  );
}

export default SideBar;

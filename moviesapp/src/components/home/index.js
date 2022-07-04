import React, { useStart, useContext, useEffect } from "raect";
import axios from "axios";

const Home = () => {

    const { myFavourites,
          setMyfavourites} = useContext(tokenContext)
          setMyfavourites(localStorgre.setItem("myFavourites"))


          useEffect(()=>{
          }, [])


  return ( <div>





    
  </div>)
 
};


export default Home;
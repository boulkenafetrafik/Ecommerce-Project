import React from 'react';
import  Banner  from './Banner';
import HomeCategory from './HomeCategory';
import Cateoryshowcase from './Cateoryshowcase';
import LocationSprade from './LocationSprade';
import Sponsor from './Sponsor';
// import NavItems from '../components/Navitems';
import Wrap from './Wrap';
// import SignUP from './signup';
import { Navbar } from 'react-bootstrap';

const Home = () => {
    return (
        
        <div>
      {/* <Banner /> */}
      {/* <NavItems /> */}
      <Wrap />
      <Cateoryshowcase />
    <HomeCategory />
    <LocationSprade />
    <Sponsor/>
    {/* <SignUP /> */}
    
    

        </div>

    );
}

export default Home;





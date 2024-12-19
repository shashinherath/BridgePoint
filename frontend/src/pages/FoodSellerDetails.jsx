import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SellerProfile from "../components/SellerProfile";

const FoodSellerDetails = () => {
    return (
        
        <div className="flex flex-col">
            <Navbar />
            <SellerProfile />
            <Footer />
        </div>
    );
};

export default FoodSellerDetails;

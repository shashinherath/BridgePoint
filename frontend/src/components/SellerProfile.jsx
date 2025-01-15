import React from 'react';
import RicenCurry from "../assets/images/food/RicenCurry.png";
import { FaStar, FaRegStar } from 'react-icons/fa';

const SellerProfile = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 p-8">
            <div className="max-w-7xl mx-auto bg-white p-8 shadow-2xl rounded-lg">
                {/* Food Seller Information Section */}
                <section className="flex flex-col md:flex-row py-8 border-b border-gray-300">
                    <div className="flex-shrink-0">
                        <div className="w-48 h-48 rounded-full overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                            <img src={RicenCurry} alt="Rice and Curry" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div className="mt-6 md:mt-0 md:ml-8">
                        <h1 className="text-4xl font-bold text-gray-900">CDK</h1>
                        <div className="flex items-center mt-4">
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                            <FaRegStar className="text-yellow-500" />
                            <span className="ml-2 text-gray-600">(123 Reviews)</span>
                        </div>
                        <div className="mt-6">
                            <div className="text-lg text-gray-700 font-semibold">Contact: 0710849736</div>
                            <div className="mt-2 text-lg text-gray-700 font-semibold">Passara Road, Badulla</div>
                            <a
                                href="https://www.google.com/maps/place/C.D.K+Hotel/@6.9839635,81.0767768,17z/data=!3m1!4b1!4m6!3m5!1s0x3ae4612b44087e3d:0x607c7aac214437db!8m2!3d6.9839635!4d81.0793517!16s%2Fg%2F11h37ryzvy?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-2 text-blue-600 hover:text-blue-800 transition duration-300"
                            >
                                View on Map
                            </a>
                        </div>
                    </div>
                </section>

                {/* Description Section */}
                <section className="py-8 border-b border-gray-300">
                    <h2 className="text-3xl font-semibold text-gray-900">Description</h2>
                    <p className="mt-4 text-gray-700 leading-relaxed">
                        CDK offers a variety of delicious meals, specializing in traditional Sri Lankan cuisine. The food is prepared with fresh ingredients and served hot. Our Rice & Curry is a customer favorite, known for its rich flavors and satisfying portions.
                    </p>
                </section>

                {/* Menu Section */}
                <section className="py-8 border-b border-gray-300">
                    <h2 className="text-3xl font-semibold text-gray-900">Menu</h2>
                    <div className="mt-6">
                        <h3 className="text-2xl font-semibold text-gray-900">Main Course</h3>
                        <div className="flex justify-between items-center mt-4 hover:bg-gray-100 p-2 rounded">
                            <p className="text-gray-700">Rice & Curry - Rs. 150.00</p>
                        </div>
                        <div className="flex justify-between items-center mt-4 hover:bg-gray-100 p-2 rounded">
                            <p className="text-gray-700">Veg Kottu - Rs. 350.00</p>
                        </div>
                        <div className="flex justify-between items-center mt-4 hover:bg-gray-100 p-2 rounded">
                            <p className="text-gray-700">Noodles - Rs. 200.00</p>
                        </div>
                    </div>
                    <div className="mt-6">
                        <h3 className="text-2xl font-semibold text-gray-900">Starters</h3>
                        <div className="flex justify-between items-center mt-4 hover:bg-gray-100 p-2 rounded">
                            <p className="text-gray-700">Rolls - Rs. 50.00</p>
                        </div>
                        <div className="flex justify-between items-center mt-4 hover:bg-gray-100 p-2 rounded">
                            <p className="text-gray-700">Fish Bun - Rs. 50.00</p>
                        </div>
                        <div className="flex justify-between items-center mt-4 hover:bg-gray-100 p-2 rounded">
                            <p className="text-gray-700">Sinisambal Bun - Rs. 60.00</p>
                        </div>
                    </div>
                </section>

                {/* Reviews Section */}
                <section className="py-8">
                    <h2 className="text-3xl font-semibold text-gray-900">Customer Reviews</h2>
                    <div className="mt-6">
                        <div className="mb-4 bg-gray-100 p-4 rounded shadow-sm">
                            <p className="text-gray-700">Great food! - ★★★★★</p>
                        </div>
                        <form className="mt-6">
                            <h3 className="text-2xl font-semibold text-gray-900">Submit a Review</h3>
                            <textarea className="mt-4 w-full p-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Write your review..."></textarea>
                            <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Submit</button>
                        </form>
                        <div className="mt-6 text-gray-700 text-lg">Rating: 4.5/5</div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default SellerProfile;

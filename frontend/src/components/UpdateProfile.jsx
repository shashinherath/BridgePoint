import React, { useState } from 'react';

const UpdateProfile = ({ isOpen, onClose, onSave }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        companyName: '',
        address: '',
        mobileNumber: '',
        description: '',
        profilePicture: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-end bg-black bg-opacity-50 p-4">
            <div className="bg-white p-4 rounded shadow-lg w-full max-w-md my-0 h-auto flex flex-col justify-center">
                <h2 className="text-center text-2xl font-bold mb-4">My Profile</h2>
                <form onSubmit={handleSubmit} className="flex-grow">
                    <div className="mb-4 flex items-center">
                        <label htmlFor="profilePicture" className="block mb-1 w-1/6">Photo:</label>
                        <div className="w-1/3 flex items-center">
                            <div className="w-20 h-20 rounded-full bg-gray-300 overflow-hidden flex-shrink-0">
                                {formData.profilePicture ? (
                                    <img
                                        src={URL.createObjectURL(formData.profilePicture)}
                                        alt="Profile"
                                        className="w-full h-full object-cover"
                                    />
                                ) : null}
                            </div>
                            <input
                                type="file"
                                id="profilePicture"
                                name="profilePicture"
                                accept="image/*"
                                onChange={handleChange}
                                className="ml-4"
                            />
                        </div>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="name" className="block mb-1">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-1 border rounded"
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="email" className="block mb-1">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-1 border rounded"
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="password" className="block mb-1">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full p-1 border rounded"
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="companyName" className="block mb-1">Company Name:</label>
                        <input
                            type="text"
                            id="companyName"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            className="w-full p-1 border rounded"
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="address" className="block mb-1">Address:</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="w-full p-1 border rounded"
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="mobileNumber" className="block mb-1">Mobile Number:</label>
                        <input
                            type="text"
                            id="mobileNumber"
                            name="mobileNumber"
                            value={formData.mobileNumber}
                            onChange={handleChange}
                            className="w-full p-1 border rounded"
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="description" className="block mb-1">Short Description:</label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className="w-full p-1 border rounded"
                        />
                    </div>
                    <div className="flex justify-end mt-2">
                        <button type="button" onClick={onClose} className="mr-2 bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500">Cancel</button>
                        <button type="submit" className="bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;

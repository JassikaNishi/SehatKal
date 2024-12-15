import React, { useState } from "react";

const ProfilePage = () => {
  const [name, setName] = useState("Jassi");
  const [email, setEmail] = useState("jassie@example.com");
  const [bio, setBio] = useState("Hi, I’m Jassi! I love fitness and healthy living.");
  const [profilePic, setProfilePic] = useState(null);

  const handleProfilePicChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = URL.createObjectURL(e.target.files[0]);
      setProfilePic(file);
    }
  };

  const handleSave = () => {
    // Save the updated user details (This can be integrated with backend or local storage)
    console.log("Profile updated:", { name, email, bio });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-3xl mx-auto py-10">
        <div className="flex justify-center">
          <div className="relative">
            <img
              src={profilePic || "https://via.placeholder.com/150"}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover"
            />
            <label
              htmlFor="profile-pic"
              className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full cursor-pointer"
            >
              <input
                type="file"
                id="profile-pic"
                className="hidden"
                accept="image/*"
                onChange={handleProfilePicChange}
              />
              <i className="fas fa-camera">+</i>
            </label>
          </div>
        </div>

        <div className="mt-8">
          <div className="mb-6">
            <label htmlFor="name" className="block text-lg font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 p-3 w-full rounded-lg border border-gray-300"
              placeholder="Enter your full name"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 p-3 w-full rounded-lg border border-gray-300"
              placeholder="Enter your email address"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="bio" className="block text-lg font-medium text-gray-700">
              Bio
            </label>
            <textarea
              id="bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="mt-2 p-3 w-full rounded-lg border border-gray-300"
              placeholder="Write a short bio"
              rows="4"
            />
          </div>

          <div className="flex justify-end">
            <button
              onClick={handleSave}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

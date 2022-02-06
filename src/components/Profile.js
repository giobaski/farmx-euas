import React from "react";
import { Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";

const Profile = () => {
  const { user: currentUser } = useSelector((state) => state.auth);

  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  return (
  
    <div class="container w-25">
      <div class="card bg-secondary">
        <img class="float-left" src="https://i.postimg.cc/TwZLrKNN/user-profile-icon-23.png" ></img>
  </div>

  
  
       <h3>
        <button type="button" class="btn btn-primary">
          <strong>{currentUser.username}</strong> 
          </button>
        </h3>
      
  
    <p class="font-weight-bold">Profile</p>

    <h3>
   
    <button type="button" class="btn btn-primary text-center">

   <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
        {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
       

      
      
      <p>
        <strong>Id:</strong> {currentUser.id}
      </p>
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
      <strong>Authorities:</strong>
      <ul>
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul>
      </button>
        </h3>
    
  </div>


    
  );
};

export default Profile;
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeName } from "../store/slice/userName.slice";

const UserInput = () => {

  const dispatch= useDispatch();
  const [userName,setUserName]= useState("");

  const navigate = useNavigate();

  const dispatchUserName = () => {
    dispatch(changeName(userName));
    navigate("/characters");
  };

  return (
    <div>
      <h1>Hello trainer!</h1>
      <p>Give me your name to start</p>
      <input type="text" value={userName} onChange={e=> setUserName(e.target.value)}/>
      <button onClick={dispatchUserName}><i class="fa-sharp fa-solid fa-paper-plane"></i></button>
    </div>
  );
};

export default UserInput;

import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeName } from "../store/slice/userName.slice";

const UserInput = () => {

  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");

  const navigate = useNavigate();

  const dispatchUserName = () => {
    dispatch(changeName(userName));
    navigate("/characters");
  };

  return (

    <div className="conteinerUserInput">

      <div className="conteinerUserInput--form">
      <img className="conteinerUserInput--imgHeader" src="https://s3-alpha-sig.figma.com/img/ca59/d9ce/98042af437fdff212d3259040db2e2db?Expires=1664755200&Signature=D1-cUDtim09VyodQPnnSOTElNzktpmU~nrpj~CGRaCZ-4IyFvQ9hCqwGrhLof5ZI6L3ws5diSiGQj6KyhxsK1-sXIqnQsUdY31SdN-xU9yAgZzZEJAmzGpIlOv2S2ce11b5T9cauXtvyOkJXtkJx5puEa1XxRV2Ed~xEOs4C~EqmgjL00JCf0SP7-VJo2rZMbxng0NHfc0qnjQoXi9XAek6yJzMWIxONEBOUvkjfotKvPtdYG-Bvv-aVxGMx~qhtlvzzvvksDLi9WOhi-D-EQ-2zcOCdrreoxp1x23sr6vYzswtosAtxIoiDFICdtWjrC~vWFFrWXLwdJPxgENdjdw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" />
      <h1>Hello trainer!</h1>
      <p >Give me your name to start</p>

      <form onSubmit={dispatchUserName}>
        <input
          type="text"
          className="conteinerUserInput--input"
          required
          value={userName}
          placeholder="ENTER YOUR NAME"
          onChange={e => setUserName(e.target.value)} />
        <button>
          <i className="fa-sharp fa-solid fa-paper-plane"></i>
        </button>
      </form>
      </div>
        <img className="footer--Img" src="https://c.wallhere.com/photos/39/8b/Pok_mon_Pok_Balls_artwork-1368481.jpg!d" alt="" />

    </div>

  );
};

export default UserInput;

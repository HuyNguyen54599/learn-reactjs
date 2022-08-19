import React from "react";
import { useDispatch, useSelector } from "react-redux";
import HobbyList from "./components/HobbyList";
import { addNewHobby, setActiveHobby } from "./../../actions/hobby";

const randomNumber = () => {
  return 1000 + Math.trunc(Math.random() * 9000);
};

function Hobby() {
  const hobbyList = useSelector((state) => {
    return state.hobby.list;
  });
  const activeId = useSelector((state) => {
    return state.hobby.activeId;
  });

  const dispatch = useDispatch();

  const handleAddHobbyClick = () => {
    const newId = randomNumber();

    const newHobby = {
      id: newId,
      title: `Hobby ${newId}`,
    };

    const action = addNewHobby(newHobby);
    dispatch(action);
  };

  const handleHobbyClick = (hobby) => {
    const hobbyClicked = hobby.id;
    const action = setActiveHobby(hobbyClicked);
    dispatch(action);
  };

  console.log(hobbyList);

  return (
    <div className="hobby">
      <h3 className="hobby-title">Hobby by Redux</h3>
      <button onClick={handleAddHobbyClick}>Random new Hobby</button>
      <HobbyList
        list={hobbyList}
        activeId={activeId}
        onHobbyClick={handleHobbyClick}
      ></HobbyList>
    </div>
  );
}

export default Hobby;

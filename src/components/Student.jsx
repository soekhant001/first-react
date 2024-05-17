import React, { useState } from "react";

const Student = (props) => {
  let age = props.age;
  const [name, setName] = useState(props.name);
  const showAlert = () => {
    setName("updateName");
  };
  return (
    <ul className="ms-3 space-y-3 my-4">
      {/* {students.map(({ name, age }, index) => {
        // console.log(index);
        return (
          <div key={index}>
            <li className="text-lg">
              Name : <span className="font-bold">{name}</span>
            </li>
            <li className="text-lg">Age : {age}</li>
            <button
              onClick={showAlert}
              className="border-2 border-gray-500 px-3 py-1 rounded-md bg-gray-200 active:scale-75 duration-150"
            >
              ChangeName
            </button>
          </div>
        );
      })} */}
      <li className="text-lg">
        Name : <span className="font-bold">{name}</span>
      </li>
      <li className="text-lg">Age : {age}</li>
      <button
        onClick={showAlert}
        className="border-2 border-gray-500 px-3 py-1 rounded-md bg-gray-200 active:scale-75 duration-150"
      >
        ChangeName
      </button>
    </ul>
  );
};

export default Student;

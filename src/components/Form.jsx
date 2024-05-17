import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const trackName = (event) => {
    setName(event.target.value);
  };
  const trackAge = (event) => {
    setAge(event.target.value);
  };
  const showData = (event) => {
    event.preventDefault();
    const data = {
      name,
      age,
    };

    console.log(data);
  };
  return (
    <form className="p-5 space-y-5" onSubmit={showData}>
      <input
        onChange={trackName}
        type="text"
        placeholder="name"
        className="p-2 border-2 block border-slate-500  font-bold rounded-md"
      />
      <input
        onChange={trackAge}
        type="number"
        placeholder="age"
        className="p-2 border-2 block border-slate-500 font-bold rounded-md"
      />
      <button
        type="submit"
        className="border-2 border-gray-500 px-3 py-1 rounded-md bg-gray-200 active:scale-75 duration-150"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;

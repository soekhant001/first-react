import React from "react";
import One from "./components/One";
import "./components/One.css";
import Student from "./components/Student";
import Background from "./components/Background";
import Form from "./components/Form";

const App = () => {
  const name = "CodeHub";
  const students = [
    {
      name: "soeKhant",
      age: 19,
    },
    {
      name: "KhantSoe",
      age: 20,
    },
    {
      name: "SanKhoe",
      age: 21,
    },
  ];
  return (
    <div className="mx-5">
      <One name={name} className="mb-4" />

      <Background>
        <Student name={students[0].name} age={students[0].age} />
        <Student name={students[1].name} age={students[1].age} />
        <Student name={students[2].name} age={students[2].age} />
      </Background>

      <Background>
        <Form />
      </Background>
    </div>
  );
};

export default App;

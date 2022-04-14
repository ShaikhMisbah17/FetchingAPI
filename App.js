import React from "react";

function App(){
  const[person1, setPerson1] = React.useState();
  const[person2, setPerson2] = React.useState();
  const[person3, setPerson3] = React.useState();
  const[person4, setPerson4] = React.useState();
  const[person5, setPerson5] = React.useState();

React.useEffect(() => {
  fetch("https://swapi.dev/api/people/1")
  .then(res => res.json())
  .then(result => setPerson1(result))
}, []);
  
React.useEffect(() => {
  fetch("https://swapi.dev/api/people/2")
  .then(res => res.json())
  .then(result => setPerson2(result))
}, []);

React.useEffect(() => {
  fetch("https://swapi.dev/api/people/3")
  .then(res => res.json())
  .then(result => setPerson3(result))
}, []);

React.useEffect(() => {
  fetch("https://swapi.dev/api/people/4")
  .then(res => res.json())
  .then(result => setPerson4(result))
}, []);

React.useEffect(() => {
  fetch("https://swapi.dev/api/people/5")
  .then(res => res.json())
  .then(result => setPerson5(result))
}, []);

  return  (<><pre>{JSON.stringify(person1, null, 2)}</pre><pre>{JSON.stringify(person2, null, 2)}</pre><pre>{JSON.stringify(person3, null, 2)}</pre><pre>{JSON.stringify(person4, null, 2)}</pre><pre>{JSON.stringify(person5, null, 2)}</pre></>)
}

export default App;


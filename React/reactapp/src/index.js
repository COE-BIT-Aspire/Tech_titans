import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Greeting from './components/props/greeting';
import Header from './components/props/header';
import Car from './components/state/classCMP';
import BookDetails from './components/state/books';
import List from './components/state/list';
import Timer from './components/state/timer';
import Form from './components/forms/forms';

// function Welcome() {
//   return (
//     <h2>Welcome to this website</h2>
//   );
// }

// function Greeting() {
//   return (
//      <div>
//       <h1>Good morning Sujeeth!!</h1>
//       <Welcome />
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Greeting /> */}
    {/* <Header/> */}
    {/* <Color/>*/}
    {/* <Car/>  */}
    {/* <List/>
    <BookDetails />
    <Timer /> */}
    <Form/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const HeadingComponent=()=>{
  return <img className= "image" src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Google"/>
};
const FunctionComponent=()=>{
  return <div>
  <input className="search" placeholder ='Search'></input>
 
  </div>
}
const Buttons = () => {
  return (
    <div id="buttons">
      <button className="Search">Google Search</button>
      <button className="Lucky">I'm Feeling Lucky</button>
    </div>
  );
};

const LanguageComponent=()=>{
  return <h2>Google.co.offered.in:<span id="indian">Francais</span></h2>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <HeadingComponent/> 
  <FunctionComponent/>
  <Buttons/>
  <LanguageComponent/>
  </React.StrictMode>
);


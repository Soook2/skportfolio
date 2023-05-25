// import styles from'./App.module.css';
import './App.css';
import {useState, useEffect} from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor"

function App() {

  useEffect(()=> {
    $(document).ready(function() {
      var $magic = $(".magic"),
          magicWHalf = $magic.width() / 2;
      $(document).on("mousemove", function(e) {
        $magic.css({"left": e.pageX - magicWHalf, "top": e.pageY - magicWHalf});
      });
    });
  })

  const [isHover1, setisHoever1] = useState(false);
  const [isHover2, setisHoever2] = useState(false);
  const [isHover3, setisHoever3] = useState(false);


  return (    
    <div className="scene">
      <AnimatedCursor color='255, 255, 255'/>

      <div className="wrapper">
        <div className="content">
          <div className="text" onMouseOver={()=>setisHoever1(true)} onMouseOut={() => setisHoever1(false)}>
            {isHover1 ?<Link to="/About" style={{textDecoration: "none", color:"#D6C8A1"}}><div>About</div></Link>:<div>Hello</div>}
          </div>
          <div className="text" onMouseOver={()=>setisHoever2(true)} onMouseOut={() => setisHoever2(false)}>
            {isHover2 ? <Link to="/Project" style={{textDecoration: "none", color:"#D6C8A1"}}><div>Project</div></Link>:<div>I am</div>}
          </div>
          <div className="text" onMouseOver={()=>setisHoever3(true)} onMouseOut={() => setisHoever3(false)}>
            {isHover3 ? <Link to="/Contact" style={{textDecoration: "none", color:"#D6C8A1"}}><div>Contact</div></Link>:<div>Sukyoung</div>}
          </div>
        </div>
      </div>

      <div className="magic"></div>
      {/* <p class="check-out">Check out my other <a href="https://codepen.io/suez/public/" target="_blank">pens</a></p> */}

    </div>
  );
}

export default App;

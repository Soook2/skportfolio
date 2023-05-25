import React, {useState} from 'react';
import { Link } from "react-router-dom";
import styles from './Topbar.module.css';



export default function Topbar() {

const [isHover, setisHoever] = useState(false);
const [isOpen, setisOpen] = useState(false);

  return (
    // <div className='text' onMouseOver={()=>setisHoever1(true)} onMouseOut={() => setisHoever1(false)}>
    //         {isHover1 ?<Link to="/About" style={{textDecoration: "none", color:"#D6C8A1"}}><div>About</div></Link>:<div>Hello</div>}
    //       </div>
    // <div className={styles.topbarbackground}>
    //     <div className={styles.menu}  onMouseOver={()=>setisHoever(true)} onMouseOut={() => setisHoever(false)}>
    //         {isHover ? 
    //         <>
    //             <Link to="/" style={{textDecoration: "none", color:"#D6C8A1"}}>
    //                 <div className={styles.openmenu}>Home</div>
    //             </Link>
    //             <Link to="/About" style={{textDecoration: "none", color:"#D6C8A1"}}>
    //               <div className={styles.openmenu}>About</div>
    //             </Link>
    //             <Link to="/Project" style={{textDecoration: "none", color:"#D6C8A1"}}>
    //               <div className={styles.openmenu}>Project</div>
    //             </Link>
    //             <Link to="/Contact" style={{textDecoration: "none", color:"#D6C8A1"}}>
    //               <div className={styles.openmenu}>Contact</div>
    //             </Link>
    //         </>
    //         :
    //         <div>More</div>
    //         }
    //     </div>
    // </div>
<>
  <div className={styles.topbarbackground}>
    <div className={styles.menu}  onMouseOver={()=>setisHoever(true)} onMouseOut={() => setisHoever(false)}>
        {isHover ? 
        <>
            <Link to="/" style={{textDecoration: "none", color:"#D6C8A1"}}>
                <div className={styles.openmenu1}>Home</div>
            </Link>
            <Link to="/About" style={{textDecoration: "none", color:"#D6C8A1"}}>
              <div className={styles.openmenu2}>About</div>
            </Link>
            <Link to="/Project" style={{textDecoration: "none", color:"#D6C8A1"}}>
              <div className={styles.openmenu2}>Project</div>
            </Link>
            <Link to="/Contact" style={{textDecoration: "none", color:"#D6C8A1"}}>
              <div className={styles.openmenu2}>Contact</div>
            </Link>
        </>
        :
        <div>More</div>
        }
    </div>
  </div>

  <div className={styles.topbarbackground2}>
    {/* <div onClick={()=>setisOpen(true)}>More</div> */}
    {
      isOpen ?
        <div className={styles.opentopbar}>
          <div className={styles.opentopbardiv}>
            <Link nk to="/" style={{textDecoration: "none", color:"#D6C8A1"}}>
              <div className={styles.openmenu1}>Home</div>
            </Link>
            <Link to="/About" style={{textDecoration: "none", color:"#D6C8A1"}}>
                <div className={styles.openmenu2}>About</div>
            </Link>
            <Link to="/Project" style={{textDecoration: "none", color:"#D6C8A1"}}>
              <div className={styles.openmenu2}>Project</div>
            </Link>
            <Link to="/Contact" style={{textDecoration: "none", color:"#D6C8A1"}}>
              <div className={styles.openmenu2}>Contact</div>
            </Link>
          </div>
          <div className={styles.closebtn} onClick={()=>setisOpen(false)}>Close</div>
        </div>
      :<div onClick={()=>setisOpen(true)}>More</div>
    }
    {/* <div className={styles.menu}  onMouseOver={()=>setisHoever(true)} onMouseOut={() => setisHoever(false)}>
        {isHover ? 
        <>
            <Link to="/" style={{textDecoration: "none", color:"#D6C8A1"}}>
                <div className={styles.openmenu1}>Home</div>
            </Link>
            <Link to="/About" style={{textDecoration: "none", color:"#D6C8A1"}}>
              <div className={styles.openmenu2}>About</div>
            </Link>
            <Link to="/Project" style={{textDecoration: "none", color:"#D6C8A1"}}>
              <div className={styles.openmenu2}>Project</div>
            </Link>
            <Link to="/Contact" style={{textDecoration: "none", color:"#D6C8A1"}}>
              <div className={styles.openmenu2}>Contact</div>
            </Link>
        </>
        :
        <div>More</div>
        }
    </div> */}
  </div>
</>
  )
}

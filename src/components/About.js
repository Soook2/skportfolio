import React, {useState} from 'react'
import styles from'./About.module.css';
import Topbar from '../common/Topbar'
import AOS from 'aos';
import 'aos/dist/aos.css';
import AnimatedCursor from "react-animated-cursor"
import { Col, Row} from 'antd';

export default function About() {
    AOS.init();

    const [isHover1, setisHoever1] = useState(false);
    const [isHover2, setisHoever2] = useState(false);

  return (
    <>
    <AnimatedCursor color='255, 255, 255'/>
    <Topbar/>

    <div className={styles.background}>
        <div data-aos="zoom-in" className={styles.top}>
            {/* <h2> */}
                "FrontEnd 개발자, 이수경입니다."
            {/* </h2> */}
        </div>

        <h4>
            About Me
        </h4>
        <div className={styles.middle}>
            <Row >
            <Col lg={8} md={24}>

                {
                    isHover1 ?
                    <img  src="code.gif" alt="" className={styles.imgsize}/>
                    :
                    isHover2 ?
                    <img  src="think.gif" alt="" className={styles.imgsize}/>
                    :
                    <div className={styles.imgdiv}>
                        <p className={styles.pImage}>밑줄이 있는 단어에 마우스를 올려보세요.</p>
                    </div>
                }
            </Col>
            <Col lg={8} md={24}>
                <p className={styles.p1}>
                    당신이 6개월 이상 한 번도 보지 않은 <underlinelight onMouseOver={()=>setisHoever1(true)} onMouseOut={() => setisHoever1(false)}>코드</underlinelight>는 다른 사람이 다시 만드는 게 훨씬 더 나을 수 있다. - Eagleson의 법칙(Eagleson's Law)
                    <br/>
                    <br/>
                    <br/>
                </p>
                <p className={styles.p1}>
                    저는 끊임없이 도전하는 개발자입니다. 프로그래밍 세계에는 항상 새로운 기술이 등장합니다. 이에 빠르게 적응하고 활용하여 혁신적인 아이디어를 구현하고 싶습니다. 이를 통해 최고의 결과물을 만들어내는 일에 동참하기를 바라며 앞으로 끝없는 성장과 발전을 기대합니다.
                </p>
            </Col>
            <Col lg={8} md={24}>
                <p className={styles.p1}>
                    지금까지의 경험을 바탕으로, <underlinelight onMouseOver={()=>setisHoever2(true)} onMouseOut={() => setisHoever2(false)}>사용자의 니즈와 요구사항</underlinelight>을 이해하고 그에 맞는 효과적인 솔루션을 제공할 수 있는 개발자가 되는 것이 제 목표입니다. 최적의 사용자 경험을 제공하기 위해 직관적이고 유저 친화적인 인터페이스를 구축하고자 합니다.
                </p>
                <p className={styles.p1}>
                    프론트엔드 개발에 집중하고 있으며, HTML, CSS, JavaScript 등의 언어와 프레임워크를 사용하여 다양한 웹 사이트를 구축합니다. 또한 개발자로서 끊임없이 성장하기 위해 백엔드 개발, DB 관리, 알고리즘 등의 다양한 분야에 대한 지식을 습득하고자 합니다.
                </p>
            </Col>
            
            </Row>
        </div>

        <br/>
        <br/>

        <div>
        <h5>
            저는 이런 것을 배웠습니다.
        </h5>
        <p className={styles.p1}>
            2017.02 ~ 2022.02 - 백석대학교/정보통신학부 소프트웨어학과 졸업
        <br/>
            2021.04 ~ 2021.10 - IITP/백석대학교 산학협력단 - ARVR 혁신인재 양성과정
        </p>

        <br/>
        <br/>
        </div>

        <div>
        <h5>
            저는 이런 경험이 있습니다.
        </h5>
        <p className={styles.p1}>
            2021.10 ~ 2022.12 - (주)딥인스펙션 프론트엔드 개발자
        </p>

        <br/>
        <br/>
        </div>

        <div>
        <h5>
            저는 이것을 다룰 수 있습니다.
        </h5>
        <p className={styles.p1}>
            HTML - CSS - JavaScript - TypeScript - React
        <br/>
            Swagger - Postman
        <br/>
            Git
        </p>
        </div>

        <br/>
        <br/>

    </div>
    </>
    
  )
}

import React, {useState} from 'react';
import styles from './ProjectModal1.module.css';
import AnimatedCursor from "react-animated-cursor"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Col, Row} from 'antd';

export default function ProjectModal1() {
    AOS.init();

    const [isHover1, setisHoever1] = useState(false);
    const [isHover2, setisHoever2] = useState(false);

  return (
    <>
    <AnimatedCursor color='255, 255, 255' style={{zIndex:10}}/>
    <div className={styles.background} data-aos="fade-up">
        <p className={styles.title}>AI 데이터셋 스토어</p>
        <div className={styles.middle}>

            <div className={styles.subcontent}>
                <p className={styles.subtitle}>📌 Summary</p>
                <p className={styles.content}>인공지능 모델을 학습시키기 위해서는 많은 양의 데이터셋이 필요합니다. 필요로 하는 데이터셋을 판매하고, 구매할 수 있는 웹사이트입니다. 기업 홍보용 웹 사이트로 사용하기 위해 직접 개발하였습니다.</p>
                <p className={styles.content}>해당 프로젝트를 진행하며 프론트엔드, 백엔드의 통신 방법과 흐름을 이해할 수 있었습니다. 직접 DB 연동, API를 설계하며 웹 개발에 필요한 각 부분 별 역할을 이해하고 기초 지식을 학습할 수 있었습니다.
                React를 이용해 개발하며 웹 개발 프레임워크의 편리함을 배우고 SSR, 라우팅에 대한 개념을 확실하게 숙지할 수 있었습니다.</p>

                <p className={styles.subtitle}>🔨 Technology Stack(s)</p>
                <p className={styles.content}>FrontEnd : HTML, CSS, JavaScript (React) <br/>
                BackEnd : Node.js (express) <br/>
                DB : MongoDB <br/>
                UILibrary : Ant Design</p>
            </div>

            <div className={styles.subcontent}>
                <div className={styles.gifdiv}>
                    <img  src="main2.gif" alt="" className={styles.gifimage}/>
                </div>
            </div>

            <div className={styles.subcontent}>
                 <Row >
                    <Col lg = {9} md= {24} className={styles.col1}>
                        <p className={styles.subtitle}>Explanation</p>
                        <p className={styles.content}>회원가입 후 로그인 할 수 있으며, 회원가입 한 사용자 정보는 <underlinedark onMouseOver={()=>setisHoever1(true)} onMouseOut={() => setisHoever1(false)}>mongoDB</underlinedark>를 연동하여 실시간으로 저장됩니다. 로그인 한 사용자에 한해 추가 기능을 이용할 수 있게됩니다.</p>
                        { 
                            isHover1 ?
                            <img  src="regi_db.png" alt="" className={styles.dbimage} data-aos="fade-left"/>
                            :
                            <div></div>                        
                        }
                    </Col>
                    <Col lg= {15} md= {24} className={styles.colcontent}>
                    <div className={styles.gifdiv}>
                        <img  src="register.gif" alt="" className={styles.gifimage}/>
                        <img  src="login.gif" alt="" className={styles.gifimage}/>
                    </div>
                    </Col>
                </Row>
            </div>

            <div className={styles.subcontent}>
                 <Row >
                    <Col lg= {15} md= {24} className={styles.colcontent}>
                    <div className={styles.gifdiv}>
                        <img  src="upload.gif" alt="" className={styles.gifimage}/>
                        <img  src="cart.gif" alt="" className={styles.gifimage}/>
                    </div>
                    </Col>
                    <Col lg = {9} md= {24} className={styles.col2}>
                        <p className={styles.subtitle}>Explanation</p>
                        <p className={styles.content}>로그인 한 사용자는 상품을 업로드 할 수 있습니다. 업로드 한 상품 정보는 <underlinedark onMouseOver={()=>setisHoever2(true)} onMouseOut={() => setisHoever2(false)}>mongoDB</underlinedark>를 연동하여 실시간으로 저장되며, 화면에 바로 표시됩니다. 업로드 된 상품을 클릭 시 상품의 상세 정보를 확인할 수 있고 "Add to Cart" 버튼 클릭 시 장바구니에 해당 상품을  담고 결제할 수 있습니다. </p>
                        { 
                            isHover2 ?
                            <img  src="upload_db.png" alt="" className={styles.dbimage} data-aos="fade-right"/>
                            :
                            <div></div>                        
                        }
                    </Col>
                </Row>
            </div>

            <p className={styles.subtitle}>Responsive Web</p>
            <p className={styles.content}>390 x 844(모바일), 820 x 1180(테블릿), 1920 x 1080(웹)<br/>
            웹 크기에 맞추어 UI를 배치하여 다양한 환경에서도 기능을 이용할 수 있도록 구현하였습니다.</p>
            <div className={styles.subcontent}>
                <div className={styles.respondiv}>
                    <Row>
                        <Col lg= {5} md= {24} className={styles.colcontent}>
                            <p className={styles.responcontent}>390 x 844(모바일)</p>
                            <img  src="store7.png" alt="" className={styles.responimage1}/>
                        </Col>
                        <Col lg = {8} md= {24} className={styles.colcontent}>
                            <p className={styles.responcontent}>820 x 1180(테블릿)</p>
                            <img  src="store8.png" alt="" className={styles.responimage2}/>
                        </Col>
                        <Col lg = {11} md= {24} className={styles.colcontent}>
                            <p className={styles.responcontent}>1920 x 1080(웹)</p>
                            <img  src="store9.png" alt="" className={styles.responimage3}/>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

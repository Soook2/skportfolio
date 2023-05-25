import React, { useState } from 'react';
import styles from './ProjectModal2.module.css';
import AnimatedCursor from "react-animated-cursor"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Col, Row} from 'antd';

export default function ProjectModal() {
    AOS.init();

    const [isHover1, setisHoever1] = useState(false);
    // const [isHover2, setisHoever2] = useState(false);

  return (
    <>
    <AnimatedCursor color='255, 255, 255' style={{zIndex:10}}/>
    <div className={styles.background} data-aos="fade-up">
        <p className={styles.title}>공공시설물 결함검출 프로그램</p>
        <div className={styles.middle}>

            <div className={styles.subcontent}>
                <p className={styles.subtitle}>📌 Summary</p>
                <p className={styles.content}>공공 시설물 결함을 검출하고 관리하는 서비스를 제공하는 웹 사이트입니다. 당시 재직 중인 기업의 exe 설치형 프로그램을 SaaS 형태로 재구축하기 위해 React를 이용해 개발했습니다.</p>
                <p className={styles.content}>해당 프로젝트를 진행하며 개발 문서 작성의 중요성, 기획, 디자인, 타 부서 개발자와의 협업 방식에 대해 배울 수 있었습니다. 재직 중인 기업의 해당 프로젝트 담당자를 맡아 직접 프로젝트 개발 기간, 범위 등을 
                조율하고 결정하며 프로젝트 개발 과정에 책임감을 가지고 일하며 개발자로 역할을 이해하고 크게 성장하는 좋은 기회가 되었습니다. </p>

                <p className={styles.subtitle}>🔨 Technology Stack(s)</p>
                <p className={styles.content}>FrontEnd : HTML, CSS, TypeScript (React) <br/>
                BackEnd : Node.js <br/>
                DB : MariaDB <br/>
                UILibrary : Ant Design</p>
            </div>

            <div className={styles.subcontent}>
                <div className={styles.gifdiv}>
                    <img  src="p2_main.gif" alt="" className={styles.gifimage}/>
                </div>
            </div>

            <p className={styles.subtitle}>Development Documentation</p>
            <p className={styles.content}>프로젝트 관리 및 협업을 위해 요구사항 수집서, 기능명세서, WBS, 다이어그램, 메뉴얼 등 개발 문서를 직접 작성하며 프로젝트를 진행하였습니다. 개발 문서 작성을 통해 프로젝트 진행 기간동안 원활한 의사소통과 프로젝트 관리가 가능했습니다.</p>
            <div className={styles.subcontent}>
                <div className={styles.respondiv}>
                    <Row>
                        <Col lg= {12} md= {24} className={styles.colcontent}>
                            <p className={styles.responcontent}>요구사항수집서, 기능명세서</p>
                            <div className={styles.funtiondiv}>
                                <img  src="function.png" alt="" className={styles.functionimage}/>
                            </div>
                        </Col>
                        <Col lg = {12} md= {24} className={styles.colcontent}>
                            <p className={styles.responcontent}>WBS</p>
                            <div className={styles.wbsdiv}>
                            <img  src="wbs.png" alt="" className={styles.wbsimage}/>
                            </div>
                            <div className={styles.worddiv}>
                                <div className={styles.usediv}>
                                <p className={styles.responcontent}>UseCase 다이어그램, 명세서</p>
                                <img  src="usecase.png" alt="" className={styles.useimage}/>
                                </div>
                                <div className={styles.menualdiv}>
                                <p className={styles.responcontent}>프로그램 메뉴얼</p>
                                <img  src="menual.png" alt="" className={styles.menualimage}/>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>

            <div className={styles.subcontent}>
                 <Row >
                    <Col lg= {15} md= {24} className={styles.colcontent}>
                    <div className={styles.gifdiv}>
                        <img  src="p2_select.gif" alt="" className={styles.gifimage}/>
                        {/* <img  src="cart.gif" alt="" className={styles.gifimage}/> */}
                    </div>
                    </Col>
                    <Col lg = {9} md= {24} className={styles.col2}>
                        <p className={styles.subtitle}>Explanation</p>
                        {/* <p className={styles.content}>로그인 한 사용자는 상품을 업로드 할 수 있습니다. 업로드 한 상품 정보는 <underlinedark onMouseOver={()=>setisHoever1(true)} onMouseOut={() => setisHoever1(false)}>Swagger</underlinedark>를 연동하여 실시간으로 저장되며, 화면에 바로 표시됩니다. 업로드 된 상품을 클릭 시 상품의 상세 정보를 확인할 수 있고 "Add to Cart" 버튼 클릭 시 장바구니에 해당 상품을  담고 결제할 수 있습니다. </p> */}
                        <p className={styles.content}>로그인 한 사용자에 한해 서비스를 이용할 수 있습니다. 로그인 후 프로젝트 생성을 통해 원하는 시설물을 선택하고 해당 시설물에 알맞는 설정을 입력하면 DB에 해당 프로젝트 정보가 저장됩니다. 모든 API는 <underlinedark onMouseOver={()=>setisHoever1(true)} onMouseOut={() => setisHoever1(false)}>Swagger</underlinedark>를 통해 직접 테스트하며 개발 진행하였습니다.</p>
                        { 
                            isHover1 ?
                            <img  src="file_swagger.png" alt="" className={styles.dbimage} data-aos="fade-right"/>
                            :
                            <div></div>                        
                        }
                    </Col>
                </Row>
            </div>

            <div className={styles.subcontent}>
                 <Row >
                    <Col lg = {9} md= {24} className={styles.col1}>
                        <p className={styles.subtitle}>Explanation</p>
                        <p className={styles.content}>AI 성능을 높이기 위해 이미지의 기울기를 설정하는 기능입니다. 카메라 단위로 사용자는 슬라이드바를 이용해 설정을 입력하고 입력값의 평균을 계산하여 Table에 출력하며, 최종적으로 Table 값을 API를 통해 전달해 엔진이 해당 이미지의 기울기를 조절합니다.<br/>
                        <br/>
                        시설물 이미지에서 결함을 검출하기 위해 AI Model, Weight를 설정하고 설정 값을 API를 통해 전달에 해당 설정으로 결함을 검출합니다. 검출 결과를 수정할 수 있도록 canvas를 사용해 그림판 기능을 구현하였습니다. 
                        수정된 이미지를 저장하면 서버에 실시간으로 적용되어 결과가 변경됩니다. <br/>
                        다수의 이미지 중 사용자가 원하는 이미지를 쉽게 찾을 수 있도록 구역별로 Tab을 만들어 해당 구역 이미지로 접근 및 조회가 가능합니다.</p>
                    </Col>
                    <Col lg= {15} md= {24} className={styles.colcontent}>
                    <div className={styles.gifdiv}>
                        <img  src="p2_edit.gif" alt="" className={styles.gifimage}/>
                        <img  src="p2_detector.gif" alt="" className={styles.gifimage}/>
                    </div>
                    </Col>
                </Row>
            </div>

            <p className={styles.subtitle}>Language Settings</p>
            <p className={styles.content}>상단 우측의 국기 버튼을 눌러 언어를 설정할 수 있습니다. Recoil을 사용하여 구현하였습니다. 전역 상태 라이브러리를 사용한 대표적인 예로 Recoil, Redux 등 상태 관리의 중요성과 라이브러리를 사용함으로써 편리함을 경험했습니다.</p>
            <div className={styles.subcontent}>
                <div className={styles.respondiv}>
                    <Row>
                        <Col lg= {12} md= {24} className={styles.colcontent}>
                            <p className={styles.responcontent}>영어 설정</p>
                            <img  src="lang_en.png" alt="" className={styles.responimage1}/>
                        </Col>
                        <Col lg = {12} md= {24} className={styles.colcontent}>
                            <p className={styles.responcontent}>한국어 설정</p>
                            <img  src="lang_ko.png" alt="" className={styles.responimage1}/>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

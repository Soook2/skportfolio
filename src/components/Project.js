import React from 'react'
import styles from'./Project.module.css';
import AnimatedCursor from "react-animated-cursor"
import Topbar from '../common/Topbar'
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Project() {
  AOS.init();

  return (
    <>
    <AnimatedCursor color='255, 255, 255' style={{zIndex:10}}/>
    <Topbar/>

    <div className={styles.background}>
        <div data-aos="zoom-in" className={styles.top}>
            My Project
        </div>

        <h4>
            지난 기간 중 직접 진행 및 참여했던 프로젝트입니다.
        </h4>

        <div className={styles.middle}> 
            <p className = {styles.projectName}>AI 데이터셋 스토어</p>
            <br/>
              <div className={styles.readMoreDiv}>
                <Link to="/Project/AIStore">
                  <button className={styles.sendbtn}>Read More</button>
                </Link>
              </div>
            <br/>

            <div className={styles.photoCantainer}>
              <div className={styles.photoContItemAnimation1}>
                <div className={styles.photoItemPhoto7}></div>
                <div className={styles.photoItemPhoto8}></div>
                <div className={styles.photoItemPhoto9}></div>
                <div className={styles.photoItemPhoto10}></div>
                <div className={styles.photoItemPhoto11}></div>
                <div className={styles.photoItemPhoto12}></div>

                <div className={styles.photoItemPhoto7}></div>
                <div className={styles.photoItemPhoto8}></div>
                <div className={styles.photoItemPhoto9}></div>
                <div className={styles.photoItemPhoto10}></div>
                <div className={styles.photoItemPhoto11}></div>
                <div className={styles.photoItemPhoto12}></div>
              </div>
            </div>
            <br/>
            <br/>
            <p className={styles.p1}>
              <bold>개발 인원 :</bold> 1명
              <br/>
              <bold>개발 기간 :</bold> 3개월
            </p>
            <p className={styles.p1}>
            <bold>주요 기능</bold>
            <br/>
            - 로그인 및 회원가입
            <br/>
            - 데이터 셋 업로드 및 조회(필터, 검색)
            <br/>
            - 장바구니
            <br/>
            - 결제
            </p>
            <p className={styles.p1}>
              인공지능 모델을 학습시키기 위한 데이터셋을 판매, 구매하는 웹사이트입니다. 당시 재직 중인 기업의 홍보용 웹 사이트로 기업에 도움이 되고자 개발했습니다.
              <br/>
              <br/>
            프론트엔드 프레임워크(React)를 사용해 개발한 첫 웹사이트로 많은 것을 배웠습니다. 프레임워크를 사용함으로써 웹 사이트의 효율성과 유지보수성을 향상시킬 수 있다는 것을 직접 느낄 수 있었습니다. 또한 백엔드 개발, API 설계 등 모든 과정을 직접 경험하여 더욱 의미 있는 경험이었습니다.  
              <br/>
              <br/>
            백엔드 연동을 통해 데이터 상호작용을 구현하였습니다. 서버와 실시간 통신을 통해 데이터를 업데이트하고, 사용자 입력에 따라 콘텐츠를 변경하는 경험은 매우 가치 있었습니다. 또한 API를 직접 설계하여 백엔드와 프론트엔드를 연동하여 웹사이트 개발의 전반적인 과정을 이해하고 모든 요소를 연결하여 웹 개발자로써 기초 역량을 키울 수 있었습니다.
            </p>
        </div>

        <div className={styles.middle}> 
            <p className = {styles.projectName}>공공시설물 결함검출 프로그램</p>
                       
            <br/>
              <div className={styles.readMoreDiv}>
                <Link to="/Project/DeepProject">
                  <button className={styles.sendbtn}>Read More</button>
                </Link>
              </div>
            <br/>

            <div className={styles.photoCantainer}>
              <div className={styles.photoContItemAnimation2}>
                <div className={styles.photoItemPhoto1}></div>
                <div className={styles.photoItemPhoto2}></div>
                <div className={styles.photoItemPhoto3}></div>
                <div className={styles.photoItemPhoto4}></div>
                <div className={styles.photoItemPhoto5}></div>
                <div className={styles.photoItemPhoto6}></div>

                <div className={styles.photoItemPhoto1}></div>
                <div className={styles.photoItemPhoto2}></div>
                <div className={styles.photoItemPhoto3}></div>
                <div className={styles.photoItemPhoto4}></div>
                <div className={styles.photoItemPhoto5}></div>
                <div className={styles.photoItemPhoto6}></div>
              </div>
            </div>
            <br/>
            <br/>
            <p className={styles.p1}>
              <bold>개발 인원 :</bold> 3명
              <br/>
              <bold>개발 기간 :</bold> 10개월
            </p>
            <p className={styles.p1}>
            <bold>주요 기능</bold>
            <br/>
            - 로그인 및 회원가입
            <br/>
            - 프로젝트 생성 및 관리
            <br/>
            - 시설물 결함 검출 등
            </p>
            <p className={styles.p1}>
              공공 시설물(터널, 교량, 댐 등)의 결함을 검출하고 관리하기 위한 웹 사이트입니다. 당시 재직 중인 기업의 설치형 프로그램을 웹 사이트로 재구축하기 위해 개발했습니다.
              <br/>
              <br/>
                해당 프로젝트 담당자를 맡아 프로젝트 기획, 디자인, 개발 문서 작성, 코드 작성, 코드 리뷰 등 모든 과정에 참여하며 개발자로서 알아야할 공동 프로젝트 진행 과정을 이해하고, 타부서와 협업하는 방법을 직접 경험한 가치 높은 경험이 되었습니다. 
              <br/>
              <br/>
                AI 엔진 개발자, 백엔드 개발자(외주사)와 협업하여 개발을 진행하며 프론트엔드 뿐만 아니라 기타 분야 개발자의 기초 지식과 프로세스를 이해할 수 있는 능력을 키울 수 있었습니다. 저는 프론트엔드 개발자로 UI를 먼저 구현한 후, 문서를 통해 필요한 API를 백엔드 개발자에게 요청하였습니다. Swagger를 통해 Restful API로 통신하며 개발을 진행하며 API의 통신 과정을 이해할 수 있었으며, API 프레임워크의 편리함을 경험할 수 있었습니다.
            </p>
            
        </div>
        <br/>     
        <br/>
    </div>
    </>
  )
}

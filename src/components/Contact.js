import React, { useRef } from 'react'
import styles from'./Contact.module.css';
import AnimatedCursor from "react-animated-cursor"
import Topbar from '../common/Topbar'
import { Col, Row} from 'antd';
import emailjs from '@emailjs/browser';

export default function Contact() {

    // const [IsChecked, setIsChecked] = useState(false);
    const form = useRef();

    const sendEmail = e => {
        e.preventDefault();
        
        emailjs
        .sendForm(
            'service_rz17pib',
            'template_kpcvbtf',
            form.current,
            'FR3e9Ho-w2Y_prlwe'
        )
        .then(
            res => {
            alert('메일이 전송되었습니다.');
            console.log(res);
            },
            err => {
            alert('메일 전송에 실패하였습니다. 다시 시도해주세요.');
            console.log(err);
            }
        );
      };

      const Snowflake = ({ style }) => {
        return (
          <p className={styles.snowflake} style={style}>
            .
          </p>
        );
      };

      const makeSnowFlakes = () => {
        let animationDelay = "0s"; // 기본 값은 0초이다.
        let fontSize = "14px"; // 기본 폰트사이즈는 14px로 했다.
        const arr = Array.from("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"); // length가 15인 array가 생긴다.
      
        // arr의 length 만큼의 <SnowFlake />를 반환한다.
        return arr.map((el, i) => {
          animationDelay = `${(Math.random() * 16).toFixed(2)}s`; // 0~16 사이에서 소수점 2번째 자리수까지의 랜덤숫자
          fontSize = `${Math.floor(Math.random() * 10) + 10}px`; // 10~20 사이의 정수
          const style = {
            animationDelay,
            fontSize,
          };
        return <Snowflake key={i} style={style} />;  });
      };

  return (
    <>
    <AnimatedCursor color='255, 255, 255'/>
    <Topbar/>
    <div className={styles.background}>
        {makeSnowFlakes()}
        <div className={styles.contact}>
        <Row >
            <Col lg={4} md={0} sm ={0} xs={0}>
            </Col>
            <Col lg={6} md={24} sm={24} xs={24} className={styles.col}>
                <p className={styles.title}>Contact</p>
                <br/>
                <br/>
                <p className={styles.text1}>sukyoung___@naver.com
                    <br/>010-4634-6995
                </p>
                <br/>
                <br/>
                <p className={styles.text2}>연락주시면 빠른 답변드리겠습니다.</p>
            </Col>
            <Col lg={10} md={24} sm={24} xs={24} className={styles.col}>
            <form ref={form} onSubmit={sendEmail}>
                <div className={styles.inputdiv}>
                    <input type='text' placeholder='Name' className={styles.inputbox} name='name'></input>
                    <input type='text' placeholder='Phone' className={styles.inputbox} name='phone'></input>
                    <input type='text' placeholder='Email' className={styles.inputbox} name='email'></input>
                    <input type='text' placeholder='Message' className={styles.inputmessage} name='message'></input>
                </div>
                <button className={styles.sendbtn}>Send</button>
            </form>
            </Col>
            <Col lg={4} md={0} sm ={0} xs={0}>
            </Col>
        </Row>
        </div>   
    </div>
    </>
  )
}

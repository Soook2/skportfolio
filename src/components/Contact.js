import React, { useRef } from 'react'
import styles from'./Contact.module.css';
import AnimatedCursor from "react-animated-cursor"
import Topbar from '../common/Topbar'
import { Col, Row } from 'antd';
import emailjs from '@emailjs/browser';

export default function Contact() {

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
              console.log(res);
              alert("메일을 정상적으로 전송하였습니다.");
            },
            err => {
              console.log(err);
              alert("메일 전송을 실패하였습니다. 번호로 연락바랍니다.")
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
        let animationDelay = "0s"; 
        let fontSize = "14px"; 
        const arr = Array.from("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"); 
      
        return arr.map((el, i) => {
          animationDelay = `${(Math.random() * 16).toFixed(2)}s`; 
          fontSize = `${Math.floor(Math.random() * 10) + 10}px`; 
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

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Code2 } from 'lucide-react';
import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={`container ${styles.container}`}>
        <motion.div 
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.subtitle}>About Me</span>
          <h2 className={styles.title}>비즈니스와 개발을 잇는 <br/><span className="text-gradient">융합형 인재</span></h2>
        </motion.div>

        <div className={styles.content}>
          <motion.div 
            className={styles.story}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className={styles.paragraph}>
              안녕하세요. 충북대학교 경영정보학과(22학번)에 재학 중인 <strong>이상준</strong>입니다. 
              경영정보학을 전공하며 비즈니스의 작동 원리(회계, 재무, 생산관리, SCM, 마케팅)를 폭넓게 이해하고, 
              나아가 비즈니스 인텔리전스와 데이터 마이닝, AI 활용 시스템 분석 등 최신 IT 기술을 접목하는 방법을 고민해 왔습니다.
            </p>
            <p className={styles.paragraph}>
              저는 단순한 코더(Coder)를 넘어서, <strong>"왜 이 개발이 필요한가?"</strong>라는 비즈니스적 질문에 답할 수 있는 개발자를 지향합니다. 
              머신러닝과 기초적인 웹 서비스 설계(프론트엔드/백엔드/DB) 역량을 바탕으로 이론을 실제 프로덕트로 만들어내는 일에 열정을 가지고 있습니다.
            </p>
            
            <div className={styles.timeline}>
              <div className={styles.timelineItem}>
                <div className={styles.iconBox}><MapPin size={18} /></div>
                <div>
                  <h4>Roots & Growth</h4>
                  <p>부산 출생, 평택과 아산을 거쳐 충남삼성고등학교 졸업</p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.iconBox}><GraduationCap size={18} /></div>
                <div>
                  <h4>University</h4>
                  <p>충북대학교 경영정보학과 22학번 (학사 재학)</p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.iconBox}><Calendar size={18} /></div>
                <div>
                  <h4>Generation</h4>
                  <p>2002년생</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className={styles.imageCard}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className={`${styles.glassCard} glass`}>
              <div className={styles.cardIcon}>
                <Code2 size={40} className="text-gradient" />
              </div>
              <h3>My Vision</h3>
              <p>"효율적인 데이터 흐름(Data Flow)과 매끄러운 유저 경험(UX), 그리고 튼튼한 비즈니스 모델(BM)을 결합하여 세상에 필요한 가치를 창출합니다."</p>
              
              <div className={styles.badges}>
                <span className={styles.badge}>Business Understanding</span>
                <span className={styles.badge}>Data Analytics</span>
                <span className={styles.badge}>Web Development</span>
              </div>
            </div>
            
            {/* Decoration Elements */}
            <div className={styles.decorationCircle}></div>
            <div className={styles.decorationDots}></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

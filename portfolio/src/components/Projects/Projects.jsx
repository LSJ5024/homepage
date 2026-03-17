import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Monitor, Server, Database } from 'lucide-react';
import styles from './Projects.module.css';

const projectsData = [
  {
    id: 1,
    title: "영화 리뷰 사이트 제작(프론트, 백엔드)",
    type: "개인 프로젝트",
    date: "진행 기간",
    description: "사용자가 영화에 대한 리뷰를 작성하고 검색할 수 있는 풀스택 웹 서비스 구축 프로젝트입니다. 프론트엔드와 백엔드를 모두 개발하여 데이터 흐름을 완벽히 이해하고 구현했습니다.",
    roles: [
      "직관적이고 반응형인 프론트엔드 UI/UX 개발",
      "인증 및 데이터 처리를 위한 안전한 API 서버 구축",
      "사용자 및 영화 데이터 저장을 위한 효율적인 데이터베이스 설계"
    ],
    techStack: [
      { icon: <Monitor size={16} />, label: "Frontend" },
      { icon: <Server size={16} />, label: "Backend" },
      { icon: <Database size={16} />, label: "Database" }
    ],
    outcomes: [
      "프론트엔드와 백엔드를 아우르는 풀스택 서비스 구조 설계",
      "API 설계 및 RESTful 아키텍처에 대한 이해도 향상"
    ]
  },
  {
    id: 2,
    title: "회원관리 가능한 웹사이트 개발",
    type: "개인 프로젝트",
    date: "진행 기간",
    description: "로컬 데이터베이스를 기반으로 회원가입, 로그인 등 인증 기능과 회원 관리 기능을 포괄적으로 제공하는 웹사이트를 개발했습니다.",
    roles: [
      "비밀번호 암호화 및 안전한 로그인/회원가입 로직 설계",
      "세션 관리를 통한 사용자 로그인 상태 유지 구현",
      "로컬 데이터베이스 스키마 설계 및 CRUD API 개발"
    ],
    techStack: [
      { icon: <Monitor size={16} />, label: "Frontend" },
      { icon: <Server size={16} />, label: "Auth API" },
      { icon: <Database size={16} />, label: "Local DB" }
    ],
    outcomes: [
      "웹 보안 및 사용자 인증 모델에 대한 깊은 이해",
      "데이터 무결성을 고려한 데이터베이스 트랜잭션 처리"
    ]
  },
  {
    id: 3,
    title: "PyCaret 기반 AutoML 데이터 분석 모델 구축",
    type: "데이터 분석 프로젝트",
    date: "진행 기간",
    description: "PyCaret 라이브러리를 사용해 AutoML 환경을 조성하여, 최소한의 코드로 이진 분류, 멀티클래스 분류, 회귀 분석, 시계열 분석을 수행하고 최적의 모델을 비교 도출한 프로젝트입니다.",
    roles: [
      "데이터 전처리 밒 탐색적 데이터 분석(EDA) 수행",
      "AutoML 파이프라인 구축 및 다수 ML 알고리즘의 훈련과 검증",
      "모델 성능 평가(AUC, RMSE, MAE 등) 및 앙상블 기법 적용"
    ],
    techStack: [
      { icon: <Monitor size={16} />, label: "Python" },
      { icon: <Server size={16} />, label: "PyCaret" },
      { icon: <Database size={16} />, label: "Machine Learning" }
    ],
    outcomes: [
      "다양한 분석 도메인(분류, 회귀, 시계열)에 대한 모델 수립 경험",
      "AutoML을 활용한 머신러닝 프로토타입 개발 시간의 획기적 단축"
    ]
  }
];

const Projects = () => {
  return (
    <section id="experience" className={styles.projects}>
      <div className={`container ${styles.container}`}>
        <motion.div 
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.subtitle}>Experience & Projects</span>
          <h2 className={styles.title}>실무 경험 및 <br/><span className="text-gradient">가치 창출</span></h2>
          <p className={styles.description}>
            이론을 바탕으로 실제 환경에서 문제를 해결하고 비즈니스 효율을 높인 경험입니다.
          </p>
        </motion.div>

        <div className={styles.projectShowcase}>
          {projectsData.map((project, index) => (
            <motion.div 
              className={styles.projectCard}
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              <div className={styles.imageGallery}>
                <div className={styles.mockupContainer}>
                  <div className={styles.mockupBrowser}>
                    <div className={styles.browserHeader}>
                      <span className={styles.dot}></span>
                      <span className={styles.dot}></span>
                      <span className={styles.dot}></span>
                    </div>
                    <div className={styles.browserContent}>
                      <div className={styles.placeholderUI}>
                        <div className={styles.uiHeader}>
                          <div className={styles.uiLogo}></div>
                          <div className={styles.uiNav}></div>
                        </div>
                        <div className={styles.uiBody}>
                          <div className={styles.uiSidebar}></div>
                          <div className={styles.uiMain}>
                            <div className={styles.uiChart}></div>
                            <div className={styles.uiTable}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.projectInfo}>
                <div className={styles.projectMeta}>
                  <span className={styles.projectType}>{project.type}</span>
                  <span className={styles.projectDate}>{project.date}</span>
                </div>
                
                <h3 className={styles.projectTitle}>{project.title}</h3>
                
                <div className={styles.projectDescription}>
                  <p>{project.description}</p>
                  <div className={styles.roleBox}>
                    <strong>역할</strong>
                    <ul>
                      {project.roles.map((role, i) => (
                        <li key={i}>{role}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={styles.techStack}>
                  {project.techStack.map((tech, i) => (
                    <div className={styles.techItem} key={i}>
                      {tech.icon} <span>{tech.label}</span>
                    </div>
                  ))}
                </div>

                <div className={styles.outcomes}>
                  <h4>Key Outcomes</h4>
                  <ul>
                    {project.outcomes.map((outcome, i) => (
                      <li key={i}>{outcome}</li>
                    ))}
                  </ul>
                </div>

                <div className={styles.projectLinks}>
                  <a href="#" className={styles.linkBtn}>
                    <ExternalLink size={18} /> View Demo
                  </a>
                  <a href="#" className={styles.githubBtn}>
                    <Github size={18} /> Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

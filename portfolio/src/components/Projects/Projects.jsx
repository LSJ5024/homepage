import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Monitor, Server, Database } from 'lucide-react';
import styles from './Projects.module.css';

const projectsData = [
  {
    id: 4,
    title: "웹사이트 기반 지뢰찾기 게임",
    type: "토이 프로젝트",
    date: "진행 기간",
    description: "브라우저에서 즐길 수 있는 클래식 지뢰찾기 게임을 프론트엔드 웹 기술을 활용하여 구현 및 배포한 프로젝트입니다. 상태 관리와 알고리즘 로직 패턴을 연습했습니다.",
    roles: [
      "게임의 핵심 로직(지뢰 랜덤 배치, 맵 탐색, 연쇄 개방) 구현",
      "사용자 상호작용(좌클릭 탐색, 우클릭 깃발 꽂기 등) 상태 관리",
      "반응형 웹 UI를 적용하여 다양한 디바이스 환경 지원"
    ],
    techStack: [
      { icon: <Monitor size={16} />, label: "Frontend" }
    ],
    outcomes: [
      "복잡한 2D 배열 형태의 상태 관리와 탐색 알고리즘(BFS/DFS) 실전 적용",
      "순수 DOM 조작과 상태에 따른 React 컴포넌트 렌더링 최적화 이해"
    ],
    demoLink: "https://minesweepergame-zeta.vercel.app/",
    image: "/images/minesweepergame.png" // 이미지 경로를 여기에 넣으세요
  },
  {
    id: 5,
    title: "실버케어 파트너스 (MIS)",
    type: "웹 서비스 프로젝트",
    date: "2026.03 ~ 진행 중",
    description: "요양원 및 실버케어 관련 기관을 위한 관리 시스템 구축 프로젝트입니다. 사용자 친화적인 인터페이스와 안정적인 데이터 관리에 중점을 두고 개발을 진행하고 있습니다.",
    roles: [
      "시스템 요구사항 분석 및 기획",
      "프론트엔드 UI/UX 설계 및 구현",
      "백엔드 API 및 데이터베이스 아키텍처 설계"
    ],
    techStack: [
      { icon: <Monitor size={16} />, label: "Frontend" },
      { icon: <Server size={16} />, label: "Backend" },
      { icon: <Database size={16} />, label: "Database" }
    ],
    outcomes: [
      "복잡한 관리 시스템의 웹 서비스화",
      "사용자 맞춤형 대시보드 및 데이터 시각화 적용"
    ],
    demoLink: "https://mis-ochre.vercel.app/", // TODO: 배포 후 여기에 웹사이트 주소(URL)를 입력하세요. 예: "https://silvercare.vercel.app/"
    githubLink: "", // TODO: 깃허브 주소를 입력하세요. 예: "https://github.com/username/MIS"
    image: "/images/silvercare.png" // TODO: public/images 폴더에 silvercare.png 파일을 넣고 파일명을 맞추세요.
  },
  {
    id: 6,
    title: "두쫀투 (AI 금융 대시보드 MVP)",
    type: "개인 프로젝트",
    date: "2026.04 ~ 진행 중",
    description: "개인 투자자를 위해 미국 시가총액 상위 100개 종목의 어닝콜을 AI로 심층 분석·요약하여 제공하고, 사용자 포트폴리오 성향에 맞춘 웹 기반 리밸런싱 전략을 제안하는 AI 금융 플랫폼 MVP입니다.",
    roles: [
      "Next.js 기반 웹 플랫폼 프론트엔드 기획 및 개발",
      "AI API(결합 모델) 프롬프트 엔지니어링 및 응답 결과 JSON 데이터 파이프라인 구축",
      "외부 전문 Data API 연동 (RapidAPI)을 통한 어닝콜 원문 수집 및 분석 프로세스 구현"
    ],
    techStack: [
      { icon: <Monitor size={16} />, label: "Next.js" },
      { icon: <Server size={16} />, label: "AI (Gemini/GPT)" },
      { icon: <Database size={16} />, label: "RapidAPI" }
    ],
    outcomes: [
      "AI를 활용한 비정형 거시경제/기업 어닝콜 데이터의 정형화 요약 파이프라인 구축",
      "복잡한 봇 차단막을 회피하는 안정적 외부 API 연동 설계 도출"
    ],
    demoLink: "https://duzontu.vercel.app/", // TODO: 배포 후 여기에 웹사이트 주소(URL)를 입력하세요. 예: "https://duzontu.vercel.app/"
    githubLink: "", // TODO: 깃허브 주소를 입력하세요. 예: "https://github.com/username/Duzontu"
    image: "/images/duzontu.png" // TODO: public/images 폴더에 duzontu.png 파일을 넣고 파일명을 맞추세요.
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
          <h2 className={styles.title}>실무 경험 및 <br /><span className="text-gradient">가치 창출</span></h2>
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
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      ) : (
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
                      )}
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
                  <a href={project.demoLink || "#"} className={styles.linkBtn} target={project.demoLink ? "_blank" : "_self"} rel={project.demoLink ? "noopener noreferrer" : ""}>
                    <ExternalLink size={18} /> View Demo
                  </a>
                  <a href={project.githubLink || "#"} className={styles.githubBtn} target={project.githubLink ? "_blank" : "_self"} rel={project.githubLink ? "noopener noreferrer" : ""}>
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

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Monitor, Server, Database } from 'lucide-react';
import styles from './Projects.module.css';

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
          <motion.div 
            className={styles.projectCard}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
          >
            <div className={styles.imageGallery}>
              {/* Mockup Placeholder - To be replaced with actual image */}
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
                <span className={styles.projectType}>실무 프로젝트</span>
                <span className={styles.projectDate}>진행 기간</span>
              </div>
              
              <h3 className={styles.projectTitle}>교회 맞춤형 소규모 ERP 시스템</h3>
              
              <div className={styles.projectDescription}>
                <p>
                  운영 효율성이 떨어지던 기존의 수기/엑셀 기반 관리 방식을 디지털로 전환하기 위해 팀원들과 함께 개발한 웹 기반 ERP 시스템입니다. 
                  비즈니스 요구사항(데이터 관리, 참석 통계, 재정 관리 등)을 분석하고 이를 시스템으로 구현했습니다.
                </p>
                <div className={styles.roleBox}>
                  <strong>역할</strong>
                  <ul>
                    <li>풀스택 개발 (프론트엔드/백엔드/DB 설계 및 구축 기여)</li>
                    <li>사용자 편의성을 고려한 UI/UX 기획</li>
                    <li>효율적인 데이터 조회를 위한 데이터베이스 파이프라인 최적화</li>
                  </ul>
                </div>
              </div>

              <div className={styles.techStack}>
                <div className={styles.techItem}>
                  <Monitor size={16} /> <span>Frontend</span>
                </div>
                <div className={styles.techItem}>
                  <Server size={16} /> <span>Backend</span>
                </div>
                <div className={styles.techItem}>
                  <Database size={16} /> <span>Database</span>
                </div>
              </div>

              <div className={styles.outcomes}>
                <h4>Key Outcomes</h4>
                <ul>
                  <li>업무 처리 시간 <b>XX% 단축</b> 및 휴먼 에러 감소</li>
                  <li>데이터 기반 의사결정이 가능한 시각화 대시보드 제공</li>
                  <li>실제 사용자들의 피드백을 수용하여 UI를 지속적으로 개선한 경험</li>
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
        </div>
      </div>
    </section>
  );
};

export default Projects;

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Database, LayoutTemplate, Award } from 'lucide-react';
import styles from './Skills.module.css';

const skillCategories = [
  {
    title: "Business & MIS",
    icon: <Briefcase size={24} />,
    skills: [
      { name: "비즈니스 인텔리전스 (BI)", level: 85 },
      { name: "SCM & 생산관리", level: 80 },
      { name: "회계 및 재무관리", level: 75 },
      { name: "마케팅 이론", level: 70 },
    ]
  },
  {
    title: "Data & AI",
    icon: <Database size={24} />,
    skills: [
      { name: "데이터 마이닝", level: 85 },
      { name: "머신러닝 (ML)", level: 80 },
      { name: "AI 기반 시스템 사고", level: 75 },
      { name: "데이터 분석", level: 90 },
    ]
  },
  {
    title: "Development",
    icon: <LayoutTemplate size={24} />,
    skills: [
      { name: "Web Frontend (React, JS)", level: 80 },
      { name: "Web Backend", level: 75 },
      { name: "Database 설계 및 관리", level: 85 },
      { name: "웹 서비스 아키텍처", level: 70 },
    ]
  },
  {
    title: "Certifications",
    icon: <Award size={24} />,
    skills: [
      { name: "ADsP (데이터분석 준전문가)", level: 100 },
      { name: "컴퓨터활용능력 1급", level: 100 },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className={styles.skills}>
      <div className={`container ${styles.container}`}>
        <motion.div 
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.subtitle}>Capabilities & Skills</span>
          <h2 className={styles.title}>전문성과 <br/><span className="text-gradient">핵심 역량</span></h2>
          <p className={styles.description}>
            경영학적 통찰로 설계하고, 데이터로 검증하며, 엔지니어링으로 구현합니다.
          </p>
        </motion.div>

        <div className={styles.skillsGrid}>
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={category.title}
              className={`${styles.skillCard} glass`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>
                  {category.icon}
                </div>
                <h3>{category.title}</h3>
              </div>
              
              <div className={styles.skillList}>
                {category.skills.map((skill, sIdx) => (
                  <div key={skill.name} className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillLevel}>{skill.level}%</span>
                    </div>
                    {/* Only show progress bar if level is < 100 (not a certification) */}
                    {skill.level < 100 ? (
                      <div className={styles.progressTrack}>
                        <motion.div 
                          className={styles.progressFill}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true, margin: "-50px" }}
                          transition={{ duration: 1, delay: 0.2 + (sIdx * 0.1), ease: "easeOut" }}
                        />
                      </div>
                    ) : (
                      <div className={styles.certBadge}>Certified</div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Github, Linkedin } from 'lucide-react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <footer id="contact" className={styles.contact}>
      <div className={`container ${styles.container}`}>
        <motion.div 
          className={styles.contactWrapper}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.contactInfo}>
            <span className={styles.subtitle}>Get In Touch</span>
            <h2 className={styles.title}>비즈니스의 가능성을 <br/><span className="text-gradient">확장해 보세요.</span></h2>
            <p className={styles.description}>
              채용 관련 문의, 커피챗, 또는 어떠한 제안이든 환영합니다. 
              남겨주신 메시지는 최대한 빠르게 확인 후 회신드리겠습니다.
            </p>
            
            <div className={styles.contactDetails}>
              <a href="mailto:asd5818664@gmail.com" className={styles.emailLink}>
                <div className={styles.iconBox}>
                  <Mail size={20} />
                </div>
                <div>
                  <span className={styles.label}>Email Address</span>
                  <span className={styles.value}>asd5818664@gmail.com</span>
                </div>
              </a>
            </div>

            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className={styles.socialIcon} aria-label="GitHub">
                <Github size={20} />
              </a>
            </div>
          </div>

          <div className={styles.formWrapper}>
            <form className={`${styles.contactForm} glass`} onSubmit={(e) => e.preventDefault()}>
              <div className={styles.formGroup}>
                <label htmlFor="name">이름 (Name)</label>
                <input type="text" id="name" placeholder="John Doe" required />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="email">이메일 (Email)</label>
                <input type="email" id="email" placeholder="john@example.com" required />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="message">메시지 (Message)</label>
                <textarea id="message" rows="4" placeholder="How can I help you?" required></textarea>
              </div>
              
              <button type="submit" className={styles.submitBtn}>
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </motion.div>

        <div className={styles.copyright}>
          <p>&copy; {new Date().getFullYear()} Sangjun Lee. All rights reserved.</p>
          <p className={styles.subText}>Designed & Built with React & Vite.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;

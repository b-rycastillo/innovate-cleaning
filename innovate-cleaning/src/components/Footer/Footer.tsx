import React from 'react';
import styles from './Footer.module.scss';
import footerData from './footerData.json';

const Footer = () => {
  const { company, navigation, contact, social } = footerData;

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.companyInfo}>
          <h2>{company.name}</h2>
          <p>{company.description}</p>
        </div>
        <div className={styles.navLinks}>
          <h3>Quick Links</h3>
          <ul>
            {navigation.map((link, index) => (
              <li key={index}>
                <a href={link.url}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.contactInfo}>
          <h3>Contact Us</h3>
          <p>{contact.address}</p>
          <p>{contact.phone}</p>
          <p>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </p>
        </div>
        <div className={styles.socialMedia}>
          <h3>Follow Us</h3>
          <ul>
            {social.map((network, index) => (
              <li key={index}>
                <a href={network.url} target="_blank" rel="noopener noreferrer">
                  {network.platform}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} {company.name}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
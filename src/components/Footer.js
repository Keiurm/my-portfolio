import React from 'react';
import styled from 'styled-components';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

const FooterContainer = styled.footer`
  background-color: #1a1a1a;
  color: #f8f9fa;
  padding: 3rem 0 2rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FooterSection = styled.div`
  margin-bottom: 2rem;
`;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  color: white;
  
  &::after {
    content: '';
    display: block;
    width: 30px;
    height: 2px;
    background-color: ${props => props.theme.colors.primary};
    margin-top: 0.5rem;
  }
`;

const FooterLink = styled.a`
  display: block;
  color: #bbb;
  margin-bottom: 0.8rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;



const Copyright = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid #333;
  color: #bbb;
  font-size: 0.9rem;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterContent>
        
        <FooterSection>
          <FooterTitle>ナビゲーション</FooterTitle>
          <FooterLink href="/">ホーム</FooterLink>
          <FooterLink href="/about">技術的なスキル</FooterLink>
          <FooterLink href="/projects">制作物</FooterLink>
        </FooterSection>
        
      </FooterContent>
      
      <Copyright>
        &copy; {currentYear} Keisuke Kimura. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
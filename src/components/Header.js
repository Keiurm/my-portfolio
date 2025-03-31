import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FiMenu, FiX } from 'react-icons/fi';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem 0;
  background-color: ${props => props.scrolled ? 'white' : 'transparent'};
  box-shadow: ${props => props.scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none'};
  transition: all 0.3s ease;
  z-index: 1000;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const Logo = styled(Link)`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 1.8rem;
  font-weight: 700;
  color: ${props => props.scrolled ? props.theme.colors.primary : props.theme.colors.light};
  transition: color 0.3s ease;
`;

const MenuIcon = styled.div`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${props => props.scrolled ? props.theme.colors.dark : props.theme.colors.light};
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${props => props.isOpen ? '0' : '-100%'};
    width: 70%;
    height: 100vh;
    flex-direction: column;
    align-items: flex-start;
    padding: 2rem;
    background-color: white;
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
    transition: right 0.3s ease;
  }
`;

const NavLink = styled(Link)`
  margin-left: 2rem;
  color: ${props => 
    props.active 
      ? props.theme.colors.secondary 
      : props.scrolled 
        ? props.theme.colors.dark 
        : props.theme.colors.light
  };
  font-weight: ${props => props.active ? '600' : '400'};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: ${props => props.active ? '100%' : '0'};
    height: 2px;
    background-color: ${props => props.theme.colors.secondary};
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
  
  @media (max-width: 768px) {
    margin: 1rem 0;
    color: ${props => props.active ? props.theme.colors.secondary : props.theme.colors.dark};
  }
`;

const CloseButton = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.5rem;
  cursor: pointer;
  display: none;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  return (
    <HeaderContainer scrolled={scrolled}>
      <Nav>
        <Logo to="/" scrolled={scrolled}>
        </Logo>
        
        <MenuIcon scrolled={scrolled} onClick={toggleMenu}>
          <FiMenu />
        </MenuIcon>
        
        <NavLinks isOpen={isMenuOpen}>
          <CloseButton onClick={closeMenu}>
            <FiX />
          </CloseButton>
          
          <NavLink 
            to="/" 
            active={location.pathname === '/'} 
            scrolled={scrolled}
            onClick={closeMenu}
          >
            ホーム
          </NavLink>
          
          <NavLink 
            to="/about" 
            active={location.pathname === '/about'} 
            scrolled={scrolled}
            onClick={closeMenu}
          >
            技術的なスキル
          </NavLink>
          
          <NavLink 
            to="/projects" 
            active={location.pathname === '/projects'} 
            scrolled={scrolled}
            onClick={closeMenu}
          >
            制作物
          </NavLink>
          
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
import React from 'react';
import styled from 'styled-components';
import { FiCalendar, FiBookOpen, FiAward, FiCode } from 'react-icons/fi';

// スタイルコンポーネント
const PageContainer = styled.div`
  padding-top: 80px;
`;

const HeroSection = styled.section`
  background-color: #f8f9fa;
  padding: 6rem 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 2rem;
  
  &::after {
    content: '';
    display: block;
    width: 70px;
    height: 4px;
    background-color: ${props => props.theme.colors.primary};
    margin: 1rem auto;
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const PageDescription = styled.p`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 3rem;
  color: #666;
  font-size: 1.2rem;
`;



const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  
  &::after {
    content: '';
    display: block;
    width: 50px;
    height: 3px;
    background-color: ${props => props.theme.colors.primary};
    margin: 1rem auto;
  }
`;


const SkillsSection = styled.section`
  padding: 6rem 0;
`;

const SkillsCategories = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-top: 3rem;
`;

const SkillCategory = styled.div`
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -5px;
      width: 100%;
      height: 2px;
      background-color: ${props => props.theme.colors.primary};
    }
  }
`;

const SkillBar = styled.div`
  margin-bottom: 1.5rem;
  
  .skill-name {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    font-weight: 500;
  }
  
  .progress-bar {
    height: 8px;
    background-color: #eee;
    border-radius: 4px;
    overflow: hidden;
  }
  
  .progress {
    height: 100%;
    background-color: ${props => props.theme.colors.primary};
    border-radius: 4px;
  }
`;


const About = () => {
  return (
    <PageContainer>
      <HeroSection>
        <Container>
          <PageTitle>技術的なスキル</PageTitle>
          <PageDescription>
            今までに触れてきたプログラミング言語やフレームワーク、ツールについて記載しています。<br />
            Lv1 からLv5までのスキルレベルを示しています。<br />
            <h3>
              スキルレベルの定義
            </h3>
            Lv1: 授業や勉強会で触れたことがある<br />
            Lv2: リファレンスを読みながらであれば実装できる<br />
            Lv3: リファレンスを読みながらであれば1つのアプリケーションを実装できる<br />
            Lv4: リファレンスを読まなくともある程度、動作を実装できる<br />
            Lv5: 基本的に自力ですべて実装できる<br />

          </PageDescription>
        </Container>
      </HeroSection>
 
      <SkillsSection>
        <Container>
          <SectionTitle>スキル</SectionTitle>
          <SkillsCategories>
            <SkillCategory>
              <SkillBar>
                <div className="skill-name">
                  <span>Ptyhon</span>
                  <span>Lv4</span>
                </div>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '80%' }}></div>
                </div>
              </SkillBar>
              
              <SkillBar>
                <div className="skill-name">
                  <span>JavaScript</span>
                  <span>Lv3</span>
                </div>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '60%' }}></div>
                </div>
              </SkillBar>

              <SkillBar>
                <div className="skill-name">
                  <span>Unity</span>
                  <span>70%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '60%' }}></div>
                </div>
              </SkillBar>
              
              <SkillBar>
                <div className="skill-name">
                  <span>C</span>
                  <span>Lv3</span>
                </div>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '60%' }}></div>
                </div>
              </SkillBar>
              
              <SkillBar>
                <div className="skill-name">
                  <span>C#</span>
                  <span>Lv3</span>
                </div>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '60%' }}></div>
                </div>
              </SkillBar>

              <SkillBar>
                <div className="skill-name">
                  <span>R</span>
                  <span>Lv2</span>
                </div>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '40%' }}></div>
                </div>
              </SkillBar>

              <SkillBar>
                <div className="skill-name">
                  <span>Dart</span>
                  <span>Lv2</span>
                </div>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '40%' }}></div>
                </div>
              </SkillBar>

              <SkillBar>
                <div className="skill-name">
                  <span>PHP</span>
                  <span>Lv2</span>
                </div>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '40%' }}></div>
                </div>
              </SkillBar>

              <SkillBar>
                <div className="skill-name">
                  <span>Go</span>
                  <span>Lv2</span>
                </div>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '40%' }}></div>
                </div>
              </SkillBar>

              <SkillBar>
                <div className="skill-name">
                  <span>TypeScript</span>
                  <span>Lv2</span>
                </div>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '40%' }}></div>
                </div>
              </SkillBar>

              <SkillBar>
                <div className="skill-name">
                  <span>Docker</span>
                  <span>Lv2</span>
                </div>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '40%' }}></div>
                </div>
              </SkillBar>

              <SkillBar>
                <div className="skill-name">
                  <span>SQL</span>
                  <span>Lv2</span>
                </div>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '40%' }}></div>
                </div>
              </SkillBar>

              <SkillBar>
                <div className="skill-name">
                  <span>Swift</span>
                  <span>Lv1</span>
                </div>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '20%' }}></div>
                </div>
              </SkillBar>

            </SkillCategory>
          
          </SkillsCategories>
        </Container>
      </SkillsSection>
    </PageContainer>
  );
};

export default About;
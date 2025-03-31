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



const TimelineSection = styled.section`
  padding: 6rem 0;
  background-color: #f8f9fa;
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

// タイムライン全体のコンテナ
const Timeline = styled.div`
    position: relative;
    margin: 0 auto;
    padding-left: 60px; /* アイコン表示領域の確保 */
    
    &::before {
        content: '';
        position: absolute;
        left: 30px;
        top: 0;
        bottom: 0;
        width: 4px;
        background-color: #ddd;
    }
`;

// 各タイムラインアイテム
const TimelineItem = styled.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: 2rem;
`;

// タイムラインのアイコン
const TimelineIcon = styled.div`
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.primary};
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

// タイムラインのコンテンツ
const TimelineContent = styled.div`
    background-color: white;
    border-radius: 8px;
    padding: 1rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    flex: 1;
    
    h3 {
        font-size: 1.2rem;
        margin-bottom: 0.8rem;
        color: ${props => props.theme.colors.dark};
    }
    
    .date {
        display: block;
        margin-bottom: 1rem;
        color: ${props => props.theme.colors.primary};
        font-weight: 500;
        font-size: 1.2rem;
    }
    
    p {
        color: #500;
    }
`;

const SkillsSection = styled.section`
  padding: 6rem 0;
`;

const SkillsCategories = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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
          <PageTitle>自己紹介</PageTitle>
          <PageDescription>
            私のこれまでの経歴、スキル、そして情熱を紹介します。新卒エンジニアとして、技術で世界をより良くするために日々努力しています。
          </PageDescription>
        </Container>
      </HeroSection>
      

      
      <SkillsSection>
        <Container>
          <SectionTitle>スキル</SectionTitle>
          <SkillsCategories>
            <SkillCategory>
              <h3>フロントエンド</h3>
              <SkillBar>
                <div className="skill-name">
                  <span>HTML/CSS</span>
                  <span>90%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '90%' }}></div>
                </div>
              </SkillBar>
              
              <SkillBar>
                <div className="skill-name">
                  <span>JavaScript</span>
                  <span>85%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '85%' }}></div>
                </div>
              </SkillBar>
              
              <SkillBar>
                <div className="skill-name">
                  <span>React.js</span>
                  <span>80%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '80%' }}></div>
                </div>
              </SkillBar>
              
              <SkillBar>
                <div className="skill-name">
                  <span>Vue.js</span>
                  <span>70%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '70%' }}></div>
                </div>
              </SkillBar>
            </SkillCategory>
            
            <SkillCategory>
              <h3>バックエンド</h3>
              <SkillBar>
                <div className="skill-name">
                  <span>Node.js</span>
                  <span>75%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '75%' }}></div>
                </div>
              </SkillBar>
              
              <SkillBar>
                <div className="skill-name">
                  <span>Express</span>
                  <span>70%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '70%' }}></div>
                </div>
              </SkillBar>
              
              <SkillBar>
                <div className="skill-name">
                  <span>Python</span>
                  <span>65%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '65%' }}></div>
                </div>
              </SkillBar>
              
              <SkillBar>
                <div className="skill-name">
                  <span>SQL</span>
                  <span>75%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '75%' }}></div>
                </div>
              </SkillBar>
            </SkillCategory>
            
            <SkillCategory>
              <h3>その他</h3>
              <SkillBar>
                <div className="skill-name">
                  <span>Git/GitHub</span>
                  <span>85%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '85%' }}></div>
                </div>
              </SkillBar>
              
              <SkillBar>
                <div className="skill-name">
                  <span>UI/UXデザイン</span>
                  <span>70%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '70%' }}></div>
                </div>
              </SkillBar>
              
              <SkillBar>
                <div className="skill-name">
                  <span>React Native</span>
                  <span>60%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '60%' }}></div>
                </div>
              </SkillBar>
              
              <SkillBar>
                <div className="skill-name">
                  <span>Docker</span>
                  <span>55%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '55%' }}></div>
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
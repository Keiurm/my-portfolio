import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FiArrowRight, FiCode, FiLayers, FiDatabase, FiSmartphone } from 'react-icons/fi';
import homeBackground from './home.jpg';
import { FiCalendar, FiBookOpen, FiAward} from 'react-icons/fi';

// スタイルコンポーネント
const Hero = styled.section`
  height: 100vh;
  background: linear-gradient(135deg, #0070f3 0%, #00c8ff 100%);
  color: white;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${homeBackground});
    background-size: cover;
    background-position: center;
    opacity: 0.2;
    z-index: 1;
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  position: relative;
  z-index: 2;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;




const AboutSection = styled.section`
  padding: 6rem 0;
`;

const SectionContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
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
    background-color: #0070f3;
    margin: 1rem auto;
  }
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AboutImage = styled.div`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  
  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const AboutText = styled.div`
  h3 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }
  
  p {
    margin-bottom: 1.5rem;
    color: #666;
  }
`;





const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;


const TimelineSection = styled.section`
  padding: 6rem 0;
  background-color: #f8f9fa;
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




const Home = () => {
  return (
    <>
      <Hero>
        <HeroContent>
          <HeroTitle>
            Hello World!
          </HeroTitle>
        </HeroContent>
      </Hero>
      
      <AboutSection>
        <SectionContainer>
          <SectionTitle>自己紹介</SectionTitle>
          <AboutContent>
            <AboutImage>
              <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80" alt="Profile" />
            </AboutImage>
            <AboutText>
              <h3>氏名</h3>
              <p>
                木村 慧奨(きむら けいすけ)
              </p>
              <h3>所属</h3>
              <p>
                東北学院大学 工学部 情報基盤工学科
              </p>
              <h3>趣味</h3>
              <p>
                ゲーム、運動
              </p>
              <h3>
                その他
              </h3>
              <p>
                花粉症がつらいです。
              </p>
            </AboutText>
          </AboutContent>
        </SectionContainer>
      </AboutSection>

      
      <TimelineSection>
              <Container>
                <SectionTitle>経歴</SectionTitle>
                <Timeline>
                  
                  <TimelineItem>
                    <TimelineIcon>
                      <FiCode />
                    </TimelineIcon>
                    <TimelineContent>
                      <span className="date">2003年</span>
                      <p>
                        宮城県仙台市生まれ
                      </p>
                    </TimelineContent>
                  </TimelineItem>
                  
                  <TimelineItem>
                    <TimelineIcon>
                      <FiAward />
                    </TimelineIcon>
                    <TimelineContent>
                    <span className="date">2019年</span>
                      <p>
                        宮城県工業高等学校 情報技術科 入学
                      </p>
                    </TimelineContent>
                  </TimelineItem>
                  
                  <TimelineItem>
                    <TimelineIcon>
                      <FiBookOpen/>
                    </TimelineIcon>
                    <TimelineContent>
                    <span className="date">2019年</span>
                      <p>
                        宮城県工業高等学校 情報技術科 入学
                      </p>
                    </TimelineContent>
                  </TimelineItem>
                  
                  <TimelineItem>
                    <TimelineIcon>
                      <FiCalendar />
                    </TimelineIcon>
                    <TimelineContent>
                    <span className="date">2022年</span>
                      <p>
                        宮城県工業高等学校 情報技術科 卒業
                      </p>
                      <p>
                        東北学院大学 工学部 情報基盤工学科 入学
                      </p>
                    </TimelineContent>
                  </TimelineItem>
                  
                  <TimelineItem>
                    <TimelineIcon>
                      <FiAward />
                    </TimelineIcon>
                    <TimelineContent>
                    <span className="date">2024年</span>
                      <p>
                        志子田研究室 配属
                      </p>
                    </TimelineContent>
                  </TimelineItem>
                </Timeline>
              </Container>
        </TimelineSection>

    </>
  );
};

export default Home;
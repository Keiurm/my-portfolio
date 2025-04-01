import React, { useState } from 'react';
import styled from 'styled-components';
import { FiGithub, FiExternalLink, FiFilter } from 'react-icons/fi';
import cherrypic from '../images/CherryPic.png';
import vr from '../images/VR.png';
import sa from '../images/2D_action.jpeg';
import block from '../images/Block.jpeg';
import chatbot from '../images/chatbot.jpeg';
import mnist from '../images/mnist.png';
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

const ProjectsSection = styled.section`
  padding: 6rem 0;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

const FilterButton = styled.button`
  padding: 0.5rem 1.5rem;
  background-color: ${props => props.active ? props.theme.colors.primary : 'white'};
  color: ${props => props.active ? 'white' : props.theme.colors.dark};
  border: 1px solid ${props => props.active ? props.theme.colors.primary : '#ddd'};
  border-radius: 30px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.active ? props.theme.colors.primary : '#f8f9fa'};
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div`
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5));
  }
`;

const ProjectCategory = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  padding: 0.3rem 1rem;
  border-radius: 30px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.dark};
`;

const ProjectDescription = styled.p`
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  background-color: #f0f0f0;
  color: #666;
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  font-size: 0.8rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.theme.colors.primary};
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;


const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'Cherry Pic',
      category: 'Webアプリ',
      image: cherrypic,
      description: '【「夢」を画像化し、 気軽にシェアできるWebアプリケーション】PR TIMES HACKATHON 2025 Winterにて制作。今回のハッカソンの開発テーマは PR TIMES が提唱している April Dream を軸に「夢の発信を支援する Web サービスの開発」でした。',
      techStack: ['React', 'Python(Flask)', 'supabase','OpenAI API','Docker'],
      githubLink: 'https://github.com/f-tash/Cherry-Pic',
      liveLink: 'https://f-tash.github.io/Cherry-Pic/'
    },
    {
      id: 2,
      title: 'OpenAIのAPIを利用したチャットボット',
      category: 'Webアプリ',
      image: chatbot,
      description: 'OpenAI APIを用いたChatBot Webアプリケーション。ChatGPTの有料プランに加入していないため、回数上限に達した際にo3miniなどのモデルとやりとりするために作成。',
      techStack: ['Bootstrap5', 'Python(Flask)', 'OpenAI API', 'Docker'],
      githubLink: 'https://github.com/Keiurm/ChatBot',
    },
    {
      id: 3,
      title: '手書き数字をニューラルネットワークで認識するWebアプリ',
      category: 'Webアプリ',
      image: mnist,
      description: 'MNISTの手書き文字画像データセットを用いて、ニューラルネットワークを学習させ、手書き数字を認識するWebアプリケーション。画像入力にも対応しており、手書きの数字を描くことで認識結果を確認できます。',
      techStack: ['Bootstrap5', 'Python(Flask)', 'OpenAI API', 'Docker'],
      githubLink: 'https://github.com/Keiurm/MNIST-frontend',
    },
    {
      id: 4,
      title: 'VR作品「追う者、追われる物」',
      category: 'その他',
      image: vr,
      description: '「ソフトウェア開発演習II」の最終課題。Blenderのスクリプト機能でPythonのみを使用し作成。',
      techStack: ['Blender','Python'],
      githubLink: 'https://github.com/Keiurm/Software-Development-II-public',
      liveLink: 'https://store.hacosco.com/movies/e68e01e5-714f-4ef6-a37c-ad3f0241fec8'
    },
    {
      id: 5,
      title: 'ブロック崩し',
      category: 'ゲーム',
      image: block,
      description: 'ブロック崩しゲーム。',
      techStack: ['Unity', 'C#'],
      githubLink: 'https://github.com',
    },
    {
      id: 6,
      title: 'スクロールアクション',
      category: 'ゲーム',
      image: sa,
      description: 'マリオのような横スクロールアクションゲーム。',
      techStack: ['Unity', 'C#'],
      githubLink: 'https://github.com/Keiurm/N-Scrollaction',
    },
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };
  
  return (
    <PageContainer>
      <HeroSection>
        <Container>
          <PageTitle>制作物</PageTitle>
          <PageDescription>
            これまでに作成した制作物の一部を紹介します。順次更新していきます。
          </PageDescription>
        </Container>
      </HeroSection>
      
      <ProjectsSection>
        <Container>
          <FilterContainer>
            <FilterButton 
              active={filter === 'all'} 
              onClick={() => handleFilterChange('all')}
            >
              全て
            </FilterButton>
            <FilterButton 
              active={filter === 'Webアプリ'} 
              onClick={() => handleFilterChange('Webアプリ')}
            >
              Webアプリ
            </FilterButton>
            <FilterButton 
              active={filter === 'ゲーム'} 
              onClick={() => handleFilterChange('ゲーム')}
            >
              ゲーム
            </FilterButton>
            <FilterButton 
              active={filter === 'その他'} 
              onClick={() => handleFilterChange('その他')}
            >
              その他
            </FilterButton>
          </FilterContainer>
          
          <ProjectsGrid>
            {filteredProjects.map(project => (
              <ProjectCard key={project.id}>
                <ProjectImage image={project.image}>
                  <ProjectCategory>{project.category}</ProjectCategory>
                </ProjectImage>
                <ProjectContent>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <TechStack>
                    {project.techStack.map((tech, index) => (
                      <TechTag key={index}>{tech}</TechTag>
                    ))}
                  </TechStack>
                  <ProjectLinks>
                    <ProjectLink href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <FiGithub /> GitHub
                    </ProjectLink>
                    {project.liveLink && (
                      <ProjectLink href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <FiExternalLink /> Webサイト
                      </ProjectLink>
                    )}
                  </ProjectLinks>
                </ProjectContent>
              </ProjectCard>
            ))}
          </ProjectsGrid>
        </Container>
      </ProjectsSection>
      
    </PageContainer>
  );
};

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

export default Projects;
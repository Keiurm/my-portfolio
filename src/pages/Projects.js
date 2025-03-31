import React, { useState } from 'react';
import styled from 'styled-components';
import { FiGithub, FiExternalLink, FiFilter } from 'react-icons/fi';

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

const ProjectDetailSection = styled.section`
  padding: 6rem 0;
  background-color: #f8f9fa;
`;

const FeaturedProject = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  margin-bottom: 6rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
  
  &:nth-child(even) {
    direction: rtl;
    
    @media (max-width: 768px) {
      direction: ltr;
    }
  }
`;

const FeaturedImage = styled.div`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  
  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const FeaturedContent = styled.div`
  direction: ltr;
  
  h3 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: ${props => props.theme.colors.dark};
  }
  
  p {
    margin-bottom: 1.5rem;
    color: #666;
    line-height: 1.8;
  }
`;

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'コミュニティ支援アプリ',
      category: 'Webアプリ',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
      description: '地域コミュニティのための情報共有プラットフォーム。ユーザー同士が地域のイベント、ニュース、支援要請などを共有できます。',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
      githubLink: 'https://github.com',
      liveLink: 'https://example.com'
    },
    {
      id: 2,
      title: 'ポートフォリオサイト',
      category: 'Webサイト',
      image: 'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80',
      description: '自分のスキルとプロジェクトを紹介するための個人ポートフォリオサイト。レスポンシブデザインと滑らかなアニメーションを特徴としています。',
      techStack: ['React', 'Styled Components', 'Firebase'],
      githubLink: 'https://github.com',
      liveLink: 'https://example.com'
    },
    {
      id: 3,
      title: 'タスク管理アプリ',
      category: 'Webアプリ',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80',
      description: 'シンプルで使いやすいタスク管理ツール。タスクの追加、編集、削除、並び替え、フィルタリング機能を搭載しています。',
      techStack: ['Vue.js', 'Vuex', 'Firebase'],
      githubLink: 'https://github.com',
      liveLink: 'https://example.com'
    },
    {
      id: 4,
      title: '天気予報アプリ',
      category: 'モバイルアプリ',
      image: 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?ixlib=rb-1.2.1&auto=format&fit=crop&w=1551&q=80',
      description: '現在地や指定した場所の天気予報を表示するモバイルアプリ。5日間の予報、湿度、風速などの情報を提供します。',
      techStack: ['React Native', 'OpenWeather API', 'Redux'],
      githubLink: 'https://github.com',
      liveLink: null
    },
    {
      id: 5,
      title: 'レシピ検索サイト',
      category: 'Webサイト',
      image: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      description: '材料や料理名から簡単にレシピを検索できるWebサイト。ユーザーはお気に入りのレシピを保存することもできます。',
      techStack: ['HTML', 'CSS', 'JavaScript', 'Recipe API'],
      githubLink: 'https://github.com',
      liveLink: 'https://example.com'
    },
    {
      id: 6,
      title: 'オンライン学習プラットフォーム',
      category: 'Webアプリ',
      image: 'https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      description: 'プログラミングの学習コンテンツを提供するオンラインプラットフォーム。動画講義、クイズ、実践課題を含みます。',
      techStack: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      githubLink: 'https://github.com',
      liveLink: 'https://example.com'
    }
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
          <PageTitle>プロジェクト</PageTitle>
          <PageDescription>
            これまでに取り組んできた様々なプロジェクトを紹介します。Webアプリケーション、Webサイト、モバイルアプリなど、幅広い開発経験があります。
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
              active={filter === 'Webサイト'} 
              onClick={() => handleFilterChange('Webサイト')}
            >
              Webサイト
            </FilterButton>
            <FilterButton 
              active={filter === 'モバイルアプリ'} 
              onClick={() => handleFilterChange('モバイルアプリ')}
            >
              モバイルアプリ
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
                        <FiExternalLink /> Live Demo
                      </ProjectLink>
                    )}
                  </ProjectLinks>
                </ProjectContent>
              </ProjectCard>
            ))}
          </ProjectsGrid>
        </Container>
      </ProjectsSection>
      
      <ProjectDetailSection>
        <Container>
          <SectionTitle>注目プロジェクト</SectionTitle>
          
          <FeaturedProject>
            <FeaturedImage>
              <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80" alt="Featured Project" />
            </FeaturedImage>
            <FeaturedContent>
              <h3>コミュニティ支援アプリ</h3>
              <p>
                学内ハッカソンで開発し、最優秀賞を受賞したプロジェクトです。地域のイベントや支援要請を共有するためのプラットフォームを作成しました。
              </p>
              <p>
                技術スタックとしては、フロントエンドにReact、バックエンドにNode.jsとExpress、データベースにMongoDBを使用しています。認証機能、リアルタイム更新、地図表示機能などを実装しました。
              </p>
              <p>
                このプロジェクトを通じて、チームでの協働、MVPの設計、ユーザーのフィードバックに基づいた改善など、実践的な開発プロセスを学ぶことができました。
              </p>
              <ProjectLinks>
                <ProjectLink href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <FiGithub /> GitHub
                </ProjectLink>
                <ProjectLink href="https://example.com" target="_blank" rel="noopener noreferrer">
                  <FiExternalLink /> Live Demo
                </ProjectLink>
              </ProjectLinks>
            </FeaturedContent>
          </FeaturedProject>
          
          <FeaturedProject>
            <FeaturedImage>
              <img src="https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="Featured Project" />
            </FeaturedImage>
            <FeaturedContent>
              <h3>オンライン学習プラットフォーム</h3>
              <p>
                卒業研究の一環として開発した、プログラミング学習のためのオンラインプラットフォームです。初心者向けのプログラミング講座を提供しています。
              </p>
              <p>
                技術スタックとしては、フロントエンドにReact、バックエンドにNode.js、データベースにPostgreSQLを使用しています。AWSのS3に動画コンテンツを保存し、EC2でホスティングしています。
              </p>
              <p>
                このプロジェクトでは特に、ユーザー体験設計とコンテンツ管理システムの実装に力を入れました。講師が簡単にコンテンツをアップロードでき、学習者が進捗を追跡できる機能を実装しています。
              </p>
              <ProjectLinks>
                <ProjectLink href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <FiGithub /> GitHub
                </ProjectLink>
                <ProjectLink href="https://example.com" target="_blank" rel="noopener noreferrer">
                  <FiExternalLink /> Live Demo
                </ProjectLink>
              </ProjectLinks>
            </FeaturedContent>
          </FeaturedProject>
        </Container>
      </ProjectDetailSection>
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
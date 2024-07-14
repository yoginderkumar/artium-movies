import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const PosterSection = styled.div`
  flex: 0 0 300px;
  margin-bottom: 20px;
  
  @media (min-width: 768px) {
    margin-right: 40px;
    margin-bottom: 0;
  }
`;

export const Poster = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const InfoSection = styled.div`
  flex: 1;
`;

export const Title = styled.h1`
  font-size: 2.5em;
  margin: 0 0 10px 0;
  color: #333;
`;

export const MetaData = styled.div`
  font-size: 1.1em;
  color: #666;
  margin-bottom: 20px;
`;

export const Plot = styled.p`
  font-size: 1.1em;
  line-height: 1.6;
  color: #333;
  margin-bottom: 20px;
`;

export const AdditionalInfo = styled.div`
  font-size: 1em;
  color: #444;

  p {
    margin: 10px 0;
  }

  strong {
    color: #333;
  }
`;

export const BackButton = styled(Link)`
  display: inline-block;
  margin-bottom: 20px;
  color: #0066cc;
  text-decoration: none;
  font-size: 1.1em;

  &:hover {
    text-decoration: underline;
  }
`;
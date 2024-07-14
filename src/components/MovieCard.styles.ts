import styled from "styled-components";

export const Card = styled.div`
  color: white;
  background-color: #1e2933;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 350px;
  cursor: pointer;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
`;

export const Poster = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

export const CardContent = styled.div`
  padding: 16px;
  text-align: left;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 1.2em;
  color: #fff;
`;

export const Year = styled.p`
  margin: 8px 0 0;
  color: #fff;
`;

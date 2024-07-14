import styled from 'styled-components';

export const HeaderContainer = styled.header`
  color: white;
  padding: 24px;
`;

export const HeaderLinksContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Title = styled.h1`
  margin: 0;
  color: #cca339;
  font-size: 2em;
`;

export const Paragraph = styled.p`
    font-size: 16px;
    color: white;
`

export const SearchBarContainer = styled.div`
  position: relative;
  margin-top: 32px;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 12px 0px;
  font-size: 1em;
  border: none;
  border-radius: 4px;
`;

export const SuggestionsList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: white;
  border: 1px solid #ddd;
  border-top: none;
  list-style-type: none;
  margin: 0;
  padding: 0;
  max-height: 400px;
  overflow-y: auto;
  z-index: 1;
`;

export const SuggestionItem = styled.li`
  padding: 10px;
  cursor: pointer;
  color: black;
  text-align: left;
  border-bottom: 1px solid #e5e5e5;
  &:hover {
    background-color: #f0f0f0;
  }
`;
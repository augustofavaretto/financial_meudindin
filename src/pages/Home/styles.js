import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2.5rem 1rem;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #363f5f;
  text-align: center;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

export const StyledButton = styled.button`
  background-color: #28a745;
  color: white;
  font-size: 1rem;
  padding: 0.5rem 2rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #28a745;
  }
`;

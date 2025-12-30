import styled from 'styled-components';

export const Container = styled.textarea`
  width: 100%;
  height: 150px;

  background-color: ${({ theme })=> theme.COLORS.BACKGROUND_900};
  color:${({ theme })=> theme.COLORS.WHITE};

  border: none;
  resize: vertical;
  min-height: 150px;
  max-height: 300px;

  margin-bottom: 8px;
  border-radius: 10px;
  padding: 16px;
  font-family: 'Roboto Slab', serif;
  letter-spacing: 0.5px;

  &::placeholder {
    color: ${({ theme })=> theme.COLORS.GRAY_300};
    letter-spacing: 0.5px;
  }
`;  
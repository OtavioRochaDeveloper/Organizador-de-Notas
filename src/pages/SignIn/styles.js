import styled from 'styled-components';
import backgroundImg from '../../assets/background.png';

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  background-color: ${({ theme })=> theme.COLORS.BACKGROUND_800};
`;

export const Form = styled.form`
    padding: 0 136px;
    width: 100%;
    max-width: 500px;
    min-height: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;

    >h1 {
        font-size: 40px;
        color: ${({ theme }) => theme.COLORS.ORANGE};
        margin-bottom: 16px;
        letter-spacing: 0.5px;
    }

    >h2 {
        font-size: 24px;
        margin: 64px 0;
        color: ${({ theme }) => theme.COLORS.WHITE};
        letter-spacing: 0.5px;
    }

    > p {
        font-size:14px ;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        margin-bottom: 24px;
        letter-spacing: 0.5px;
    }

    > div {
        width: 100%;
        margin-bottom: 16px;
    }

    > button {
        width: 100%;
    }

    >a {
        margin-top: 124px;
        color: ${({ theme }) => theme.COLORS.ORANGE};
        transition: color 0.2s;
        letter-spacing: 0.5px;
    }

    >a:hover {
        color: ${({ theme }) => theme.COLORS.WHITE};
    }
`;


export const background = styled.div`
    display: none;
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: Cover;
`;

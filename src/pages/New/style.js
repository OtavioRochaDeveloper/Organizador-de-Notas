import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
  "header"
  "content";

  background-color: ${({ theme })=> theme.COLORS.BACKGROUND_800};

  > main {
    grid-area: content;
    overflow-y: auto;
    padding: 0 64px 64px;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  }

  .tags {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

export const Form = styled.form`
    max-width: 550px;
    margin: 38px auto;

    >header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        margin-bottom: 36px;

        Button{
            font-size: 20px;
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }
    }
`;
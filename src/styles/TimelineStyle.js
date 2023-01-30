import styled from "styled-components";

export const Style = styled.div`
  height: 100vh;
  div {
    display: flex;

    padding: 100px;
  }
  .text {
    flex-direction: column;
    font-size: 30px;
    margin-right: 300px;
    justify-content: center;
  }
  p {
    width: 300px;
    margin-bottom: 50px;
  }
  span {
    color: green;
  }
  img {
    margin-right: 50px;
    margin-left: 10%;
  }
`;

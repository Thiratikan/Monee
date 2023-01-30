import styled from "styled-components";

export const Form = styled.div`
  background: #f74d19;
  .budget-display {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 60px;
  }
`;

export const Card = styled.div`
  .card {
    display: flex;
    flex-direction: column;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    overflow: hidden;
    border-radius: 2em;
    text-decoration: none;
    background: white;
    margin: 1em;
    padding: 2.75em 2.5em;
    box-shadow: 0 1.5em 2.5em -0.5em rgba(#000000, 0.1);
    margin-right: 80px;
  }
  ul {
    list-style-type: none;
  }

  p {
    font-size: 40px;
    margin-bottom: 50px;
  }
`;

export const Budget = styled.div`
  div {
    display: flex;
  }
  h2 {
    width: 200px;
    margin-right: 150px;
    margin-bottom: 15px;
    color: #5e5c5b;
    font-size: 25px;
  }
  h3 {
    color: #5e5c5b;
    font-size: 25px;
  }
`;

export const ExpenseStyle = styled.div`
  input {
    width: 360px;
    height: 50px;
    margin-bottom: 30px;
    border: 2px solid #000;
    outline: none;
    background: none;
    padding: 10px;
    border-radius: 10px;
    font-size: 1.2em;
  }

  button {
    width: 150px;
    height: 40px;
    background: #f74d19;
    color: #fff;
    border: #fff;
    margin-top: 10px;
    font-size: 20px;
  }
`;

export const Box = styled.div`
  .box {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: space-between;
  }

  p {
    font-size: 28px;
    width: 250px;
    height: 50px;
    border-radius: 0.25em;
    text-decoration: none;
    text-align: center;
    background: white;
    padding: 8px;
    margin-right: 30px;
    margin-top: 80px;
  }

  h1 {
    font-family: "Dancing Script", cursive;
    color: white;
    font-size: 100px;
    text-align: center;
    padding-top: 100px;
  }
`;

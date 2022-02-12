import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DivSuccess = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  width: 200px;
  height: 120px;
  font-size: 40px;
  font-weight: 700;
  color: #fff;
  border: 2px solid green;
  background: lightgreen;
 
`;
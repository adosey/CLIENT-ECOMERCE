import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  ${'' /* background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://www.crushpixel.com/big-static14/preview4/online-sellers-packing-shoes-boxes-1584869.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center; */}
`;

export const Img = styled.img`
  width: 100vw;
  height: 100vh;
  position: absolute;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    );
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DivSuccess = styled.div`
  position:absolute;
  top:50%;
  left:50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  width: 200px;
  height: 200px;
  font-size: 40px;
  font-weight: 700;
  ${'' /* color: #90ee90; */}
  color: #6ddb6d;
  border: 1px solid #fff;
  box-shadow: 1px 1px 10px #000;
  background-color: rgba(255,255,255,.4);
 
`;
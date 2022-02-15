import styled from "styled-components";
export const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;
export const ContainerBtn = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;
export const ContainerProd = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.button`
  margin: 15px;
  background: black;
  color:white;
`
export const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${'' /* position: absolute;
  top: 0;
  bottom: 0; */}
  ${'' /* left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"}; */}
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;
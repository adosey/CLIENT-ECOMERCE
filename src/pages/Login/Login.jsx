import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/apiCalls";
import { NavLink } from "react-router-dom";

import {
  Container,
  Wrapper,
  Title,
  Form,
  Input,
  Button,
  Error,
  DivBtn,
} from "./Login.style";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    console.log(error);
    alert("INGRESAR");
    login(dispatch, { username, password });
  };

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <DivBtn>
            <Button className="linkGeneric">
              <NavLink className="linkRegister" to="/">
                VOLVER
              </NavLink>
            </Button>
            <Button
              className="linkGeneric"
              onClick={handleClick}
              disabled={isFetching}
            >
              LOGIN
            </Button>
          </DivBtn>
          {error && <Error>Something went worng...</Error>}
          <NavLink className="linkLogin" to="/register">
            DO NOT YOU REMEMBER THE PASSWORD?
          </NavLink>
          <NavLink className="linkLogin" to="/register">
            CREATE A NEW ACCOUNT
          </NavLink>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;

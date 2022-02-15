import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCalls";
import { NavLink, useNavigate } from "react-router-dom";

import {
    Container,
    Wrapper,
    Title,
    Form,
    Input,
    Button,
    DivBtn,
} from "./Login.style";

const Login = () => {
    const [data, setData] = useState({
        username: "",
        password: "",
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [error, setError] = useState(false);

    useEffect(() => {
        const handleAlert = () => {
            if (error) return alert('Credenciales no validas')
            else return null
        }
        handleAlert()
    }, [error])

    const handleClick = (e) => {
        e.preventDefault();
        if (data.username === "" || data.password === "") {
            e.preventDefault();
            alert("Debe ingresar datos");
            setData({
                username: '',
                password: ''
            })
        } else {
            e.preventDefault()
            login(dispatch, data)
                .then(res => {
                    if (res) {
                        return navigate('/')
                    } else {
                        setData({ username: '', password: '' })
                        setError(true)
                    }
                })
                .catch(err => console.log(err))
        }
    };

    const onChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
        setError(false)
    }

    return (
        <Container>
            <Wrapper>
                <Title>LOG IN</Title>
                <Form>
                    <Input
                        placeholder="username"
                        onChange={onChange}
                        name="username"
                        value={data.username}
                    />
                    {error && <p style={{ color: 'red' }} >You must be write a user...</p>}
                    <Input
                        placeholder="password"
                        type="password"
                        name="password"
                        onChange={onChange}
                        value={data.password}
                    />
                    {error && <p style={{ color: 'red' }} >You must be write a password...</p>}
                    <DivBtn>
                        <Button className="linkGeneric">
                            <NavLink style={{ borderRadius: '5px' }} className="linkRegister" to="/">
                                VOLVER
                            </NavLink>
                        </Button>
                        <Button className="linkGeneric" onClick={handleClick}>
                            LOGIN
                        </Button>
                    </DivBtn>
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

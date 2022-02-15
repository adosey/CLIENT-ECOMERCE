import { useState } from "react";
import { publicRequest } from "../../requestMethods";
// import {Image} from '../../asset/zapatillasRegister.jpg'
import {
    Container,
    Wrapper,
    Title,
    Form,
    Input,
    Agreement,
    Button,
} from "./Register.style";
import { NavLink } from "react-router-dom";

const Register = () => {
    const [data, setData] = useState({
        username: '',
        email: '',
        password: ''
    })

    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        try {
            const res = await publicRequest.post("auth/register", data);
            res.data && window.location.replace("/login");
        } catch (err) {
            setError(true);
        }
    };

    const onChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })

    }

    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form onSubmit={handleSubmit}>
                    {/* <Input placeholder="name" />
          <Input placeholder="last name" /> */}
                    <Input
                        type="text"
                        placeholder="username"
                        name="username"
                        onChange={onChange}
                    />
                    <Input
                        type="email"
                        placeholder="email"
                        name="email"
                        onChange={onChange}
                    />
                    <Input
                        type="password"
                        name="password"
                        placeholder="password"
                        onChange={onChange}
                    />
                    {/* <Input type="password" placeholder="confirm password" /> */}
                    <Agreement>
                        By creating an account, I consent to the processing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button disabled={true}>
                        <NavLink style={{ borderRadius: '5px' }} className="linkRegister" to='/'>
                            VOLVER
                        </NavLink>
                    </Button>
                    <Button
                        onClick={() => {
                            alert("Creado");
                        }}
                    >
                        CREATE
                    </Button>
                </Form>
                {error && (
                    <span style={{ color: "red", marginTop: "10px" }}>
                        Something went wrong!
                    </span>
                )}
            </Wrapper>
        </Container>
    );
};

export default Register;

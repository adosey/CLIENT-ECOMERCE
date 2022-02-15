import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, DivSuccess } from "./Success";

const Success = () => {
    const navigate = useNavigate();

    setTimeout(() => {
        navigate("/");
    }, 1500);

    return (
        <Container>
            <DivSuccess>Success</DivSuccess>
        </Container>
    );
};

export default Success;

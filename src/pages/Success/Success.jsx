import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onCleanCart } from "../../redux/apiCalls";
import { Container, DivSuccess } from "./Success";

const Success = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    setTimeout(() => {
        onCleanCart(dispatch)
        navigate("/");
    }, 2000);

    return (
        <Container>
            <DivSuccess>Success</DivSuccess>
        </Container>
    );
};

export default Success;

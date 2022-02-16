import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onCleanCart } from "../../redux/apiCalls";
import Fondo from '../../asset/success.jpg'
import { Container, DivSuccess, Img } from "./Success.js";

const Success = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    setTimeout(() => {
        onCleanCart(dispatch)
        navigate("/");
    }, 2500);

    return (
        <Container>
            <Img src={Fondo} />
            <DivSuccess>
                Success
            </DivSuccess>
        </Container>
    );
};

export default Success;

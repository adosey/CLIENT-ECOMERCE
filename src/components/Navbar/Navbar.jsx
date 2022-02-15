import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/userRedux";
import { Link, useNavigate } from "react-router-dom";
import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import {
    Container,
    Wrapper,
    Left,
    Language,
    SearchContainer,
    Input,
    Center,
    Logo,
    Right,
    MenuItem,
} from "./Navbar.style";
import { onClean } from "../../redux/cartRedux";

const Navbar = () => {
    const navigate = useNavigate()
    const quantity = useSelector((state) => state.cart.quantity);
    const user = useSelector((state) => state.user.currentUser);
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(onClean())
        dispatch(logout(user));
        navigate.push('/')
    };

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="Search" />
                        <Search style={{ color: "gray", fontSize: 16 }} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>
                        <Link className="linkGeneric" to="/">
                            ECOMERCE
                        </Link>
                    </Logo>
                </Center>
                <Right>
                    {!user && (
                        <Link className="linkGeneric" to="/register">
                            <MenuItem>Register</MenuItem>
                        </Link>
                    )}
                    {!user ? (
                        <Link className="linkGeneric" to="/login">
                            <MenuItem>Log in</MenuItem>
                        </Link>
                    ) : (
                        <MenuItem onClick={handleClick}>Logout</MenuItem>
                    )}
                    {!user ? (
                        <Link to="/login">
                            <MenuItem>
                                <Badge badgeContent={quantity} color="secondary">
                                    <ShoppingCartOutlined />
                                </Badge>
                            </MenuItem>
                        </Link>
                    ) : (
                        <Link to="/cart">
                            <MenuItem>
                                <Badge badgeContent={quantity} color="secondary" >
                                    <ShoppingCartOutlined />
                                </Badge>
                            </MenuItem>
                        </Link>
                    )}
                </Right>
            </Wrapper>
        </Container >
    );
};

export default Navbar;

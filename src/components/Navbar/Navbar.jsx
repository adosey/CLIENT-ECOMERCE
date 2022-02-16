import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/userRedux";
import { Link, useNavigate } from "react-router-dom";
import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import EcomImg from '../../asset/logo.png'
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
    Img
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
        navigate('/')
    };

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Link className="linkGeneric" to="/">
                        <Img src={EcomImg} />
                    </Link>
                    {/* <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="Search" />
                        <Search style={{ color: "gray", fontSize: 16 }} />
                    </SearchContainer> */}
                </Left>
                <Center>
                    <Link className="linkGeneric" to="/">
                        <Logo>
                            HOME
                        </Logo>
                    </Link>
                    <Logo>
                        <Link className="linkGeneric" to="/favorites">
                            FAVORITE
                        </Link>
                    </Logo>
                </Center>
                <Right>
                    {!user && (
                        <MenuItem>
                            <Link className="linkGeneric" to="/register">
                                REGISTER
                            </Link>
                        </MenuItem>
                    )}
                    {!user ? (
                        <MenuItem>
                            <Link className="linkGeneric" to="/login">
                                LOGIN
                            </Link>
                        </MenuItem>
                    ) : (
                        <MenuItem onClick={handleClick}>
                            LOGOUT
                        </MenuItem>
                    )}
                    {!user ? (
                        <MenuItem>
                            <Badge badgeContent={quantity} color="secondary">
                                <Link className="linkGeneric" to="/login">
                                    <ShoppingCartOutlined />
                                </Link>
                            </Badge>
                        </MenuItem>
                    ) : (
                        <MenuItem>
                            <Badge badgeContent={quantity} color="secondary" >
                                <Link className="linkGeneric" to="/cart">
                                    <ShoppingCartOutlined />
                                </Link>
                            </Badge>
                        </MenuItem>
                    )}
                </Right>
            </Wrapper>
        </Container >
    );
};

export default Navbar;

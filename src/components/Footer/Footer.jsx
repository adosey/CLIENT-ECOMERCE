import {
    Container,
    Left,
    Logo,
    Desc,
    SocialContainer,
    SocialIcon,
    Center,
    Title,
    List,
    ListItem,
    Right,
    ContactItem,
    Payment,
} from "./Footer.style";

import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Pinterest,
    Room,
    Twitter,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>E-COMERCE</Logo>
                <Desc>
                    There are many variations of passages of Lorem Ipsum available, but
                    the majority have suffered alteration in some form, by injected
                    humour, or randomised words which don’t look even slightly believable.
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>
                        <Link className="linkGeneric" to='/' >
                            Home
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link className="linkGeneric" to='/favorites' >
                            Favorites
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link className="linkGeneric" to='/register' >
                            Register
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link className="linkGeneric" to='/login' >
                            Login
                        </Link>
                    </ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{ marginRight: "10px" }} /> San Miguel de Tucumán
                </ContactItem>
                <ContactItem>
                    <Phone style={{ marginRight: "10px" }} /> +54 0343 651 2341
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{ marginRight: "10px" }} />{" "}
                    e-comerce@ecomerce.com
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    );
};

export default Footer;

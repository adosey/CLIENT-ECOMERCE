// DEPENDENCIAS
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Add, Remove } from "@material-ui/icons";
import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

import { publicRequest } from "../../requestMethods";
import { addProduct } from "../../redux/cartRedux";

import {
    Container,
    Wrapper,
    ImgContainer,
    Image,
    InfoContainer,
    Title,
    Desc,
    Price,
    FilterContainer,
    Filter,
    FilterTitle,
    FilterColor,
    FilterSize,
    FilterSizeOption,
    AddContainer,
    AmountContainer,
    Amount,
    Button,
    FilterTitleSize,
} from "./Product.style";
import { useSelector } from "react-redux";
import Loading from "../../components/Loading/Loading"

const Product = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const user = useSelector(state => state.user.currentUser)
    const id = location.pathname.split("/")[2];

    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");


    const dispatch = useDispatch();
    useEffect(() => {
        window.scrollTo(0, 0);
        const getProduct = async () => {
            try {
                const res = await publicRequest.get("/products/find/" + id);
                setProduct(res.data)

            } catch { }
        };
        getProduct()
        setLoading(false)
    }, [id]);

    const handleQuantity = (type) => {
        if (type === "dec") {
            quantity > 1 && setQuantity(quantity - 1);
        } else {
            setQuantity(quantity + 1);
        }
    };

    const handleClick = () => {
        dispatch(addProduct({ ...product, quantity, color, size }));
        navigate("/cart");
    };

    console.log(product);

    return (
        <>
            {
                loading ? (
                    <Container>
                        <Navbar />
                        <Loading />
                    </Container>
                ) : (
                    <Container>
                        <Navbar />
                        <Announcement />
                        <Wrapper>
                            <ImgContainer>
                                <Image src={product.img} />
                            </ImgContainer>
                            <InfoContainer>
                                <Title>{product.title}</Title>
                                <Desc>{product.desc}</Desc>
                                <Price>$ {product.price}</Price>
                                <FilterContainer>
                                    <Filter>
                                        <FilterTitle>Color</FilterTitle>
                                        <FilterColor onChange={(e) => setColor(e.target.value)}>
                                            {product.color?.map((s) => (
                                                <FilterSizeOption key={s}>{s}</FilterSizeOption>
                                            ))}
                                        </FilterColor>
                                    </Filter>
                                    <Filter>
                                        <FilterTitleSize>Size</FilterTitleSize>
                                        <FilterSize onChange={(e) => setSize(e.target.value)}>
                                            {product.size?.map((s) => (
                                                <FilterSizeOption key={s}>{s}</FilterSizeOption>
                                            ))}
                                        </FilterSize>
                                    </Filter>
                                </FilterContainer>
                                <AddContainer>
                                    <AmountContainer>
                                        <Remove style={{ cursor: 'pointer' }} onClick={() => handleQuantity("dec")} />
                                        <Amount>{quantity}</Amount>
                                        <Add style={{ cursor: 'pointer' }} onClick={() => handleQuantity("inc")} />
                                    </AmountContainer>
                                    {
                                        !user ? (
                                            <Link to='/login' >
                                                <Button>ADD TO CART</Button>
                                            </Link>
                                        ) : (
                                            <Button onClick={handleClick}>ADD TO CART</Button>
                                        )
                                    }
                                </AddContainer>
                            </InfoContainer>
                        </Wrapper>
                        <Footer />
                    </Container>
                )
            }
        </>
    );
};

export default Product;

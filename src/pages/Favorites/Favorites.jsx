// DEPENDENCIAS
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import s from "./favorites.module.css";
import { Add, Remove } from "@material-ui/icons";
// import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

import { publicRequest } from "../../requestMethods";
import { addProduct } from "../../redux/cartRedux";
import { addFavorites, clearFavorites } from "../../redux/apiCalls";

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
} from "./Favorites.style";
import { useSelector } from "react-redux";
import Loading from "../../components/Loading/Loading";

const Favorites = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const user = useSelector((state) => state.user.currentUser);
    const favorites = useSelector((state) => state.favorites.favorites);
    const id = location.pathname.split("/")[2];
    const [loading, setLoading] = useState(true);
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
                setProduct(res.data);
            } catch { }
        };
        getProduct();
        setLoading(false);
    }, [id]);

    useEffect(() => {
        addFavorites(dispatch, product);
    }, [dispatch, product]);

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

    function clearFavoritess() {
        clearFavorites(dispatch, id);
    }
    return (
        <>
            {loading ? (
                <Container>
                    <Navbar />
                    <Loading />
                </Container>
            ) : (
                <Container>
                    <Navbar />
                    {/* <Announcement /> */}
                    <Button className={s.button} onClick={clearFavoritess}>
                        Clean Favorites
                    </Button>
                    {favorites.length === 0 ? (
                        <div className={s.containerH3}>
                            <h3 className={s.h3}>Favorites is empty</h3>
                        </div>
                    ) : (
                        favorites?.map((fav) => {
                            return (
                                <Wrapper>
                                    <ImgContainer>
                                        <Image src={fav.img} />
                                    </ImgContainer>
                                    <InfoContainer>
                                        <Title>{fav.title}</Title>
                                        <Desc>{fav.desc}</Desc>
                                        <Price>$ {fav.price}</Price>
                                        <FilterContainer>
                                            <Filter>
                                                <FilterTitle>Color</FilterTitle>
                                                <FilterColor onChange={(e) => setColor(e.target.value)}>
                                                    {fav.color?.map((s) => (
                                                        <FilterSizeOption key={s}>{s}</FilterSizeOption>
                                                    ))}
                                                </FilterColor>
                                            </Filter>
                                            <Filter>
                                                <FilterTitleSize>Size</FilterTitleSize>
                                                <FilterSize onChange={(e) => setSize(e.target.value)}>
                                                    {fav.size?.map((s) => (
                                                        <FilterSizeOption key={s}>{s}</FilterSizeOption>
                                                    ))}
                                                </FilterSize>
                                            </Filter>
                                        </FilterContainer>
                                        <AddContainer>
                                            <AmountContainer>
                                                <Remove
                                                    style={{ cursor: "pointer" }}
                                                    onClick={() => handleQuantity("dec")}
                                                />
                                                <Amount>{quantity}</Amount>
                                                <Add
                                                    style={{ cursor: "pointer" }}
                                                    onClick={() => handleQuantity("inc")}
                                                />
                                            </AmountContainer>
                                            {!user ? (
                                                <Link to="/login">
                                                    <Button>ADD TO CART</Button>
                                                </Link>
                                            ) : (
                                                <div>
                                                    <Button onClick={handleClick}>ADD TO CART</Button>
                                                </div>
                                            )}
                                        </AddContainer>
                                    </InfoContainer>
                                </Wrapper>
                            );
                        })
                    )}
                    <Footer />
                </Container>
            )}
        </>
    );
};

export default Favorites;

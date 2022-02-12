// import { Add, Remove } from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";
import { useNavigate } from "react-router-dom";
import Melanie from "../../asset/melanie.jpeg";
import { onCleanCart  } from "../../redux/apiCalls";
import {
  Container,
  Wrapper,
  Title,
  Top,
  TopButton,
  // TopTexts,
  // TopText,
  Bottom,
  Info,
  Product,
  ProductDetail,
  Image,
  Details,
  ProductName,
  ProductId,
  ProductSize,
  ProductColor,
  PriceDetail,
  ProductAmountContainer,
  ProductAmount,
  ProductPrice,
  Hr,
  Summary,
  SummaryTitle,
  SummaryItem,
  SummaryItemText,
  SummaryItemPrice,
  Button,
} from "./Cart.style";

const KEY = process.env.REACT_APP_STRIPE;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const [envio] = useState(20);
  const [descuento] = useState(15);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const totalPrice = (cart.total + envio) - ((cart.total * descuento)/ 100)

  const onToken = (token) => {
    setStripeToken(token);
    window.location.href = "/success";
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: totalPrice * 100,
        });
        navigate.push("/success", { data: res.data });
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken, totalPrice, navigate]);

  function onNavigate() {
    navigate("/");
  }

  
  function onClean() {
    if (cart.products.length > 0) {
      navigate("/");
      onCleanCart(dispatch);
    } else {
      alert("Debe tener productos en el carrito");
    }
  }
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton onClick={onNavigate}>CONTINUE SHOPPING</TopButton>
          {/* <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts> */}
          <TopButton type="filled" onClick={onClean}>
            Clean cart now
          </TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product) => (
              <Product>
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {product.title}
                    </ProductName>
                    <ProductId>
                      <b>Color:</b> {product.color}
                    </ProductId>
                    <ProductColor color={product.color} />
                    <ProductSize>
                      <b>Quantity:</b> {product.quantity}
                    </ProductSize>
                    <ProductSize>
                      <b>Size:</b> {product.size}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductPrice>
                    $ {product.price * product.quantity}
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))}
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>{`$ ${envio}`}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>15%</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>
                ${" "}
                {cart.total > 0
                  ? totalPrice
                  : 0}
              </SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              name="MELANIE SHOP"
              image={Melanie}
              billingAddress
              shippingAddress
              description={`El total de tu compra es: $${totalPrice}`}
              amount={totalPrice * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <Button>Pay now</Button>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;

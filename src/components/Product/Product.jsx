import {
  FavoriteBorderOutlined,
  SearchOutlined,
  // ShoppingCartOutlined,
} from "@material-ui/icons";
import { Container, Image, Info, Icon } from "./Product.style";
import { useNavigate } from "react-router-dom";

const Product = ({ item}) => {
  const navigate = useNavigate();

  function onNavigate() {
    navigate(`/product/${item._id}`);
  }
  function onNavigateFav() {
    navigate(`/favorites/${item._id}`);
  }
  return (
    <Container>
      {/* <Circle /> */}
      <Image src={item.img} />
      <Info>
        <Icon onClick={onNavigate}>
          <SearchOutlined />
        </Icon>
        <Icon onClick={onNavigateFav}>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;

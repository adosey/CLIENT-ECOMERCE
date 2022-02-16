import Navbar from "../../components/Navbar/Navbar";
import Announcement from "../../components/Announcement/Announcement";
import Products from "../../components/Products/Products";
import Footer from "../../components/Footer/Footer";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { listNumCalzados, listColorCalzados } from '../../data'
import {
    Container,
    Title,
    FilterContainer,
    Filter,
    FilterText,
    Select,
    Option,
} from "./ProductList.style";

const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value,
        });
    };

    return (
        <Container>
            <Announcement />
            <Navbar />
            <Title>{cat.toUpperCase()}</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select name="color" onChange={handleFilters}>
                        <Option >Color</Option>
                        {listColorCalzados.map(color => (
                            <Option key={color} >{color}</Option>
                        ))}
                    </Select>
                    <Select name="size" onChange={handleFilters}>
                        <Option >Size</Option>
                        {listNumCalzados.map(num => (
                            <Option ket={num}>{num}</Option>
                        ))}
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select onChange={(e) => setSort(e.target.value)}>
                        <Option value="newest">Newest</Option>
                        <Option value="asc">Price (asc)</Option>
                        <Option value="desc">Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products cat={cat} filters={filters} sort={sort} />
            <Footer />
        </Container>
    );
};

export default ProductList;

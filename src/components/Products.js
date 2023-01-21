import { Row, Col, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../rtk/slices/products-slice";
import { useEffect } from "react";
import { addToCart } from "../rtk/slices/cart-slice";

function Product() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <Container>
      <Row className="my-5 py-5">
        {products.length === 0 && <div>Loading Products ...</div>}
        {products.map((product) => (
          <Col key={product.id}>
            <Card className="my-2" style={{ width: "18rem" }}>
              <Card.Img
                style={{ height: "20rem" }}
                variant="top"
                src={product.image}
                alt={product.title}
                loading={"lazy"}
              />
              <Card.Body>
                <Card.Title>{product.title.slice(0, 15)}</Card.Title>
                <Card.Text>{product.description.slice(0, 90)}...</Card.Text>
                <Card.Text>${product.price}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => {
                    dispatch(addToCart(product));
                  }}
                >
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Product;

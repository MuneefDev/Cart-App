import { Row, Container, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { deleteFromCart, clear } from "../rtk/slices/cart-slice";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalPrice = cart.reduce((acc, product) => {
    return (acc += product.price * product.quantity);
  }, 0);
  return (
    <Container>
      <Row className="mt-5 py-2">
        <Col className="col-8 mt-3">
          <h2 className="text-start">Welcome to cart</h2>
        </Col>
        <Col className="col-4 mt-3">
          <Button
            onClick={() => {
              dispatch(clear());
            }}
          >
            Clear Cart
          </Button>
        </Col>
      </Row>
      <Row>
        <Col className="col-9 mb-4">
          <h5 className="text-start">Total Price: ${totalPrice.toFixed(2)}</h5>
        </Col>
      </Row>
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Title</th>
            <th>Product Price</th>
            <th>Product Description</th>
            <th>Product Quantity</th>
            <th>Product Image</th>
            <th>Adjust</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.description.slice(0, 150)}</td>
              <td>{product.quantity}</td>
              <td>
                <img
                  style={{ height: "100px", width: "100px" }}
                  src={product.image}
                  alt={product.title}
                />
              </td>
              <td>
                <Button
                  className="btn-sm"
                  variant="danger"
                  onClick={() => {
                    dispatch(deleteFromCart(product));
                  }}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default Cart;

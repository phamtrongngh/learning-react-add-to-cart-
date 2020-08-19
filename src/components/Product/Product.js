import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Container,
  Row,
  Col,
  Button
} from "reactstrap";
import axios from "axios";
import { CartContext } from '../../contexts/Cart'
class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:9032/Product/", {
        headers: {
          Authorization:
            "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjFmZjlmZjdmMTg0NjE1ZThiMDQxZjMiLCJjYXJ0IjowLCJmdWxsbmFtZSI6Ikh14buzbmggTmfhu41jIFRoaeG7h24iLCJhZG1pbiI6ZmFsc2UsImF2YXRhciI6IjE1OTU5MzEyOTcxMzQxLTE1OTA5Mzc4MDI2NjY4ODczNDA4NjEuanBnIiwiaWF0IjoxNTk2MjI2ODAwfQ.OwkP27WNqlLRUVCwyM92BHcqlr-xscytKSvpiZ9nSgc"
        }
      })
      .then((res) => {
        this.setState({
          list: res.data
        });
      });
  }
  static contextType = CartContext;
  render() {
    return (
      <Container>
        <h1>LIST OF PRODUCT</h1>
        <Row>
          {this.state.list.map((x) => (
            <Col md="3" key={x._id}>
              <Card>
                <CardImg
                  width="100%"
                  src={"http://localhost:9032/public/image/" + x.image}
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle>{x.name}</CardTitle>
                  <CardSubtitle>{x.price}</CardSubtitle>
                  <Button onClick={()=>this.context.addToCart(x)}>Add to cart</Button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Product;

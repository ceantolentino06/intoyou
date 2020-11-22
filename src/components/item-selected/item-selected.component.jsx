import React from "react";
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart.actions";
import { setSelectedItem } from "../../redux/item/item.actions";

import { Container, Row, Col, Button } from "react-bootstrap";

import "./item-selected.styles.css";
import flower from "../../assets/img/flower.jpg";
import CustomDesigns from "../custom-designs/custom-designs.component";

class ItemSelected extends React.Component {
  componentDidMount() {
    const { setSelectedItem, item, match } = this.props;
    setSelectedItem(item[match.params.id - 1]);
  }

  render() {
    const { addItem, selectedItem } = this.props;
    return (
      <div className='item'>
        <Container className='item-container'>
          {selectedItem ? (
            <Row>
              <Col sm={12} lg={6}>
                <div className='image-container'>
                  <img
                    src={flower}
                    alt='preview'
                    className='img-thumbnail'
                  ></img>
                </div>
              </Col>
              <Col sm={12} lg={6}>
                <div className='item-info-container'>
                  <span className='title'>{selectedItem.title}</span>
                  <p>
                    <span className='prc'>PRICE</span>
                    <span className='num'>${selectedItem.price}</span>
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus bibendum nec justo at lobortis. Pellentesque viverra
                    lacus erat, ut consectetur eros accumsan sit amet. Donec
                    eget magna aliquet, faucibus ipsum vel, viverra justo. Nam
                    ultricies placerat diam, eu viverra augue pulvinar at.
                    Phasellus malesuada eu dolor sit amet accumsan. Ut convallis
                    purus ut imperdiet condimentum. Proin est ante, placerat
                    eget bibendum ut, pharetra et massa. Quisque porta
                    sollicitudin lectus id convallis. Nulla vestibulum rhoncus
                    nibh a posuere. Praesent pretium at ante ac vulputate. Duis
                    et lectus nisi.
                  </p>
                  <div className='icons-container'>
                    <div className='collection'>
                      <i className='fas fa-store-alt icon'></i>
                      <span>Directly From A Local Florist</span>
                    </div>
                    <div className='collection'>
                      <i className='fas fa-heart icon'></i>
                      <span>Designed, Arranged, & Ready To Be Enjoyed</span>
                    </div>
                    <div className='collection'>
                      <i className='fas fa-hand-holding-heart icon'></i>
                      <span>Hand Delivered</span>
                    </div>
                  </div>
                  <Button
                    onClick={() => addItem(selectedItem)}
                    variant='dark'
                    size='lg'
                    className='mt-3'
                    block
                  >
                    Add to cart
                  </Button>
                </div>
              </Col>
            </Row>
          ) : (
            ""
          )}
        </Container>

        <CustomDesigns />
      </div>
    );
  }
}

const mapStateToProps = ({ item }) => ({
  item: item.items,
  selectedItem: item.selectedItem,
});

const mapDispatchToProps = (dispatch) => ({
  setSelectedItem: (item) => dispatch(setSelectedItem(item)),
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemSelected);

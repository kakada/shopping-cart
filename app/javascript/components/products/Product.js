import React from "react"
import PropTypes from "prop-types"

class Product extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div>
          Id: {this.props.product.id}
          Name: {this.props.product.name}
        </div>
      </React.Fragment>
    );
  }
}

Product.propTypes = {
  product: PropTypes.object.isRequired
};
export default Product;

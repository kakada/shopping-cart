import React from "react"
import PropTypes from "prop-types"

class ProductDetail extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div>
          <h2>Id: {this.props.product.id}</h2>
          Name: {this.props.product.name}
          Updated at: {this.props.product.updated_at}
        </div>
      </React.Fragment>
    );
  }
}

ProductDetail.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductDetail;

import React from "react"
import PropTypes from "prop-types"
import { DataGrid } from "@material-ui/data-grid"
import Product from "./Product";
import ProductFilter from "./ProductFilter";

class Products extends React.Component {
  render () {
    const columns = [
      { field: 'id', headerName: 'ID', width: 70 },
      { field: 'name', headerName: 'Name', width: 130 },
    ];
    return (
      <React.Fragment>
        <div>
          Products:
        </div>

        <div>
          <ProductFilter text="" />
        </div>
      
        <div style={{ display: 'flex', height: 350, width: '100%'  }}>
          <div style={{ flexGrow: 1 }}>
            <DataGrid rows={this.props.products} columns={columns} pageSize={5} checkboxSelection />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Products.propTypes = {
  products: PropTypes.array.isRequired
};
export default Products
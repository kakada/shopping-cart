import React from "react"
import PropTypes from "prop-types"
import { DataGrid } from "@material-ui/data-grid"
import TextSearch from "../commons/TextSearch";

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };

    this.filter = this.filter.bind(this);
    this.request = this.request.bind(this);
  }

  async componentDidMount() {
    this.request("http://localhost:3000/api/v1/products");
  }

  render () {
    const { error, isLoaded, items } = this.state;

    const columns = [
      { field: 'id', headerName: 'ID', width: 70 },
      { field: 'name', headerName: 'Name', width: 130 },
      { field: 'updated_at', headerName: 'Updated at', width: 220 }
    ];
    return (
      <React.Fragment>
        <div>
          Products:
        </div>

        <div>
          <TextSearch onChangeCallback={this.filter} />
        </div>
      
        <div style={{ display: 'flex', height: 350, width: '100%'  }}>
          <div style={{ flexGrow: 1 }}>
            <DataGrid rows={items} columns={columns} pageSize={5} checkboxSelection />
          </div>
        </div>
      </React.Fragment>
    );
  }

  filter(text) {
    this.request("http://localhost:3000/api/v1/products?search=" + text);
  }

  async request(url) {
    console.log(url);
    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        throw Error(response.statusText);
      }
      
      const products = await response.json();
      this.setState({
        isLoaded: true,
        items: products
      });
    } catch(error) {
      this.setState({
        isLoaded: true,
        error
      });
    }
  }
}

Products.propTypes = {
  products: PropTypes.array
};

export default Products
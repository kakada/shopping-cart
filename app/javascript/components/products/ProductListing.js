import React, { useState } from 'react';
import EnhancedTable from '../commons/tables/EnhancedTable';
import TextSearch from '../commons/TextSearch';
import axios from 'axios';

class ProductListing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      products: []
    };

    this.filter = this.filter.bind(this);
    this.request = this.request.bind(this);
    this.create = this.create.bind(this);
  }

  async componentDidMount() {
    this.request("http://localhost:3000/api/v1/products");
  }

  async update(product) {
    console.log("Update product: ", product);
    // make post request here
  }

  async create(product) {
    const _self = this;

    const { error, isLoaded, products } = this.state;
    
    // make post request here
    axios.post('http://localhost:3000/api/v1/products', {
      product: product
    })
    .then(function (response) {
      const newProducts = products.slice();
      newProducts.push(response.data);
      _self.setState({products: newProducts})
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render () {
    const { error, isLoaded, products } = this.state;

    const columns = [
      { id: 'id', numeric: false, disablePadding: true, label: 'ID' },
      { id: 'name', numeric: false, disablePadding: false, label: 'Name' },
      { id: 'updated_at', numeric: false, disablePadding: false, label: 'Updated at' }
    ];

    return (
      <React.Fragment>
        <div>
          <TextSearch onChangeCallback={this.filter} />
        </div>
      
        <div style={{ display: 'flex', height: 350, width: '100%'  }}>
          <div style={{ flexGrow: 1 }}>
            <EnhancedTable rows={products} columns={columns} addNewCallback={this.create} updateCallback={this.update} />
          </div>
        </div>
      </React.Fragment>
    );
  }

  filter(text) {
    this.request("http://localhost:3000/api/v1/products?search=" + text);
  }

  async request(url) {
    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        throw Error(response.statusText);
      }
      
      const products = await response.json();
      this.setState({
        isLoaded: true,
        products: products
      });
    } catch(error) {
      this.setState({
        isLoaded: true,
        error
      });
    }
  }
}

export default ProductListing;
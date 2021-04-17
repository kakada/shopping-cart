import React from "react"
import PropTypes from "prop-types"
import { TextField } from '@material-ui/core';

class ProductFilter extends React.Component {
  render () {
    return (
      <React.Fragment>
        

        <div>
          <form noValidate autoComplete="off">
            <TextField id="standard-basic" label="Search" onChange={this.onChange} />
          </form>
          
          {/* <TextField placeholder="Search" inputProps={{ 'aria-label': 'description' }} /> */}
        </div>
      </React.Fragment>
    );
  }

  onChange(event) {
    this.setState({text: event.target.value});
    console.log("onChange");
  }
}

ProductFilter.propTypes = {
  text: PropTypes.string
};
export default ProductFilter;

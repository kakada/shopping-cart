import React from "react"
import PropTypes from "prop-types"
import { TextField } from '@material-ui/core';

class TextSearch extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange= this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChangeCallback(e.target.value);
  }

  render () {
    return (
      <React.Fragment>
        <div>
            <TextField id="standard-basic" label="Search" onChange={this.handleChange} />
          
          {/* <TextField placeholder="Search" inputProps={{ 'aria-label': 'description' }} /> */}
        </div>
      </React.Fragment>
    );
  }
}

TextSearch.propTypes = {
  onChangeCallback: PropTypes.func
};

export default TextSearch;

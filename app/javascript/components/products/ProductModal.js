import React from 'react';
import PropTypes from "prop-types"
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import { TextField, Button } from '@material-ui/core';
import { BUTTON_EDIT } from "../commons/Constant";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function ProductModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [product, setProduct] = React.useState(props.product);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    const newProduct = {...product, name: e.target.value};
    setProduct(newProduct);
  }

  const handleSave = (event) => {
    props.callback(product);
    setOpen(false);
  }

  const isEdit = () => {
    return props.actionName.toLowerCase() === BUTTON_EDIT;
  }
  
  const actionButton = (name) => {
    return (
      <Tooltip title={props.actionName}>
        <IconButton aria-label={props.actionName.toLocaleLowerCase()} onClick={handleOpen} >
          {isEdit() ? <EditIcon /> : <AddIcon />}
        </IconButton>
      </Tooltip>
    )
  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">{props.actionName} Product: {product.name}</h2>
      <div id="simple-modal-description">
        <div>
          <TextField label="Name" value={product.name} autoFocus={true} required={true} onChange={handleChange}/>

          <div>
            <Button
              variant="contained"
              color="primary"
              size="small"
              className={classes.button}
              startIcon={<SaveIcon />}
              onClick={handleSave}
            >
              Save
            </Button>
            <Button
              variant="contained"
              size="small"
              className={classes.button}
              startIcon={<CancelIcon />}
              onClick={handleClose}
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <React.Fragment>
      {actionButton(props.actionName)}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </React.Fragment>
  );
}

ProductModal.propTypes = {
  product: PropTypes.object.isRequired,
  actionName: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired
};
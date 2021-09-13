import { Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
const TemplateModal = (props: any) => {
  const classes = useStyles();

  const {
    open,
    handleClose,
    text
  } = props

  return (
    <Modal
      open={open}
      onClose={handleClose}
    >
      <div className={classes.paper}>
        <h2 id="simple-modal-title">Notice</h2>
        <p id="simple-modal-description">
          {text}
        </p>
      </div>    
      </Modal>
  )
}
export default TemplateModal;
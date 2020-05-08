import React, {Component} from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import './TransitionsModal.css';

class TransitionsModal extends Component{
    constructor(props){
        super(props);

        this.state = {
            open : false,
            setOpen : false
        }
    }
    
    componentWillReceiveProps(){
        console.log("componentWillReceiveProps")
        if(this.props.showModal){
            this.handleOpen();
        }
    }
    
    handleOpen(){
        this.setState({
            open : true,
            setOpen : true
        });
    };
    
    handleClose(){
        this.setState({
            open : false,
            setOpen : false
        });
    };

    render(){
        return (
        <div>
            <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className="modal"
            open={this.state.open}
            onClose={this.handleClose.bind(this)}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
            >
            <Fade in={this.state.open}>
                <div className="paper">
                <h2 id="transition-modal-title">Transition modal</h2>
                <p id="transition-modal-description">react-transition-group animates me.</p>
                </div>
            </Fade>
            </Modal>
        </div>
        );
    }
}

export default TransitionsModal;
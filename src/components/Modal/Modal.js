import React, {useState} from 'react';
import Modal from '@material-ui/core/Modal';
import { IconButton } from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';
import classes from './Modal.module.css';
import {
    FacebookShareButton,
    FacebookIcon,


    LinkedinShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    TwitterIcon,
    WhatsappIcon,
    LinkedinIcon
  } from "react-share";

const SimpleModal = () => {


    const [open, setOpen] = useState(false);

    const handleOpen = () => {
    setOpen(true);
    };
    
    const handleClose = () => {
    setOpen(false);
    };

    const body = (
    <div className={classes.paper} >
        <h2 id="simple-modal-title" className={classes.heading}>Share with your friends</h2>
        <p id="simple-modal-description" className={classes.desc}>
        Share if you liked out application and show your support
        </p>
       
        <div className={classes.shareLinks}>
            <FacebookShareButton url="https://github.com"  className={classes.share__icon}>
              <FacebookIcon logoFillColor="white" />
            </FacebookShareButton>
            <TwitterShareButton url="https://github.com" className={classes.share__icon}>
              <TwitterIcon logoFillColor="white" />
            </TwitterShareButton>
            <WhatsappShareButton url="https://github.com" className={classes.share__icon}>
              <WhatsappIcon logoFillColor="white" />
            </WhatsappShareButton>
            <LinkedinShareButton url="https://github.com" className={classes.share__icon}>
              <LinkedinIcon logoFillColor="white" />
            </LinkedinShareButton>
            {/* replace these links with proper links after hosting */}
        
        </div>

        <p className={classes.disabled}>This is an open source project. Click the github icon to start contributing</p>        

        
    </div>
    );

    return (
        <div>
          <IconButton onClick={handleOpen}>
            <ShareIcon />
          </IconButton>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            {body}
          </Modal>
        </div>
    );

}


export default SimpleModal;
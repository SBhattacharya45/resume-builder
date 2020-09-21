import React, {useState} from 'react';
import Modal from '@material-ui/core/Modal';
import { IconButton } from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';
import classes from './Modal.module.css';
import { Twitter, Facebook, Whatsapp, Linkedin } from 'react-social-sharing';
import {FacebookShareButton, FacebookIcon} from 'react-share';
// import {
//     EmailShareButton,
//     FacebookShareButton,

//     LinkedinShareButton,
//     TelegramShareButton,
//     TwitterShareButton,
//     WhatsappShareButton,
//   } from "react-share";

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
        Share if you liked out application. And as alwasys thank you for your support
        </p>
        {/* <EmailShareButton url="https://www.npmjs.com/package/react-share"  />
        <FacebookShareButton url="https://www.npmjs.com/package/react-share"  />
        <TelegramShareButton url="https://www.npmjs.com/package/react-share"  />
        <WhatsappShareButton url="https://www.npmjs.com/package/react-share"  />
        <TwitterShareButton url="https://www.npmjs.com/package/react-share"  />
        <LinkedinShareButton url="https://www.npmjs.com/package/react-share"  /> */}
        <div className={classes.shareLinks}>
            <Twitter link="https://github.com" />
            <Facebook link="https://github.com" />
            <Whatsapp link="https://github.com" />
            <Linkedin link="https://github.com" />
            <FacebookShareButton url="https://github.com">
              <FacebookIcon logoFillColor="white" />
            </FacebookShareButton>
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
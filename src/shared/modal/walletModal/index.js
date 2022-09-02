import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import debit from "../../../assets/image/debit-card.png";
import "./css/styles.css"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function WalletModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Fund Your Wallet</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Fund Your Wallet Using:{" "}
          </Typography>
          <div className="fund-wallet-grid">
            <div className="wallet-grid-one">
              <div style={{display:"grid",placeItems:"center"}}>
                {" "}
                <img width="50%" src={debit} alt="" />
              </div>
              <div>
                <h5 style={{textAlign:"center",marginTop:"20px"}}>Fund wallet with your debit card</h5>
              </div>
            </div>
            <div className="wallet-grid-one">
              <div style={{display:"grid",placeItems:"center"}}>
                {" "}
                <img width="50%" src={debit} alt="" />
              </div>
              <div>
                <h5 style={{textAlign:"center",marginTop:"20px"}}>Fund wallet with your bank account</h5>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

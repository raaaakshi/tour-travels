import React, { useState } from "react";
import { Box,  } from "@mui/material";
import NavbarComponent from "../../molecules/navbarComponent/NavbarComponent";
import PacksComponent from "../../molecules/packsComponent/PacksComponent";
import AvatarCarousalComponent from "../../molecules/avatarCarousalComponent/AvatarCarousalComponent";
import PaymentModalComponent from "../../molecules/paymentModalComponent/PaymentModalComponent";
import SuccessModalComponent from "../../molecules/successModalComponent/SuccessModalComponent";


const includesList = ["Lorem ipsum dolor sit amet, consectetur adipiscing"];

export default function HomePage() {
  const [showPaymentModal, setshowPaymentModal] = useState(false);
  const [showSuccessPaymentModal, setshowSuccessPaymentModal] = useState(false);

  let closePaymentModal = () => {
    setshowPaymentModal(false);
    setshowSuccessPaymentModal(true);
  };

  return (
    <Box>
      <NavbarComponent />

      <AvatarCarousalComponent />

      <Box sx={{ padding: 3 ,  marginBottom:"10px"}}>
        <PacksComponent
          title="Standard Pack"
          content="₹ 4,500 /-"
          buttonText="Book Now"
          includes={includesList}
          onBtnClick={() => {
            setshowPaymentModal(true);
          }}
        />
      </Box>

      <Box sx={{ padding: 3, marginBottom:"10px" }}>
        <PacksComponent
          title="Gold Pack"
          content="₹ 4,500 /-"
          buttonText="Book Now"
          includes={includesList}
          onBtnClick={() => {
            setshowPaymentModal(true);
          }}
        />
      </Box>
      
      <Box sx={{ padding: 3,  marginBottom:"10px" }}>
        <PacksComponent 
          title="Platinum Pack"
          content="₹ 4,500 /-"
          buttonText="Book Now"
          includes={includesList}
          onBtnClick={() => {
            setshowPaymentModal(true);
          }}
        />
      </Box>

      {showPaymentModal && (
        <PaymentModalComponent
          onBtnClick={closePaymentModal}
          onClose={() => {
            setshowPaymentModal(false);
          }}
        />
      )}

      {showSuccessPaymentModal && (
        <SuccessModalComponent
          onClose={() => {
            setshowSuccessPaymentModal(false);
          }}
        />
      )}
    </Box>
  );
}

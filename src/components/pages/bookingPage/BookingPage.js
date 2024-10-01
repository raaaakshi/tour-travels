import React, { useState } from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import CardComponent from "../../atoms/cardComponent/CardComponent";
import NavbarComponent from "../../molecules/navbarComponent/NavbarComponent";
import BookingPaymentModal from "../../molecules/bookingPaymentModal/BookingPaymentModal";

export default function BookingPage() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <NavbarComponent />
      <Typography variant="h5" sx={{ margin: "30px", fontWeight: 500 }}>
        My Bookings
      </Typography>
      <Grid
        container
        rowSpacing={4} // sets row gap
        columnSpacing={4} // sets column gap
        sx={{ marginBottom: 4, justifyContent: "center" }}
      >
        <Grid item>
          <CardComponent
            title="Standard Pack"
            content="₹ 4,500/-"
            subContent="05 Dec 2022"
            onBtnClick={() => {
              setOpenModal(true);
            }}
            buttonColor="#07595B"
          />
        </Grid>
        <Grid item>
          <CardComponent
            title="Standard Pack"
            content="₹ 4,500/-"
            subContent="05 Dec 2022"
            onBtnClick={() => {
              setOpenModal(true);
            }}
            buttonColor="#07595B"
          />
        </Grid>
        <Grid item>
          <CardComponent
            title="Standard Pack"
            content="₹ 4,500/-"
            subContent="05 Dec 2022"
            onBtnClick={() => {
              setOpenModal(true);
            }}
            buttonColor="#07595B"
          />
        </Grid>
      </Grid>

      <Divider
        orientation="vertical"
        flexItem
        sx={{ margin: "10px 20px", border: "1px solid #e0e0e0" }}
      />

      <Typography variant="h5" sx={{ margin: "30px", fontWeight: 500 }}>
        History
      </Typography>

      <Grid
        container
        rowSpacing={4} // sets row gap
        columnSpacing={4} // sets column gap
        sx={{
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <Grid item>
          <CardComponent
            title="Standard Pack"
            content="₹ 4,500/-"
            subContent="05 Dec 2022"
            onBtnClick={() => {
              setOpenModal(true);
            }}
            buttonColor="#AEAEAE"
          />
        </Grid>
        <Grid item>
          <CardComponent
            title="Standard Pack"
            content="₹ 4,500/-"
            subContent="05 Dec 2022"
            onBtnClick={() => {
              setOpenModal(true);
            }}
            buttonColor="#AEAEAE"
          />
        </Grid>
        <Grid item>
          <CardComponent
            title="Standard Pack"
            content="₹ 4,500/-"
            subContent="05 Dec 2022"
            onBtnClick={() => {
              setOpenModal(true);
            }}
            buttonColor="#AEAEAE"
          />
        </Grid>
      </Grid>

      <Grid
        container
        rowSpacing={4} // sets row gap
        columnSpacing={4} // sets column gap
        sx={{ justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <Grid item>
          <CardComponent
            title="Standard Pack"
            content="₹ 4,500/-"
            subContent="05 Dec 2022"
            onBtnClick={() => {
              setOpenModal(true);
            }}
            buttonColor="#AEAEAE"
          />
        </Grid>
        <Grid item>
          <CardComponent
            title="Standard Pack"
            content="₹ 4,500/-"
            subContent="05 Dec 2022"
            onBtnClick={() => {
              setOpenModal(true);
            }}
            buttonColor="#AEAEAE"
          />
        </Grid>
        <Grid item>
          <CardComponent
            title="Standard Pack"
            content="₹ 4,500/-"
            subContent="05 Dec 2022"
            onBtnClick={() => {
              setOpenModal(true);
            }}
            buttonColor="#AEAEAE"
          />
        </Grid>
      </Grid>

      <Grid
        container
        rowSpacing={4} // sets row gap
        columnSpacing={4} // sets column gap
        sx={{ justifyContent: "center",marginBottom: "20px", }}
      >
        <Grid item>
          <CardComponent
            title="Standard Pack"
            content="₹ 4,500/-"
            subContent="05 Dec 2022"
            onBtnClick={() => {
              setOpenModal(true);
            }}
            buttonColor="#AEAEAE"
          />
        </Grid>
        <Grid item>
          <CardComponent
            title="Standard Pack"
            content="₹ 4,500/-"
            subContent="05 Dec 2022"
            onBtnClick={() => {
              setOpenModal(true);
            }}
            buttonColor="#AEAEAE"
          />
        </Grid>
        <Grid item>
          <CardComponent
            title="Standard Pack"
            content="₹ 4,500/-"
            subContent="05 Dec 2022"
            onBtnClick={() => {
              setOpenModal(true);
            }}
            buttonColor="#AEAEAE"
          />
        </Grid>
      </Grid>

      {openModal && (
        <BookingPaymentModal
          open={openModal}
          onClose={() => {
            setOpenModal(false);
          }}
          onContinue={() => {
            setOpenModal(false);
          }}
        />
      )}
    </Box>
  );
}

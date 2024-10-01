import {
  Box,
  Typography,
  Button,
  List,
  ListItem,
  Divider,
  Avatar,
  Card,
  CardContent,
  Grid,
  ListItemText,
} from "@mui/material";
import { styled } from "@mui/system";
import PropTypes from "prop-types";

import renukaAvatar from "../../../assets/renuka.jpg";
import vikasAvatar from "../../../assets/vikas.jpg";
import noahAvatar from "../../../assets/noah.jpg";
import rakshAvatar from "../../../assets/raksh.jpg";

const FeedbackCard = styled(Card)({
  margin: "10px",
  flex: 1,
  minWidth: "43%",
});

const feedbacks = [
  {
    name: "Renu_ka",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
    avatar: renukaAvatar,
  },
  {
    name: "V_kas",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
    avatar: vikasAvatar,
  },
  {
    name: "Noah",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
    avatar: noahAvatar,
  },
  {
    name: "Rak_sh",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
    avatar: rakshAvatar,
  },
  {
    name: "V_kas",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
    avatar: vikasAvatar,
  },
  {
    name: "Noah",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
    avatar: noahAvatar,
  },
  {
    name: "Noah",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
    avatar: noahAvatar,
  },
  {
    name: "Rak_sh",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
    avatar: rakshAvatar,
  },
  {
    name: "V_kas",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
    avatar: vikasAvatar,
  },
  {
    name: "Noah",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
    avatar: noahAvatar,
  },
  {
    name: "Rak_sh",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
    avatar: rakshAvatar,
  },
  {
    name: "V_kas",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
    avatar: vikasAvatar,
  },
  {
    name: "Noah",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
    avatar: noahAvatar,
  },

  {
    name: "Rak_sh",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
    avatar: rakshAvatar,
  },
  {
    name: "V_kas",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
    avatar: vikasAvatar,
  },
  {
    name: "Noah",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
    avatar: noahAvatar,
  },
  {
    name: "Rak_sh",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
    avatar: rakshAvatar,
  },
  {
    name: "V_kas",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
    avatar: vikasAvatar,
  },

];

const StyledList = styled(List)({
  width:"270px",
  listStyleType: 'disc',
  paddingLeft: '5px',
});

const CustomListItem = styled(ListItem)({
  display: 'list-item',
  listStyleType: 'inherit',
});


const PacksComponent = ({ title, content, buttonText,onBtnClick=()=>{} }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        width: "100%",
        border:"1px solid black",
        borderRadius:"20px"
      }}
    >
      <Box sx={{margin:"40px 0 0 40px", display:"flex", alignItems:"center",flexDirection:"column"}} >
        <Typography variant="h6" gutterBottom sx={{fontWeight:600}}>
          {title}
        </Typography>
        <Typography variant="h3" gutterBottom sx={{fontWeight:600, marginTop:"20px"}}>
          {content}
        </Typography>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#07595B", color: "white",width:"270px", borderRadius:'10px',marginTop:"20px" }}
          onClick={onBtnClick}
        >
          {buttonText}
        </Button>
      </Box>

      <Divider orientation="vertical" flexItem sx={{ margin: "10px 20px" ,border:"1px solid #3F9FA1"}} />

      <Box sx={{margin:"10px"}} >
        <Typography variant="h6" gutterBottom sx={{fontWeight:600}}>
          Includes
        </Typography>

            <StyledList component="ul">
                <CustomListItem component="li">
                    <ListItemText primary="Lorem ipsum dolor sit amet, consectetur adipiscing" />
                </CustomListItem>

                <CustomListItem component="li">
                    <ListItemText primary="Lorem ipsum dolor sit amet, consectetur adipiscing" />
                </CustomListItem>
                
                <CustomListItem component="li">
                    <ListItemText primary="Lorem ipsum dolor sit amet, consectetur adipiscing" />
                </CustomListItem>

            </StyledList>

      </Box>

      <Divider orientation="vertical" flexItem sx={{ margin: "10px 20px" ,border:"1px solid #3F9FA1"}} />

      <Box sx={{margin:"10px"}}>
        <Typography variant="h6" gutterBottom sx={{fontWeight:600}}>
          Feedback
        </Typography>
        <Box
          sx={{
            maxHeight: 250,
            overflowY: "scroll",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            '&::-webkit-scrollbar': {
            display: 'none'
    }
            
          }}
        >
          {feedbacks.map((feedback, index) => (
            <FeedbackCard key={index} sx={{width:"270px"}} >
              <CardContent sx={{height:"180px"}}>
                <Grid container spacing={2} >
                  <Grid item>
                    <Avatar src={feedback.avatar}>{feedback.name[0]}</Avatar>
                  </Grid>
                  <Grid item xs>
                    <Typography variant="subtitle1">{feedback.name}</Typography>
                    <Typography variant="body2">{feedback.text}</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </FeedbackCard>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

PacksComponent.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  includes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PacksComponent;

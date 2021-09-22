import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Box } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  card: {
    width: "100%",
    margin: "20px 50px",
    marginTop: "100px",
    backgroundColor: "#F3D8D8",
    padding: "36px",
  },
}));
const CardDashboard = ({ Text1, Text2 }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Box display="flex" className="Box">
          <Typography variant="h5" component="h5">
            {Text1}
            <Typography variant="h5" component="h5">
              {Text2}
            </Typography>
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CardDashboard;

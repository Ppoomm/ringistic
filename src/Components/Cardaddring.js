import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Box } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  card: {
    // minWidth: "30vw",
    margin: "50px 50px",
    // padding: "0px 40px",
  },
}));
const CardAddRing = ({
  Text1,
  Text2,
  Text3,
  Text4,
  Text5,
  Text6,
  Text7,
  Text8,
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Box display="flex">
          <img className=" pic "
            src="https://jewelrydesigns.com/wp-content/uploads/ER613-Diamond-Underbezel-Engagement-Ring.jpg"
            width="50px"
            height="50px"
          />
          
          <Typography variant="h5" component="h5" style={{ marginLeft: 24 }}>
            {Text1}
            <Typography variant="h5" component="h5" style={{ marginRight: 24 }}>
              {Text2}
              <Typography
                variant="h5"
                component="h5"
                style={{ marginRight: 24 }}
              >
                {Text3}
                <Typography
                  variant="h5"
                  component="h5"
                  style={{ marginRight: 24 }}
                >
                  {Text4}
                  <Typography
                    variant="h5"
                    component="h5"
                    style={{ marginRight: 24 }}
                  >
                    {Text5}
                    <Typography
                      variant="h5"
                      component="h5"
                      style={{ marginRight: 24 }}
                    >
                      {Text6}
                      <Typography
                        variant="h5"
                        component="h5"
                        style={{ marginRight: 24 }}
                      >
                        {Text7}
                        <Typography
                          variant="h5"
                          component="h5"
                          style={{ marginRight: 24 }}
                        >
                          {Text8}
                        </Typography>
                      </Typography>
                    </Typography>
                  </Typography>
                </Typography>
              </Typography>
            </Typography>
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CardAddRing;

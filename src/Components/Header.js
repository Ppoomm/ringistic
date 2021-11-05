import React from "react";
import wedding from "../assets/images/wedding.png";
import dress from "../assets/images/dress.png";
import engagement from "../assets/images/engagement.png";
import diamond from "../assets/images/diamond.png";
import { Container, Grid, Paper, Typography } from "@material-ui/core";
import "../Header.css";

import { useHistory } from "react-router-dom";

const typesList = [
  { title: "wedding", imgUrl: wedding },
  { title: "engagement", imgUrl: engagement },
  { title: "dress", imgUrl: dress },
  { title: "diamond", imgUrl: diamond },
];

const Header = () => {
  const history = useHistory();

  return (
    <div className="root">
      <Grid container direction="row" alignItems="flex-start" spacing={4}>
        {typesList.map((type) => (
          <Grid item xs={3}>
            <Paper
              elevation={0}
              className={`paper ${
                window.location.pathname.includes(type.title)
                  ? "paper-active"
                  : ""
              }`}
              onClick={() => history.push(`/${type.title}/detail`)}
            >
              <div className="logo">
                <img src={type.imgUrl} alt="wedding" />
              </div>

              <div className="capitalize"> {type.title} Ring</div>
            </Paper>
          </Grid>
        ))}
        <div className="hr-line" />
      </Grid>
    </div>
  );
};

export default Header;

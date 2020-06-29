import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import { Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  root: {
    marginBottom: 10,
  },
  navBar: {
    color: "#fff",
    padding: 10,
  },
}));

export default function Header() {
  const styles = useStyle();

  return (
    <div>
      <AppBar className={styles.navBar} color="primary">
        <Toolbar variant="dense">
          <Typography align="center" variant="h6">
            Multi Step React Form{" "}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  routelink: {
    textDecoration: "none"
  }
});
function LinkTab(props) {
  return (
    <Link className={props.className} to={props.href}>
      <Tab {...props} />
    </Link>
  );
}

export default function LoginTabs() {
  const classes = useStyles();
  console.log(classes);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <LinkTab label="Sign Up" href="/signup" className={classes.routelink} />
        <LinkTab label="Sign In" href="/signin" className={classes.routelink} />
        {/* <Tab label="Login" />
        <Tab label="Register" /> */}
      </Tabs>
    </Paper>
  );
}

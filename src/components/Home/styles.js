import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  root:{

  },
  title: {
    marginTop: '5%',
    display: "flex",
    alignItems: "center"
  },
  home__container: {
    display: "flex",
    width: "100%",
    alignItems: "center"
  },
  home: {
    display: "flex-container",
    width: "100%"
  },
  container: {
    display: "flex",
    width: "100%",
    alignItems: "center"
  }
}));
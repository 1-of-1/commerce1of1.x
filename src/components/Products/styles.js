import { makeStyles } from "@material-ui/core/styles";
import { palette } from "@material-ui/system";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
   // backgroundColor: theme/palette.background.default,
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
}));

import { withStyles } from '@mui/styles';
import {NoStyleLogo} from './logo'

const styles = theme => ({
  logo: {
    height: 1.5*7 + 'em',
    paddingTop: 0.4*7 + 'em',
  },
});

export default withStyles(styles)(NoStyleLogo);

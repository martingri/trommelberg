import { withStyles } from '@mui/styles';
import NoStyleLogo from './logo';

const styles = theme => ({
  logo: {
        height: 180.5 + 'px',
  },
});

export default withStyles(styles)(NoStyleLogo);

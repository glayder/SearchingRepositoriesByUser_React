import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    left: 'calc(50% - 20px)',
    position: 'fixed',
  },
}));

export default useStyles;

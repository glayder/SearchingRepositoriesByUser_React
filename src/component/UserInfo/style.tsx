import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  avatar: {
    display: 'flex',
    alignItems: 'center',
  },
  gridContainer: {
    [theme.breakpoints.down(600)]: {
      justifyContent: 'center',
    },
  },
  gridDescription: {
    [theme.breakpoints.down(600)]: {
      textAlign: 'center',
    },
  },
}));

export default useStyles;

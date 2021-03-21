import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      marginTop: 20,
      marginBottom: 20,
      fontSize: '0.8rem',
      padding: 0,
      justifyContent: 'center',
    },
    icon: {
      marginRight: 10,
    },
    span: {
      fontWeight: 'bold',
      marginLeft: 3,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
      margin: 10,
      minWidth: 215,
    },
    cardItem: {
      maxWidth: '100%;',
      padding: '0!important',
      [theme.breakpoints.down(525)]: {
        flex: 1,
      },
    },
  }),
);

export default useStyles;

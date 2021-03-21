import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    form: {
      display: 'flex',
      justifyContent: 'center',
      paddingTop: 30,
      marginBottom: 30,
    },
    btnSubmit: {
      color: '#101010',
      background: 'transparent',
      border: '1px solid #868686',
      marginLeft: 10,
      boxShadow: 'none',
      padding: 6,
      fontSize: '0.8rem',
      '&:hover': {
        background: '#dedede',
      },
    },
  }),
);

export default useStyles;

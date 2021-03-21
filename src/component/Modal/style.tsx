import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    content: {
      width: 400,
      background: '#fff',
      padding: 20,
      boxShadow: '0px 0px 5px rgb(56, 56, 56)',
      maxWidth: 500,
      color: 'rgb(56, 56, 56)',
      margin: '0 20px',
      borderRadius: 5,
      '&:focus': {
        outline: 'none',
      },
    },
    title: {
      borderBottom: '1px solid rgb(56, 56, 56)',
      fontSize: '1.5rem',
      paddingBottom: 5,
      textAlign: 'center',
      marginBottom: 20,
    },
    p: {
      color: ' rgb(102, 101, 101)',
      fontWeight: 400,
      marginTop: 8,
    },
    span: {
      color: 'rgb(56, 56, 56)',
      fontWeight: 'bold',
    },
  }),
);

export default useStyles;

import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  loginCard: {
    display: 'flex',
    height: '90%',
    width: '90%',
    minHeight: '550px',
    maxWidth: '600px',
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: theme.spacing(5),
    [theme.breakpoints.only('xs')]: {
      height: '100%',
      width: '100%',
    },
  },

  title: {
    display: 'flex',
  },

  titleText: {
    marginLeft: theme.spacing(1),
  },

  loginForm: {
    display: 'flex',
    flexDirection: 'column',
  },

  passwordInput: {
    marginTop: theme.spacing(1),
  },

  psswdOptions: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },

  switchContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  },

  loginOptions: {
    alignSelf: 'center',
    marginTop: theme.spacing(1),
    cursor: 'pointer',
  },
}))

export default useStyles

import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  loginPage: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  loginCard: {
    width: '90%',
    maxWidth: '450px',
    height: '80%',
    minHeight: '400px',
    maxHeight: '600px',
    display: 'flex',
    flexDirection: 'column',
    flexBasis: '100%',
    justifyContent: 'space-around',
    padding: theme.spacing(5),
  },

  title: {
    display: 'flex',
  },

  titleText: {
    marginLeft: theme.spacing(1),
  },

  loginForm: {
    display: 'flex',
    flexDirection: 'column'
  },

  passwordInput: {
    marginTop: theme.spacing(1),
  },

  psswdResetLink: {
    alignSelf: 'flex-end'
  },

  loginOptions: {
    alignSelf: 'center',
    marginTop: theme.spacing(1)
  }
}))

export default useStyles

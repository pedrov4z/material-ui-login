import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  loginPage: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  loginCard: {
    width: '80%',
    height: '80%',
    display: 'flex',
    flexDirection: 'column',
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

  emailInput: {},

  passwordInput: {
    marginTop: theme.spacing(1),
  },

  loginOptions: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  signUp: {
    alignSelf: 'center'
  }
}))

export default useStyles

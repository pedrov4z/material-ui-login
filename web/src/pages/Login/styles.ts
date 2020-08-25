import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  screenSection: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },

  bannerCard: {
    height: '90%',
    minHeight: '400px',
    maxHeight: '1000px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },

  banner: {
    width: '80%'
  },

  loginCard: {
    display: 'flex',
    height: '90%',
    minHeight: '400px',
    maxHeight: '1000px',
    width: '90%',
    maxWidth: '500px',
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

  passwordInput: {
    marginTop: theme.spacing(1),
  },

  psswdResetLink: {
    alignSelf: 'flex-end'
  },

  loginOptions: {
    alignSelf: 'center',
    marginTop: theme.spacing(1)
  },
}))

export default useStyles

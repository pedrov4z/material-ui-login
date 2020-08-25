import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  loginPage: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

    loginCard: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: theme.spacing(10)
    },

      title: {
        display: 'flex'
      },

        titleText: {
          marginLeft: theme.spacing(1)
        },

      loginForm: {
        marginTop: theme.spacing(5),
        display: 'flex',
        flexDirection: 'column'
      },

        emailInput: {
          
        },

        passwordInput: {
          marginTop: theme.spacing(1)
        },

        loginOptions: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }
}))

export default useStyles
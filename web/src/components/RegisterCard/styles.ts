import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  registerCard: {
    display: 'flex',
    height: '90%',
    minHeight: '550px',
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

  registerForm: {
    display: 'flex',
    flexDirection: 'column',
  },

  inputMT: {
    marginTop: theme.spacing(1),
  },

  radioGroup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%'
  },
}))

export default useStyles

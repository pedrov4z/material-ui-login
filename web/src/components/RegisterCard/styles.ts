import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  registerCard: {
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

  titleBar: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },

  title: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
  },

  titleText: {
    marginLeft: theme.spacing(1),
  },

  stepSelector: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'default'
  },

  stepSelectorItem: {
    height: '30px',
    width: '30px',
    border: '1px solid gray',
    borderRadius: '15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // cursor: 'pointer',
  },

  stepSelectorItemSelected: {
    height: '30px',
    width: '30px',
    border: '1px solid gray',
    borderRadius: '15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // cursor: 'pointer',
    background: theme.palette.secondary.light,
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

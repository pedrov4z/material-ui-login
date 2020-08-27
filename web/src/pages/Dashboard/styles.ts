import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  dashboardPageContainer: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  paper: {
    width: '40%',
    padding: theme.spacing(5),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}))

export default useStyles

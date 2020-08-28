import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  dashboardPageContainer: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  paper: {
    width: '40%',
    padding: theme.spacing(5),
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },

  titleBar: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },

  link: {
    cursor: 'pointer',
  },

}))

export default useStyles

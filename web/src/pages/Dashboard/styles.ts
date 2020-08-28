import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  dashboardPageContainer: {
    minHeight: '100%',
    display: 'flex',
    justifyContent: 'center',
  },

  paper: {
    width: '100%',
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
    wordBreak: 'break-all',
  },

  link: {
    cursor: 'pointer',
  },

}))

export default useStyles

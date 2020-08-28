import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  titleBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    cursor: 'pointer',
  },

  clientsPaper: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
  },

  clientPaper: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2),
  },

  profileInfo: {
    marginLeft: theme.spacing(1)
  },

  typographyWithIcon: {
    display: 'flex',
    alignItems: 'center',
  }
}))

export default useStyles
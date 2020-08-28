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
    minWidth: '240px',
  },

  clientPaper: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: theme.spacing(2),
  },

  profileInfo: {
    marginLeft: theme.spacing(2)
  },

  typographyWithIcon: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
  },

  typographyIcon: {
    marginRight: theme.spacing(1)
  },
}))

export default useStyles
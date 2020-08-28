import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  titleBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    cursor: 'pointer',
    transition: 'background-color .2s',
    padding: theme.spacing(1),
    border: '1px #e8e8e8 solid',
    borderRadius: '5px',
    '&:hover': {
      background: '#e8e8e8',
    },
  },

  clientsPaper: {
    padding: theme.spacing(2),
    minWidth: '240px',
  },

  clientPaper: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: theme.spacing(2),
    transition: 'background-color .5s',
    borderRadius: '5px',
    '&:hover': {
      background: '#e8e8e8',
    },
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
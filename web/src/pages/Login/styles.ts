import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  screenSection: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  bannerCard: {
    height: '90%',
    minHeight: '545px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },

  banner: {
    width: '80%'
  },
  
}))

export default useStyles

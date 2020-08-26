import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  loginPageContent: {
    height: '100%',
  },
  
  screenSection: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  bannerCard: {
    height: '90%',
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

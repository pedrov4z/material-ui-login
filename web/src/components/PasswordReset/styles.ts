import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  modalStyle: {
    width: '320px',
    height: '300px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: theme.spacing(3)
  },

  title: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
}))

export default useStyles
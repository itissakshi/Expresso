import { makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme) => ({
  appBar: {
    width:'100%',
    margin: '0 0 40px 0',
    padding:'30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor:'#3B0944',
    color:'#F7F7F7',
    borderRadius:'0 0 50px 50px',
    alignItems: 'center',
  },
  image: {
    marginLeft: '15px',
  },
  icon:{
   fontSize: '3rem',
  },

  [theme.breakpoints.down('sm')]:{
    mainContainer:{
      flexDirection:"column-reverse"
    }
  }
  
}));
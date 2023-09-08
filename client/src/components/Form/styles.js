
import { makeStyles } from '@material-ui/core/styles';export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      
    },
    '& .MuiButton-root:hover' : {
      backgroundColor:'#F30E5C',
      color:'#F7F7F7',
    },
  },
  paper: {
    padding: theme.spacing(3.5),
    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
    backgroundColor:'#F7F7F7',
    color:'#5F1854',
    borderRadius:'20px',
    width:'300px',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    
    
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
    backgroundColor:'#5F1854',
    color:'#F7F7F7',
  },
  buttonclear: {
    color:'#5F1854',
    backgroundColor:'#F7F7F7',
    outline:'2px #3B0944 solid',
  },
 
  input:{
    backgroundColor:'#ffffff',
    color:'#482121',
    borderRadius:'5px',
  }
  
}));
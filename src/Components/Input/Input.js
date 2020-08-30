import React,{Component} from 'react';
import styles from './Input.module.css';
import {Input,InputLabel,Grid,OutlinedInput, TextField} from '@material-ui/core';
class InputClass extends Component{
    constructor(props){
        super(props);
        this.state={
            value:"",
        }
    }
    onChange=(target)=>{

     const {onChange,text}=this.props
        this.setState({
            value:target
        })
        onChange(text,target)
    }
    handleClickShowPassword=()=>{
        
    }
    render(){
        const {classes,type,text,errorMessage}=this.props;
        const {value}=this.state;
        return(<div>
          {type!="password"?<Grid container direction="column" className={styles.Grid}> 
            <TextField className={styles.inputField} size="small" label={text} id="outlined-email" variant="outlined" class={classes}  value={value} type={type} onChange={(event)=>this.onChange(event.target.value)}/>
            <span className={styles.errorMessage}>{errorMessage}</span>
            </Grid>:
            <Grid container direction="column" className={styles.Grid}> 
            <TextField size="small" className={styles.inputField}
             label={text} id="outlined-email" variant="outlined"
              class={classes}  value={value} type={type} 
              onChange={(event)=>this.onChange(event.target.value)}
            //   endAdornment={
            //     // <InputAdornment position="end">
            //     //   <IconButton
            //     //     aria-label="toggle password visibility"
            //     //     onClick={handleClickShowPassword}
            //     //     onMouseDown={handleMouseDownPassword}
            //     //   >
            //     //     {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
            //     //   </IconButton>
            //     // </InputAdornment>
            //   }
              />
            <span className={styles.errorMessage}>{errorMessage}</span>
            </Grid>}
        </div>)
    }

}
export default InputClass;
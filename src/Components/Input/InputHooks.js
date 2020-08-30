import React,{useState} from 'react';
import styles from './Input.module.css';
import {Visibility,VisibilityOff} from '@material-ui/icons';
import {Input,InputLabel,Grid,OutlinedInput,InputAdornment,IconButton,TextField} from '@material-ui/core';
const InputClass=({type,errorMessage,classes,text,onChange})=>{

    const [state,setState]=useState({
        value:"",
        showPassword:false,
    })
    const onChangeOne=(target)=>{
        setState({
            ...state,
            value:target,
        })
        onChange(text,target)
    } 
    const handleClickShowPassword=()=>{
        setState({
            ...state,
            showPassword:!state.showPassword,
        })
    }
    const {value}=state
    return(<div>
        {type!="password"?<Grid container direction="column" className={styles.Grid}> 
          <TextField className={styles.inputField} size="small" label={text} id="outlined-email" variant="outlined" class={classes}  value={value} type={type} onChange={(event)=>onChangeOne(event.target.value)}/>
          <span className={styles.errorMessage}>{errorMessage}</span>
          </Grid>:
          <Grid container direction="column" className={styles.Grid}> 
          <TextField size="small" className={styles.inputField}
           label={text} id="outlined-email" variant="outlined"
            class={classes}  value={value} type={state.showPassword?"text":"password"} 
            onChange={(event)=>onChangeOne(event.target.value)}
            InputProps={{
            endAdornment:
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                >
                  {state.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }}
            />
          <span className={styles.errorMessage}>{errorMessage}</span>
          </Grid>}
      </div>)
}
export default InputClass;
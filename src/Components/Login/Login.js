import React, { useEffect, useReducer, useState, useContext, useRef, } from 'react';

import Card from '../UI/Card';
import classes from './Login.module.css';
import Button from '../UI/Button';
import Input from '../UI/Input/Input';
import AuthContext from '../store/auth-context';

const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.includes('@') };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.includes('@') };
  }
};
const passwordReducer =(state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
};
const collegeNameReducer =(state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.trim() !== '' };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim() !== '' };
  }
};


const Login = (props) => {
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  // const [enteredCollegeName, setEnteredCollegeName] = useState('');
  // const [collegeNameIsValid, setCollegeNameIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: null,

  })
  const [collegeNameState, dispatchcollegeName] = useReducer(collegeNameReducer, {
    value: '',
    isValid: null,

  })

  const authCtx = useContext(AuthContext);
  const emailInputRef = useRef();
  const passwordRef = useRef();
  const collegeNameRef = useRef();

  useEffect(() => {
    console.log('EFFECT RUNNING');
    return () => {
      console.log('EFFECT CLEANUP');
    };
  }, []);

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid} = passwordState;
  const { isValid: collegeNameIsValid} = collegeNameState;
  
  useEffect(() => {
    const identifier = setTimeout(() => {
            console.log('checking form validity');
            setFormIsValid(
              emailIsValid && passwordIsValid &&
              collegeNameIsValid
            );
        }, 500);

        return () => {
              console.log('CLEANUP');
              clearTimeout(identifier);
          
            };
            }, [emailIsValid, passwordIsValid, collegeNameIsValid]);
          

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'USER_INPUT', val: event.target.value });

    // setFormIsValid(
    //   event.target.value.includes('@') &&
    //  passwordState.isValid &&
    //   enteredCollegeName.trim() !== ''
    // );
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type: 'USER_INPUT', val:event.target.value});

    // setFormIsValid(
    //   emailState.isValid && event.target.value.trim().length > 6
    // );
  };

  const collegeNameChangeHandler = (event) => {
    dispatchcollegeName({type: 'USER_INPUT', val:event.target.value});
  
  
    setFormIsValid(
      emailState.isValid &&
      passwordState.isValid &&
      collegeNameState.isValid
    );
  };
  const validateEmailHandler = () => {
    dispatchEmail({ type: 'INPUT_BLUR' });
  };

  const validatePasswordHandler = () => {
  dispatchPassword({ type: 'INPUT_BLUR' });
  };

  const validatecollegeNameHandler = () => {
    dispatchcollegeName({ type: 'INPUT_BLUR' });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if(!formIsValid) {
    authCtx.onLogin(emailState.value, passwordState.value, collegeNameState.value);
    }else if(!emailIsValid){
      emailInputRef.current.focus();
    }
    else if(!passwordIsValid){
      passwordRef.current.focus();

    }
    else{ 
        collegeNameRef.current.focus();
    }
  
    
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
     <Input
     Ref={emailInputRef}
      id="email"
      label="E-Mail"
       type="email" 
       isValid={emailIsValid} 
       value={emailState.value}
       onChange={emailChangeHandler}
       onBlur={validateEmailHandler}
        />
        
        <Input 
        Ref={passwordRef}
        id="password"
      label="Password"
       type="password" 
       isValid={passwordIsValid} 
       value={passwordState.value}
       onChange={passwordChangeHandler}
       onBlur={validatePasswordHandler}
        />

        <Input
        Ref={collegeNameRef}
         id="collegeName"
      label="College-Name"
       type="collegeName" 
       isValid={collegeNameIsValid} 
       value={collegeNameState.value}
       onChange={collegeNameChangeHandler}
       onBlur={validatecollegeNameHandler}
        />

        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
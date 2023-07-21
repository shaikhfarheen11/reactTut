import React, { useContext } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button'; // Import the Button component here
import classes from './Home.module.css';
import AuthContext from '../store/auth-context';

const Home = (props) => {

  const authCtx = useContext(AuthContext);
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={authCtx.onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;

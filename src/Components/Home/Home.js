import React, { useContext }from 'react';

import Card from '../UI/Card';
import classes from './Home.module.css';
import Button from '../UI/Button';
import AuthContext from '../store/auth-context';

const Home = (props) => {
  const authctx = useContext(AuthContext);
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={authctx.onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;
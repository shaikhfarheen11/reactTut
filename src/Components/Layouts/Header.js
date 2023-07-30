import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import thImage from '../../assets/th (2).jpeg';
import classes from './Header.module.css';

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton />
            </header>
            <div className={classes['main-image']}>
                <img src={thImage} alt = 'A table full of delicious food!' />
            </div>
        </Fragment>
    );
};
export default Header;
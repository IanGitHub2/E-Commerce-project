import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom'

import logo from '../../assets/logo.svg'
import useStyles from './styles'

const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    const location = useLocation();

    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar >
                    <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="Commerce.js" height="25px" className={classes.image}/>
                        Commerce.js
                    </Typography>
                    <div className={classes.grow}/>
                    {location.pathname === '/' && (
                    <div className={classes.button}>
                        <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart/>
                            </Badge>
                        </IconButton>
                    </div>)}
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
// <a href='https://dryicons.com/free-icons/e-commerce-logo'> Icon by Dryicons </a>
// Photo by <a href="https://unsplash.com/@codergautam?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">GAUTAM KUMAR</a> on <a href="https://unsplash.com/s/photos/keyboard?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
// Photo by <a href="https://unsplash.com/@joanofarts?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Joan Tran</a> on <a href="https://unsplash.com/s/photos/water-bottle?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
// Photo by <a href="https://unsplash.com/@karlkoehler?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Karl Köhler</a> on <a href="https://unsplash.com/s/photos/water-bottle?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
// Photo by <a href="https://unsplash.com/@evanthewise?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Evan Wise</a> on <a href="https://unsplash.com/s/photos/water-bottle?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
// Photo by <a href="https://unsplash.com/@vanesagiaconi?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Vanesa Giaconi</a> on <a href="https://unsplash.com/s/photos/water-bottle?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
// Photo by <a href="https://unsplash.com/@steve_j?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Steve Johnson</a> on <a href="https://unsplash.com/s/photos/water-bottle?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
// Photo by <a href="https://unsplash.com/@groblechnersara?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sara Groblechner</a> on <a href="https://unsplash.com/s/photos/water-bottle?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
// Photo by <a href="https://unsplash.com/@martinsanchez?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Martin Sanchez</a> on <a href="https://unsplash.com/s/photos/water-bottle?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
// Photo by <a href="https://unsplash.com/@cchabot?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Crystal de Passillé-Chabot</a> on <a href="https://unsplash.com/s/photos/bottle?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    background: '#efefef',
    bottom: 0
  },
});

const BottomNav = ({changePageTitle, newButtonHandler}) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    return (
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          changePageTitle(newValue);
          setValue(newValue);
          if ('Transactions' == newValue) {
            newButtonHandler('/transaction/new');
          } else {
            newButtonHandler('/category/new');
          }
          
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="Transactions" value="Transactions" icon={<RestoreIcon />} component={Link}
        to="/transaction/list"/>
        <BottomNavigationAction label="Category" value="Category" icon={<FavoriteIcon />} component={Link}
        to="/category/list"/>
        <BottomNavigationAction label="Report" icon={<LocationOnIcon />} />
      </BottomNavigation>
    );
};

export default BottomNav;
import React from 'react';
import Badge from '@material-ui/core/Badge';
import FavoriteIcon from '../../Images/favorite_border-white-18dp.svg';
import { useStateValue } from '../../DataLayer/Context';

const HeartContainer = (props) => {
  const [{ favList }] = useStateValue();
  return (
    <div className="heart_container">
      <Badge badgeContent={favList.length} color="error">
        <img src={FavoriteIcon} className="heart_icon" alt="fav_icon" />
      </Badge>
    </div>
  );
};

export default HeartContainer;

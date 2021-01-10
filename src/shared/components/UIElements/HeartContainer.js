import React from 'react';
import Badge from '@material-ui/core/Badge';
import FavoriteIcon from '../../images/favorite_border-white-18dp.svg';
import { useStateValue } from '../../datalayer/Context';

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

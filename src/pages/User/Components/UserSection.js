import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';

const UserSection = (props) => {
  return (
    <Paper className="cmn_block" elevation={3} key={props.title}>
      <Link to={props.link}>
        <span>{props.title}</span>
        {props.icon}
      </Link>
    </Paper>
  );
};

export default UserSection;

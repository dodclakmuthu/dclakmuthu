import React from 'react';
import MUIAlert from './MUIAlert';

const NotificationBar = ({notifications}) => {
  return (
    <div className='notifications-wrapper'>
      {
        notifications.map(({type, message}, index) => {
          return <MUIAlert type={type} message={message} key={index} />
        })
      }
    </div>
  );
}

export default NotificationBar;

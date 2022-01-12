import React from 'react';
import './widgetSm.css';
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://helpclancarefoundation.org/wp-content/uploads/2021/10/003d.jpg"
            alt="profile"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Bilal Gokdag</span>
            <span className="widgetSmUserTitle">Computer Engineer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://helpclancarefoundation.org/wp-content/uploads/2021/10/003d.jpg"
            alt="profile"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Bilal Gokdag</span>
            <span className="widgetSmUserTitle">Computer Engineer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://helpclancarefoundation.org/wp-content/uploads/2021/10/003d.jpg"
            alt="profile"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Bilal Gokdag</span>
            <span className="widgetSmUserTitle">Computer Engineer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://helpclancarefoundation.org/wp-content/uploads/2021/10/003d.jpg"
            alt="profile"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Bilal Gokdag</span>
            <span className="widgetSmUserTitle">Computer Engineer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://helpclancarefoundation.org/wp-content/uploads/2021/10/003d.jpg"
            alt="profile"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Bilal Gokdag</span>
            <span className="widgetSmUserTitle">Computer Engineer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}

import css from "./Card.module.css";
import boy from "../../css/img/boy2x.jpeg";
import sigths from "../../css/img/picture2.png";
import logo from "../../css/img/Logo.png";
import { useState } from "react";

export const Card = ({ users }) => {
  const [tweets, setTweets] = useState([]);

  return (
    <ul className={css.list}>
      {users.map(({ id, avatar, name, followers, tweets }) => {
        return (
          <li key={id} className={css.item}>
            <div className={css.Wrapper}>
              <img src={logo} alt="logo" className={css.logo} />
              <img src={sigths} alt="sights" className={css.sigths} />
              <img src={boy} alt="boy" className={css.boy} />
              <div className={css.line}></div>
              <p className={css.Tweets}>{tweets} TWEETS</p>
              <p className={css.Followers}>{followers} FOLLOWERS</p>
              <button className={css.Button}>Follow</button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

import React from "react";
import classes from "./Table.module.scss";

const Table = ({ title, list }) => {
  return (
    <div className={classes.table}>
      <h1>{`[ ${title} ]`}</h1>
      <ul>
        {list.map((item) => (
          <li key={item}>
            <p>{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Table;

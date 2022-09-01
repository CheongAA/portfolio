import React from "react";
import classes from "./Table.module.scss";

const TableRow = () => {
  return (
    <div className={classes.table__row}>
      <span>2022.8</span>
      <span>Awwwards</span>
      <span>Shink</span>
    </div>
  );
};

const Table = () => {
  return (
    <div className={classes.table}>
      <h3 className={classes.table__title}>[ Awards ]</h3>
      <div>
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
      </div>
    </div>
  );
};

export default Table;

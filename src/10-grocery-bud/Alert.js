import React, { useEffect } from "react";

const Alert = ({ alert, list, resetAlert2Default }) => {
  useEffect(() => {
    const timerID = setTimeout(() => resetAlert2Default(), 2000);
    return () => clearTimeout(timerID);
  }, [list]);

  return (
    <div className={`alert alert-${alert.type}`}>
      <h5>{alert.msg}</h5>;
    </div>
  );
};

export default Alert;

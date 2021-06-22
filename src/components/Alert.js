import React, { useEffect } from 'react';
import { AlertCont } from './Alert.style';
import { useGlobalContext } from '../context';

const AlertType = () => {
  const { newAlert, alertType, data } = useGlobalContext();

  useEffect(() => {
    const timeout = setTimeout(() => {
      newAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [data]);

  return (
    <AlertCont
      className='AlertType__AlertCont'
      action={alertType.type}
      show={alertType.show}
    >
      <p>{alertType.msg}</p>
    </AlertCont>
  );
};

export default AlertType;

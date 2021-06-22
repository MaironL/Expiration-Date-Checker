import React, { useContext, useState } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [modalShow, setModalShow] = useState(false);
  const [data, setData] = useState([]);
  const [editing, setEditing] = useState(false);
  const [editElement, setEditElement] = useState(null);
  const [howMany, setHowMany] = useState(5);
  const [readRows, setReadRows] = useState(true);
  const [alertType, setAlertType] = useState({
    show: false,
    msg: '',
    type: '',
  });
  const [entry, setEntry] = useState({
    products: '',
    price: '',
    expDate: '',
  });

  const newAlert = (show = false, msg = '', type = '') => {
    setAlertType({ show, msg, type });
  };

  const rowsOrAll = (number, bol) => {
    setHowMany(number);
    setReadRows(bol);
  };

  const showModal = () => {
    setModalShow(true);
  };
  const closeModal = () => {
    setModalShow(false);
    setEntry({
      products: '',
      price: '',
      expDate: '',
    });
  };
  const addEntry = () => {
    setModalShow(true);
  };
  const getNewEntry = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setEntry({ ...entry, [name]: value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (entry.products && entry.price && entry.expDate && editing === false) {
      let expDt = new Date(entry.expDate);
      let subtraction = expDt - new Date();
      let statusValue = Math.round(subtraction / (1000 * 60 * 60 * 24));
      let idValue = Date.now() + Math.random();
      const newListItem = {
        ...entry,
        status: statusValue,
        id: idValue,
      };
      setData([...data, newListItem]);
      setEntry({
        products: '',
        price: '',
        expDate: '',
      });
      setModalShow(false);
      newAlert(true, 'New item added', 'success');
    } else if (
      entry.products &&
      entry.price &&
      entry.expDate &&
      editing === true
    ) {
      let expDt = new Date(entry.expDate);
      let subtraction = expDt - new Date();
      let statusValue = Math.round(subtraction / (1000 * 60 * 60 * 24));
      setData(
        data.map((item) => {
          if (item.id === editElement) {
            return { ...item, ...entry, status: statusValue };
          }
          return item;
        })
      );
      setEditing(false);
      setEditElement(null);
      setModalShow(false);
      setEntry({
        products: '',
        price: '',
        expDate: '',
      });
      newAlert(true, 'Value changed', 'edit');
    } else {
      setModalShow(false);
      newAlert(true, 'Error, please try again', 'danger');
    }
  };

  const deleteItem = (id) => {
    setData(data.filter((item) => item.id !== id));
    newAlert(true, 'Item deleted', 'danger');
  };

  const editItem = (id) => {
    setEditing(true);
    setEditElement(id);
    setModalShow(true);
  };

  return (
    <AppContext.Provider
      value={{
        showModal,
        closeModal,
        modalShow,
        getNewEntry,
        entry,
        submitHandler,
        addEntry,
        newAlert,
        alertType,
        data,
        deleteItem,
        editItem,
        rowsOrAll,
        howMany,
        readRows,
      }}
    >
      {/*    */}
      {children}
      {/*    */}
    </AppContext.Provider>
  );
};

//* Custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };

import React, { useState } from 'react';
import Table from './components/Table';
import './App.css';
import Modal from './components/modal';

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [rows, setRows] = useState([
    { page: 'page1', description: 'this the first page', status: 'live' },
    { page: 'page2', description: 'this the second page', status: 'draft' },
    { page: 'page3', description: 'this the third page', status: 'error' },
  ]);
  const [rowToEdit, setRowToEdit] = useState(null);

  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex));
  };

  const handleEditRow = (idx) => {
    setRowToEdit(idx);
    setOpenModal(true);
  };

  const handleSubmit = (newRows) => {
    if (rowToEdit === null) {
      setRows([...rows, newRows]);
    } else {
      setRows(
        rows.map((currRow, idx) => (idx !== rowToEdit ? currRow : newRows)),
      );
    }
  };

  const closeModal = () => {
    setOpenModal(false);
    setRowToEdit(null);
  };

  return (
    <div className="App">
      <Table row={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
      <button
        className="btn"
        type="button" // Added explicit type attribute
        onClick={() => setOpenModal(true)}
      >
        Add
      </button>
      {openModal && (
        <Modal
          closeModal={closeModal}
          onSubmit={handleSubmit}
          defaultValue={rowToEdit !== null ? rows[rowToEdit] : undefined}
        />
      )}
    </div>
  );
}

export default App;

import React from 'react';
import './Table.css';
import PropTypes from 'prop-types';
import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs';

const Table = ({ row, deleteRow, editRow }) => {
  const getStatusLabel = (status) => {
    if (status === 'live') {
      return 'Live';
    } if (status === 'draft') {
      return 'Draft';
    } if (status === 'error') {
      return 'Error';
    }
    return '';
  };

  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            <th>Page</th>
            <th className="expand">Description</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {row.map((item, idx) => (
            <tr key={item.page + item.description + item.status}>
              <td>{item.page}</td>
              <td className="expand">{item.description}</td>
              <td>
                <span className={`label label-${item.status}`}>
                  {getStatusLabel(item.status)}
                </span>
              </td>
              <td>
                <span className="actions">
                  <BsFillTrashFill
                    className="label-btn"
                    onClick={() => deleteRow(idx)}
                  />
                  <BsFillPencilFill onClick={() => editRow(idx)} />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  row: PropTypes.arrayOf(
    PropTypes.shape({
      page: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    }),
  ).isRequired,
  deleteRow: PropTypes.func.isRequired,
  editRow: PropTypes.func.isRequired,
};

export default Table;

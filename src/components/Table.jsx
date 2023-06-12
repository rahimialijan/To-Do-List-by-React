import React from 'react';
import './Table.css';
import PropTypes from 'prop-types';
import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs';

const Table = ({ row, deleteRow, editRow }) => (
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
        {row.map((item, idx) => {
          const changeUppercase = item.status.charAt(0).toUpperCase() + item.status.slice(1);
          return (
            <tr key={item.page + item.description + item.status}>
              <td>{item.page}</td>
              <td className="expand">{item.description}</td>
              <td>
                <span className={`label label-${item.status}`}>
                  {changeUppercase}
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
          );
        })}
      </tbody>
    </table>
  </div>
);

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

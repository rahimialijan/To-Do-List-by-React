import React, { useState } from 'react';
import './modal.css';
import PropTypes from 'prop-types';

const Modal = ({ closeModal, onSubmit, defaultValue }) => {
  const [formDetails, setFormDetails] = useState(
    defaultValue || {
      page: '',
      description: '',
      status: 'live', // Updated default value to match the value of the first option
    },
  );
  const [errorMsg, setErrorMsg] = useState('');

  const validateForm = () => {
    if (formDetails.page && formDetails.description && formDetails.status) {
      setErrorMsg('');
      return true;
    }
    const errorFields = Object.entries(formDetails)
      .filter(([, value]) => !value)
      .map(([key]) => key);
    setErrorMsg(errorFields.join(', '));
    setTimeout(() => {
      setErrorMsg('');
    }, 3000); // Remove error message after 3 seconds
    return false;
  };

  const handleChange = (e) => {
    setFormDetails({
      ...formDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    onSubmit(formDetails);
    closeModal();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      closeModal();
    }
    if (e.key === ' ') {
      e.stopPropagation();
    }
  };

  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === 'modal-container') {
          closeModal();
        }
      }}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
    >
      <div className="modal">
        <form>
          <div className="form-group">
            <label htmlFor="page">
              Page:
              <input
                type="text"
                id="page"
                name="page"
                value={formDetails.page}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="description">
              Description:
              <textarea
                id="description"
                name="description"
                value={formDetails.description}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="status">
              Status:
              <select
                id="status"
                name="status"
                value={formDetails.status}
                onChange={handleChange}
                required
              >
                <option value="live">Live</option>
                <option value="draft">Draft</option>
                <option value="error">Error</option>
              </select>
            </label>
          </div>
          {errorMsg && (
            <div className="error" role="alert">
              {`Please include: ${errorMsg}`}
            </div>
          )}
          <button type="submit" className="btn" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
      <button
        className="overlay-close"
        onClick={closeModal}
        onKeyDown={handleKeyDown}
        type="button"
        aria-label="Close"
      />
    </div>
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  defaultValue: PropTypes.shape({
    page: PropTypes.string,
    description: PropTypes.string,
    status: PropTypes.string,
  }),
};

Modal.defaultProps = {
  defaultValue: null,
};

export default Modal;

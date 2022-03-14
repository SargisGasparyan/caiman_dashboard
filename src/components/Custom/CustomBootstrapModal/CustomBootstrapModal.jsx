import classNames from 'classnames';
import React from 'react';

const CustomBootstrapModal = ({
  title = '', onClose = () => {}, onSave = () => {}, children, saveBtn = true, onCancel = () => {}, className,
}) => {
  const closeHandler = () => {
    onClose();
    onCancel();
  };

  const saveHandler = () => {
    onSave();
  };

  const style = {
    display: 'block',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.767)',
  };

  return (
    <div className="modal" style={style} onClick={closeHandler}>
      <div className={classNames('modal-dialog modal-dialog-centered', className)} role='document' onClick={e => e.stopPropagation()}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={closeHandler}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body" style={{ padding: '10px 0' }}>
            {children}
          </div>
          <div className="modal-footer">
            {saveBtn && <button
              type="button"
              class="btn btn-primary"
              style={{
                backgroundColor: '#5b7077', border: 'none', outline: 'none',
              }}
              onClick={saveHandler}
              >Save</button>}
            <button
              type="button"
              className="btn btn-secondary"
              style={{
                backgroundColor: 'rgb(224, 225, 226)',
                color:
                 '#5b7077',
                border: 'none',
                outline: 'none',
              }}
              data-bs-dismiss="modal"
              onClick={closeHandler}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomBootstrapModal;

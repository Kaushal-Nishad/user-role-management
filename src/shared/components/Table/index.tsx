import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

interface Column {
  header: string;
  accessor: string;
}

interface User {
  username: string; 
  role: string;    
  [key: string]: any; 
}

interface TableProps {
  users: User[];            
  columns: Column[];        
  onEdit: (username: string) => void; 
  onDelete: (username: string) => void; 
}

const Table: React.FC<TableProps> = ({ users, columns, onEdit, onDelete }) => {
  return (
    <div className="table-responsive">
      <table className="table table-bordered table-hover text-center">
        <thead className="table-dark">
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column.header}</th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.username}>
              {columns.map(column => (
                <td key={column.accessor}>{user[column.accessor]}</td>
              ))}
              <td>
                <button className="btn btn-sm btn-warning mx-1" onClick={() => onEdit(user.username)}>
                  <FontAwesomeIcon icon={faEdit} /> Edit
                </button>
                <button className="btn btn-sm btn-danger mx-1" onClick={() => onDelete(user.username)}>
                  <FontAwesomeIcon icon={faTrash} /> Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faExclamationCircle, faFileInvoiceDollar, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Header } from '../../shared/components';

const Invoices: React.FC = () => {
  return (
    <>
      <Header />
      <div className="container my-4">
        <div className="row mb-3 align-items-center">
          <div className="col-md-8">
            <h1 className='fs-3'>Invoices as of 25/07</h1>
          </div>
          <div className="col-md-4">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search Invoices" />
              <button className="btn btn-primary" type="button">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          </div>
        </div>
        <div className="row mb-4 text-center">
          <div className="col-md-4 mb-3">
            <div className="card shadow h-100">
              <div className="card-body">
                <FontAwesomeIcon icon={faCheckCircle} size="3x" className="text-success mb-3" />
                <h3>Paid Invoices</h3>
                <p className="display-5">15</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card shadow h-100">
              <div className="card-body">
                <FontAwesomeIcon icon={faExclamationCircle} size="3x" className="text-warning mb-3" />
                <h3>Due Invoices</h3>
                <p className="display-5">13</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card shadow h-100">
              <div className="card-body">
                <FontAwesomeIcon icon={faFileInvoiceDollar} size="3x" className="text-info mb-3" />
                <h3>Total Invoices</h3>
                <p className="display-5">28</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card shadow">
          <div className="card-body">
            <h3 className="mb-4">Invoice Details</h3>
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col">Invoice #</th>
                  <th scope="col">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>ABC123</td>
                  <td>$26,283</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Invoices;

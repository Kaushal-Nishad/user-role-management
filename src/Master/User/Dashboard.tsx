import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faBell, faFileInvoice, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Line, Pie } from 'react-chartjs-2';
import { Header } from '../../shared/components';

const lineData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Sales',
      data: [1200, 1900, 3000, 2500, 3200, 4000],
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      fill: true,
    },
  ],
};

const pieData = {
  labels: ['Product A', 'Product B', 'Product C'],
  datasets: [
    {
      label: 'Sales Distribution',
      data: [300, 500, 200],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    },
  ],
};

const UserDashboard: React.FC = () => {
  return (
    <>
      <Header />
      <div className="container my-4">
        <div className="row mb-3 align-items-center">
          <div className="col-md-8">
            <h1 className='fs-3'>Hey, Username</h1>
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
        <div className="row mb-4">
          <div className="col-md-6 mb-3">
            <div className="card text-center shadow h-100">
              <div className="card-body">
                <FontAwesomeIcon icon={faChartLine} size="3x" className="text-primary mb-3" />
                <h3>Sales</h3>
                <div style={{ width: '100%', height: '200px' }}>
                  <Line data={lineData} options={{ maintainAspectRatio: false }} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="card text-center shadow h-100">
              <div className="card-body">
                <FontAwesomeIcon icon={faBell} size="3x" className="text-warning mb-3" />
                <h3>Notifications</h3>
                <p className="text-muted">No new notifications</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card shadow">
          <div className="card-header bg-primary text-white">
            <FontAwesomeIcon icon={faFileInvoice} /> Recently Paid Invoices
          </div>
          <div className="table-responsive">
            <table className="table table-bordered table-hover mb-0 text-center">
              <thead className="table-light">
                <tr>
                  <th>Invoice #</th>
                  <th>Date</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>ABC123</td>
                  <td>15:23</td>
                  <td>$15,282</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;

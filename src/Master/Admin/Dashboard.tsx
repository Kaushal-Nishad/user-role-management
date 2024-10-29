import React from 'react';
import { Pie, Line } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faDollarSign, faUser } from '@fortawesome/free-solid-svg-icons';
import { Header } from '../../shared/components';

ChartJS.register(ArcElement, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement);

const AdminDashboard: React.FC = () => {
  const pieData = {
    // labels: ['Active Users', 'Inactive Users', 'New Users'],
    datasets: [
      {
        data: [60, 30, 10],
        backgroundColor: ['#007bff', '#28a745', '#ffc107'],
      },
    ],
  };

  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Sales',
        data: [12000, 15000, 8000, 18000, 13000, 22000, 15000],
        fill: false,
        backgroundColor: '#007bff',
        borderColor: '#007bff',
        tension: 0.4,
      },
    ],
  };

  return (
    <>
    <Header />
      <div className="container my-4">
        {/* <h1 className="text-center mb-4">Admin Dashboard</h1> */}
        <div className="row mb-4">
          <div className="col-lg-4 col-md-6 mb-3">
            <div className="card text-center shadow h-100">
              <div className="card-body">
                <FontAwesomeIcon icon={faUser} size="3x" className="text-primary mb-3" />
                <h3>User Distribution</h3>
                <div style={{ width: '200px', height: '200px', margin: '0 auto' }}>
                <Pie data={pieData} width={200} height={200} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-3">
            <div className="card text-center shadow h-100">
              <div className="card-body">
                <FontAwesomeIcon icon={faDollarSign} size="3x" className="text-success mb-3" />
                <h3>Today's Sale</h3>
                <p className="display-5 text-primary">$15,000</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-3">
            <div className="card text-center shadow h-100">
              <div className="card-body">
                <FontAwesomeIcon icon={faChartLine} size="3x" className="text-info mb-3" />
                <h3>Total Visitors</h3>
                <p className="display-5 text-primary">12,000</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-4 shadow">
          <div className="card-body">
            <h3>Sales Report</h3>
            <button className="btn btn-primary mb-3">Download PDF</button>
            <Line data={lineData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;

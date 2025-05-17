import { Outlet } from 'react-router';

const Dashboard = () => {
  return (
    <div className="bg-amber-100">
      <Outlet />
    </div>
  );
};

export default Dashboard;

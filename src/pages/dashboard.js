import Footer from '@/components/UI/Footer';
import Topbar from '@/components/UI/Topbar';
import AdminDashboard from '@/components/UI/AdminDashboard';
import React from 'react';

const Dashboard = () => {

    
    return (
        <div>
           <Topbar />
           <AdminDashboard />
           <Footer />
        </div>
    );
};

export default Dashboard;
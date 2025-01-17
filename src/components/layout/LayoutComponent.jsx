import React, { useState, useEffect } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { Link, Outlet } from 'react-router-dom';
import 'primereact/resources/themes/saga-blue/theme.css'; 
import 'primereact/resources/primereact.min.css'; 
import 'primeicons/primeicons.css'; 
import './LayoutComponent.scss';

export default function LayoutComponent() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 467);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 467);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="layout-container">
      <Sidebar
        visible={isSidebarVisible}
        onHide={() => setIsSidebarVisible(false)}
        position="right" 
        style={{ width: isMobile ? '80%' : '250px' }}
      >
        <h3 className="sidebar-title">Navigation</h3>
        <div className="sidebar-links">
          <Link to="/product" className="sidebar-link" onClick={() => setIsSidebarVisible(false)}>
            <i className="pi pi-box" style={{ marginRight: '8px' }}></i> Product
          </Link>
          <Link to="/user" className="sidebar-link" onClick={() => setIsSidebarVisible(false)}>
            <i className="pi pi-user" style={{ marginRight: '8px' }}></i> User
          </Link>
        </div>
      </Sidebar>

   
      <Button
        icon="pi pi-bars"
        className="p-button-text p-button-plain"
        style={{
          position: 'fixed',
          top: '16px',
          right: '16px', 
          zIndex: 1001,
        }}
        onClick={() => setIsSidebarVisible(true)}
      />
      <div
        className="content-container"
      >
        <Outlet />
      </div>
    </div>
  );
}

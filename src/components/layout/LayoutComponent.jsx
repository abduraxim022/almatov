
import { Link, Outlet } from 'react-router-dom';


export default function LayoutComponent() {


  return (
    <div className="layout-container">
        <Outlet />
      </div>
    
  );
}

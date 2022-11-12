import { Outlet ,Link, NavLink} from 'react-router-dom';
import Frame from '../components/Frame';

export default function Layout() {
    return (
      <>
        <div id="sidebar">
          <nav>
            <ul>
              <li>
                <NavLink 
                className={({ isActive, isPending }) =>
                isActive
                  ? "active"
                  : isPending
                  ? "pending"
                  : ""
              }
                to={`patients`}>Patients</NavLink> 
              </li>
              <li>
              <NavLink 
              className={({ isActive, isPending }) =>
              isActive
                ? "active"
                : isPending
                ? "pending"
                : ""
            }
              to={`history`}>History</NavLink>  

              </li>
            </ul>
          </nav>
        </div>
        <div id="detail">
           <Frame>
             <Outlet/>
           </Frame>
        </div>
      </>
    );
  }
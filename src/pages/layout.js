import { NavLink, Outlet } from "react-router-dom";

export default function Layout(){
    return <>
        <div id="sidebar">
            <nav>
                <ul>
                    {/* Patients */}
                    <li>
                        <NavLink 
                        className={({isActive, isPending})=>{
                            return isActive?"active":isPending?"pending":""
                        }}
                        to={'patients'}>
                            Patients
                        </NavLink>
                    </li>
                    {/* History */}
                    <li>
                    <NavLink 
                     className={({isActive, isPending})=>{
                        return isActive?"active":isPending?"pending":""
                    }}
                    to={'history'}>
                            History
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
        <div id="detiails">
            <Outlet/>
        </div>
    </>
}
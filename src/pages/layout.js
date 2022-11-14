import { NavLink, Outlet } from "react-router-dom";
import ThemeContext from "../contexts/ThemeContext";
import { useContext } from "react";
import { Sidebar } from "../components/sidebar";
import { Switcher } from "../components/Switcher";
export default function Layout(){
    const context = useContext(ThemeContext);
    console.log('c',context)
    const color = context.settings.themeValue.background;
    return <>
        <header className={`h-16 ${color}`}>
            <Switcher/>
        </header>
        <div className="flex flex-row">
            <Sidebar/>
            <div id="detiails" className="w-full p-8">
                <Outlet/>
            </div>
        </div>
    </>
}
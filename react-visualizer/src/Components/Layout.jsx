import { Navbar } from "./Navbar";
import { Outlet } from "react-router-dom"

export function Layout() {
    return (
        <div>
            <header style={{ padding: '20px', textAlign: 'center', color: '#fff' }}>
            <h1>Algorithm Visualizer</h1>
            </header>
            <Navbar/>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}
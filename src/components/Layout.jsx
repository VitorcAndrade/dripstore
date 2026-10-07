import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import { Outlet } from "react-router"

function Layout() {
    return (
        <>
            <div className="flex flex-col items-center px-[10%]">
                <Header />
                <Outlet />
                <Footer />
            </div>
        </>
    )
}

export default Layout
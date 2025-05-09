import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

function Layout({ children }) {
    return (<div>
        <Navbar></Navbar>
        <div className="main-content min-h-screen">
            {children}
        </div>
        <Footer></Footer>
    </div>);
}

export default Layout;
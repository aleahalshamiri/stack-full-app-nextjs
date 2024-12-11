import Navbar from "../../components/Navbar";



interface layoutProps {
    children: React.ReactNode
}

const Layout = ({ children }: Readonly<layoutProps>) => {
    return (
        <main className='font-work-snas '>
            <Navbar />
            {children}
        </main>
    );
}

export default Layout;

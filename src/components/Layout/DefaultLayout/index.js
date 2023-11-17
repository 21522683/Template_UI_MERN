import Header from './Header';
import Footer from './Footer';

function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <div style={{ paddingTop: '68px' }}>{children}</div>
            <Footer />
        </>
    );
}

export default DefaultLayout;

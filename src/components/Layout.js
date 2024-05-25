import { Outlet } from 'react-router-dom'
import ScrollToTop from 'react-scroll-to-top'

import Header from './Header'
import Footer from '../components/Footer'

const Layout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
            <ScrollToTop
                smooth
                color='white'
                style={{ background: 'red', paddingLeft: '6px' }}
            />
        </div>
    )
}

export default Layout

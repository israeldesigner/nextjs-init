import * as React from 'react'
import Footer from './footer'
import Header from './header'
import { MainContent } from './MainContent'

const Layout: React.FunctionComponent = (props) =>{
    return (
        <div>
            <Header />
            <MainContent>
            </MainContent>
            <Footer />
        </div>
    )
}

export default Layout;
import classes from './MainContent.module.scss';
import BannerMain  from '../banner/'
import About from '../about';
import FaqSection from '../faq';

export const MainContent: React.FunctionComponent = (props) => {
    return(
        <main className={classes.root}>
            <BannerMain />
            <About />
            <FaqSection />
        </main>
    )
}
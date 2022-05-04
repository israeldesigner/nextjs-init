import classes from './MainContent.module.scss';
import BannerMain  from '../banner/'
import About from '../about';

export const MainContent: React.FunctionComponent = (props) => {
    return(
        <main className={classes.root}>
            <BannerMain />
            <About />
        </main>
    )
}
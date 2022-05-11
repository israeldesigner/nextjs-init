import classes from './MainContent.module.scss';
import BannerMain  from '../banner/'
import About from '../about';
import FaqSection from '../faq';
import Step from '../step';
import Pontos from '../pontos';
import Mapa from '../mapa';
import Contato from '../contato';

export const MainContent: React.FunctionComponent = (props) => {
    return(
        <main className={classes.root}>
            <BannerMain />
            <About />
            <Step />
            <Mapa />
            <Pontos />
            <FaqSection />
            <Contato />
        </main>
    )
}
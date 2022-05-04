/* eslint-disable @next/next/no-img-element */
import { Carousel } from 'react-bootstrap'
import Image from 'next/image';
import BannerMain from '../../public/bgMain.jpg';
import BannerComplete from '../../public/bgOriginal.jpg';
import classes from './Banner.module.scss';

const Banner: React.FunctionComponent = (props) =>{
    console.log(props);
    return(
        <section>
            <Carousel indicators={false} controls={false}>
                {/* <Carousel.Item className={`${classes.root}`}>
                    <Image 
                        src={BannerMain}
                        layout='responsive'
                        alt="Banner principal"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item> */}
                <Carousel.Item className={`${classes.root}`}>
                    <Image 
                        src={BannerComplete}
                        layout="responsive"
                        alt="banner 2 completo"
                    />                  
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </section>
    )

}

export default Banner
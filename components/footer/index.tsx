import { Container } from 'react-bootstrap'
import classes from './Footer.module.scss'

console.log(classes);

const Footer:React.FunctionComponent = (props) =>{
    return(
        <footer className={`teste-classe ${classes.root}`}>
            <Container className='text-center'>
            Copyright © marvelNext
            </Container>
        </footer>
    )
}

export default Footer
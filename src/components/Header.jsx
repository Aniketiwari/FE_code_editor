
import {AppBar, Toolbar, styled } from '@mui/material';
//import img1 from './images/logo.png';


const Container = styled(AppBar)`
background: #060606;
position: static;
border-bottom: 1px solid #2f2f2f;
height: 9vh;
`;


const Header = () => {

   

    return (
         <Container>
            <Toolbar>
                 <img src="./Logocc.gif" alt="" style={{ width: 78}} />
            </Toolbar>
         </Container>
    )
}

export default Header;
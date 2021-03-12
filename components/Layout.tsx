import Navbar from './Navbar'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <Box mt={14}>
                <Container maxWidth="lg">
                    { children }
                </Container>
            </Box>
        </>
    );
}

export default Layout;

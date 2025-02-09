import Box from "../UI/box/Box";
import './URLForm.css'

function URLFormContainer ({ children }) {
    return(
        <Box className={'form contain'}>
            {children}
        </Box>
    )
}

export default URLFormContainer;
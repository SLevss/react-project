import { authActions } from "../../redux/authSlice";
import {useDispatch} from 'react-redux'
import { Box, Button } from "@mui/material";
export const Logout: React.FC = ()=>{
    const dispatch = useDispatch();
    return <Box>
        <Button onClick={() => dispatch(authActions.logout())}>Logout</Button>
    </Box>
}
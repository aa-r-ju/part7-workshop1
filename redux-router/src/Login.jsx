import { useNavigate } from "react-router-dom"
import {TextField,Button} from "@mui/material";


const Login = ({setUser}) => {
    const navigate = useNavigate()
    const onSubmit = (event) => {
        event.preventDefault()
       setUser(event.target.username.value)
       navigate('/')
    }


    return(
        <>
        
        <h2>login</h2>
      <form onSubmit={onSubmit}>
        <div>
          <TextField label="username" name="username"/>
        </div>
        <div>
          <Button variant="contained" color="primary" type="submit">
            login
          </Button>
        </div>
      </form>
        </>
    )
}

export default Login
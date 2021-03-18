

import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
function Register() {
    return (
        <div id="register"><h1>
            Register Here
       </h1>
            <div style={{ display: "grid", justifyContent: 'center', flexDirection: 'column', flex: 1 }}>
                <TextField id="outlined-basic" label="Name" variant="outlined" /><br /><br />
                <TextField id="outlined-basic" label="Mobile No." variant="outlined" /><br /><br />
                <TextField id="outlined-basic" label="Email Id" variant="outlined" /><br /><br />
                <TextField id="outlined-basic" label="Write Here" variant="outlined" /><br /><br />
                <Button variant="contained" color="primary">
                    Submit
</Button>

            </div>





        </div>
    )
}

export default Register;

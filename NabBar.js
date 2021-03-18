

import Contact from "./FeedBack"
import { Link, Route, Switch } from 'react-router-dom';
import Home from "./Home";
import Register from "./Register";
import Feature from "./Explore";
function NabBar() {
    return (

        <div style={{
            overflow: "hidden",
            backgroundColor: '#dfe4ea',
            position: "sticky",
            top: 0,
            width: '100%',
            justifyContent: 'center',
            display: 'flex',
           zIndex:100
            
            
            

        }}>
            <a style={{
                float: "left",
                display: "block",
                color: "#f2f2f2",
                textAlign: "center",
                padding: 0,
                textDecoration: "none"
            }} href="https://www.canva.com/link?target=http%3A%2F%2Ftoptrove.org&design=DAEYpnx22nc">
                <div>
                    <img src="http://toptrove.org/wp-content/uploads/2021/02/WhatsApp_Image_2021-02-24_at_00.06.09-removebg-preview-e1614135491405-120x122.png" style={{ width: 90, height: 90, marginLeft: -10, marginTop: 0 }} title='TopTrove' />

                </div></a>
            <div style={{ justifyContent: 'center', alignSelf: 'center', display: "flex", flexDirection: 'row', }}>
                <div  onClick={() => { document.getElementById("home").scrollIntoView() }} style={{ alignContent: 'center', display: 'flex', marginLeft: 450 ,}} title="HOME">
                    <Link to='/' style={{ textDecoration: 'none', fontFamily: 'bold', fontSize: 20, }}>HOME</Link>


                </div>
                <div  onClick={() => { document.getElementById("features").scrollIntoView() }} style={{ marginLeft: 80 }} title="EXPLORE">
                    <Link style={{ textDecoration: 'none', fontFamily: 'bold', fontSize: 20, }}>EXPLORE</Link>
                </div>
                <div  style={{ marginLeft: 80 }} title="REGISTER">
                {/* onClick={() => { document.getElementById("register").scrollIntoView() }} */}
                    <Link  style={{ textDecoration: 'none', fontFamily: 'bold', fontSize: 20, }} >
                        REGISTER
                        </Link>
                </div>
                <div onClick={() => { document.getElementById("feedback").scrollIntoView() }} style={{ marginLeft: 80 }} title="FEEDBACK">
                    <Link style={{ textDecoration: 'none', fontFamily: 'bold', fontSize: 20, }}> FEEDBACK</Link>
                </div>
                
                <div onClick={() => { document.getElementById("about").scrollIntoView() }} style={{ marginLeft: 80 }} title="ABOUT">
                    <Link  style={{ textDecoration: 'none', fontSize: 20, fontFamily: 'bold' }}> ABOUT</Link>
                </div>
            </div>
        </div>       // {/* <Switch>

        //     <Route exact path='/features' component={Feature} />
        //     <Route exact path='/register' component={Register} />
        //     <Route exact path='/feedback' component={Feature} />
        // </Switch> */}


    )
}

export default NabBar

import { Button, Link, Paper } from '@material-ui/core';
import React from 'react'
import { useHistory } from 'react-router';
import Dashboard from './Dashboard';
import HomeIcon from '@material-ui/icons/Home';
function MoreEx() {

    const history=useHistory()
    const  home=()=>{
 history.push("/")
    }
    const  enrol=()=>{
      history.push("/Enroll")
         }
    return (
        
        <div id="features" style={{ backgroundColor: "#130f40",width:"auto",height:"auto",marginTop:0 }}>

<div>
<a style={{
                float: "left",
                display: "block",
                color: "#f2f2f2",
                textAlign: "",
                padding: 0,
                textDecoration: "none"
            }} href="https://www.canva.com/link?target=http%3A%2F%2Ftoptrove.org&design=DAEYpnx22nc">
                <div style={{marginLeft:0,backgroundColor:""}}>
                    <img src="http://toptrove.org/wp-content/uploads/2021/02/WhatsApp_Image_2021-02-24_at_00.06.09-removebg-preview-e1614135491405-120x122.png" style={{ width: 100, height: 100, marginLeft: 150,marginRight:250, marginTop: 0 }} title='TopTrove' />
                </div></a>
                <div  onClick={() => { home()}} title="Home Page">
               <HomeIcon color="primary" style={{fontSize:100,display:'flex',flexDirection:'row',marginLeft:1200,marginTop:0}} />
               </div>
                <h1 style={{ display: '', flexDirection: '', color:'white',backgroundColor:'',marginLeft:520,marginRight:500,marginTop:-50,fontFamily: 'Cormorant Garamond', }}>
            MORE COURSES
              </h1>

</div>

                     <div style={{ display: "flex", flexDirection: 'row', }}>
            <Paper style={{ padding: 20, width: 400, height: 440, margin: 30 }}>
                    <img src="https://cyblancetechnologies.files.wordpress.com/2020/07/web-development.jpg" style={{ width: 400, height: 200 }} />
                    <h3> FullStack Web Development</h3>
                    <p>
                    Learn to create and design websites 
Gain expertise in front end and back end development. Become a web developer and kickstart your career.<br />
<b>Batches starting from 20<sup>Th</sup> March</b>
               </p>
               <Button variant="contained" color="primary" style={{padding:12,margin:30,marginLeft:130}}>
  Enroll Now
</Button>
                </Paper>
                <Paper style={{ padding: 20, width: 400, height: 440, margin: 30, justifyContent: 'center', alignContent: 'center', alignSelf: 'center' }}>
                    <img src="https://miro.medium.com/max/4480/1*-EFdnPuVrwUOmYte11v0OA.png" style={{ width: 400, height: 200 }} />
                    <h3>Data Structure</h3>
                    <p>
                    Master data structure concepts. Learn strategic implementation through programming and   take a leap in your career.<br />
                  <b>Batches starting  from 20<sup>Th</sup> March.</b>
               </p> <Button variant="contained" color="primary" style={{padding:12,margin:30,marginLeft:130}}>
  Enroll Now
</Button>
                </Paper>
                <Paper style={{ padding: 20, width: 400, height: 450, margin: 30 }}>
                    <img src="https://img.lovepik.com/photo/50091/0276.jpg_wh860.jpg" style={{ width: 400, height: 200 ,}} />
                    <h3>Artificial Intelligence</h3>
                    <p>Learn the most important concepts of AI. Understand classification, clustering, and regression. Master your programming skills and add an achievement on your resume.
                       <br /> <b>Batches starting from 30<sup>Th</sup> March</b>
               </p>
               <Button variant="contained" color="primary" style={{padding:12,margin:20,marginLeft:150}} onClick={() => { enrol()}} >
  Enroll Now
</Button>
                </Paper>
                  <br />
                
                
            </div><br /><br />
            {/* second line */}
            <div style={{display:'flex'}}>
            <Paper style={{ padding: 20, width: 400, height: 440, margin: 30 }}>
                    <img src="https://cyblancetechnologies.files.wordpress.com/2020/07/web-development.jpg" style={{ width: 400, height: 200 }} />
                    <h3> FullStack Web Development</h3>
                    <p>
                    Learn to create and design websites 
Gain expertise in front end and back end development. Become a web developer and kickstart your career.<br />
<b>Batches starting from 20<sup>Th</sup> March</b>
               </p>
               <Button variant="contained" color="primary" style={{padding:12,margin:30,marginLeft:130}}>
  Enroll Now
</Button>
                </Paper>
                <Paper style={{ padding: 20, width: 400, height: 440, margin: 30, justifyContent: 'center', alignContent: 'center', alignSelf: 'center' }}>
                    <img src="https://miro.medium.com/max/4480/1*-EFdnPuVrwUOmYte11v0OA.png" style={{ width: 400, height: 200 }} />
                    <h3>Data Structure</h3>
                    <p>
                    Master data structure concepts. Learn strategic implementation through programming and   take a leap in your career.<br />
                  <b>Batches starting  from 20<sup>Th</sup> March.</b>
               </p> <Button variant="contained" color="primary" style={{padding:12,margin:30,marginLeft:130}}>
  Enroll Now
</Button>
                </Paper>
                <Paper style={{ padding: 20, width: 400, height: 450, margin: 30 }}>
                    <img src="https://img.lovepik.com/photo/50091/0276.jpg_wh860.jpg" style={{ width: 400, height: 200 ,}} />
                    <h3>Artificial Intelligence</h3>
                    <p>Learn the most important concepts of AI. Understand classification, clustering, and regression. Master your programming skills and add an achievement on your resume.
                       <br /> <b>Batches starting from 30<sup>Th</sup> March</b>
               </p>
               <Button variant="contained" color="primary" style={{padding:12,margin:20,marginLeft:150}} onClick={() => { enrol()}} >
  Enroll Now
</Button>
                </Paper>
              
            </div>

        </div>
    )
}

export default MoreEx;

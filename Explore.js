import { Button, Paper } from '@material-ui/core'
import React from 'react'
import { Link, Redirect, useHistory } from 'react-router-dom'

function Explore() {
 const history=useHistory()
    const  enrol=()=>{
 history.push("/enroll")
    }
    return (
        <div id="features" style={{ backgroundColor: "#1A5276",width:"100%",height:650,marginTop:-22 }}>
            <h1 style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <Link to="moreex" style={{textDecoration:"none",color:'wheat'}}>
            EXPLORE
            </Link>
            </h1>
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
               
            </div>
            <div style={{display:"flex",flexDirection:'col',marginLeft:'90%',color:'black',alignItems:'center',marginTop:-20,backgroundColor:"white",
            borderRadius:50,
            height:30,width:120,padding:3
            }}><h4 style={{marginLeft:10}}>
            <Link to="moreex" style={{textDecoration:"none",color:'black'}}>More Courses</Link>
            </h4></div> 
        </div>
    )
}

export default Explore;

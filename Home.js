
import React from 'react'

function Home() {
    return (
        <div id="home" style={{marginTop:0 , backgroundImage: `url("https://www.comstar.com.pk/assets/files/blog/future_technology_prospects.png" ) ` ,backgroundRepeat: "no-repeat",height:655,width:"100%",backgroundSize:" 100% 100%"}}>
          
      
         <div style={{ justifyContent: 'center', alignContent: 'center', msAlignSelf: 'center', display: 'flex' }}>
             <h1 style={{ fontSize: 100, color: "white" }}> PEER POWER<br /> <span style={{ display: 'flex', justifyContent: 'center' }}>CLUB</span></h1>
    </div>
         <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ backgroundColor: "rgb(52,150,150)", width: 700, height: 130, display: 'flex', flexDirection: 'row', justifyContent: 'center',padding:2 }}>
             <h2>
             On a mission to upskill millions of students by introducing a new way of learning with peers .
            </h2>

             </div>
         </div>
 

        </div>
    )
}

export default Home

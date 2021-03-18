
import { Link, Route, Switch } from 'react-router-dom';
import Home from "./Home";
import Register from "./Register";
import Feature from "./Explore";

function FeedBack() {
    return (
        <div id="feedback">
        
            <div style={{backgroundImage: `url(" https://emerging-europe.com/wp-content/uploads/2018/05/bigstock-fintech-icon-on-abstract-fina-209216539.jpg" ) ` ,backgroundRepeat:'no-repeat', backgroundSize:" 100% 100%",height:600,width:""}}>
            <h1 style={{display:'flex',flexDirection:'row',justifyContent:'center',color:'red'}}>FEEDBACK</h1>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'center' ,color:'wheat'}}>
             
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScmCVQh5cyCIKJMea5-f6GzqRN6vuBIJtVBJMi0XFcjKr4sxA/viewform?embedded=true" width="840" height="501" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                </div>
            </div>
        </div>
    )
}

export default FeedBack;

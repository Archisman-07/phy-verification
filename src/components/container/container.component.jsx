import FirstPage from "../first-page/first-page.component";
import './container.styles.scss';
import ButtonAppBar from "../navbar/navbar.component";


const Container= ()=>{
    return(
        <div className="container">
            <div className="container-envelope">
            <ButtonAppBar/>
            {/* <div className="container-envelope-header">
                <div className="container-top-left">Semester Registration</div>
                <div className="container-top-right">
                    <div className="pages">Pre Registration(Admission No.)</div>
                    <div className="pages">Pre Registration</div>
                    <div className="pages">Final Registration</div>
                </div>
            </div> */}
            </div>
            <div className="container-envelope-content">
                <FirstPage/>
            </div>
            
        </div>
    )
}

export default Container;
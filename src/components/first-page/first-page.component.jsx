import FirstPageContent from "../first-page-content/first-page-content.component";
import './first-page.styles.scss';

const FirstPage=()=>{
    return (
        <div>
            <div className="first-page-header">
                Pre Registration (Admission No.)
            </div>
            <div className="first-page-content-envelope">
                <FirstPageContent className="first-page-content"/>
            </div>
        </div>
    )
}
export default FirstPage;
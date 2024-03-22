import './basic-details.styles.scss';
import logo from '../../assets/logo.jpeg';

const BasicDetails =(props) =>{

    const {sessionYear,session,admissionNumber,name,department,programme,branch} = props;
    return(
        <div className="basic-details-container">
            <div className="details-header">
                <div className="logo-container">
                    <img src={logo} alt="Logo" className='logo'/>
                </div>
                <div className="header">
                    <div className="header-content">
                        <div className='college-name'>Indian Institute of Technology(Indian School of Mines)</div>
                        <div className="subheader">Semester Registration Form {sessionYear}-{session}</div>
                    </div>
                </div>
            </div>
            <div className="details">
                <div className="detail">Admission No. : {admissionNumber}</div>
                <div className="detail">Name : {name}</div>
                <div className="detail">Department : {department}</div>
                <div className="detail">Programme : {programme}</div>
                <div className="detail">Branch : {branch}</div>
            </div>
        </div>
    )
}
 export default BasicDetails;
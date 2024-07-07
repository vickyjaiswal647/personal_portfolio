import './Experience.css'
import TcsLogo from '../../assets/TCS-iON-Logo.png'

const Experince = () => {
  return (
    <>
      <div id="experience">
        <h1 className="section-heading mb75px text-blue-800 hover:text-orange-600">
          <span className="WE">
            <i className="fas fa-briefcase"></i>
          </span>
          <span className="WE text-4xl font-bold"> Work Experience </span>
        </h1>
      
        <div className="timeline">
        
          <div className="timeline-box right ">
            <div className="timeline-container">
              <div className="timeline-logo">
                <img src={TcsLogo}/>
              </div>
              <h3 className="experience-designation  m0 m-blue"> Systems Engineer </h3>
              <h4 className="experience-company-name TCS"> Tata Consultancy Services </h4>
              <h5 className="experience-duration m0"> Nov 2023 - Present </h5>
              <p className="experience-description text-align-justify">
                • Working on a framework similar to Spring Boot, which uses HTML, CSS, JavaScript and jQuery
                for the front-end and Java for the back-end. <br/>
                • Collaborating with the TCS iON Core team to create solutions that will benefit more than 1000
                businesses.						
              </p>
            </div>
          </div>

          <div className="timeline-box">
            <div>
              <div className="timeline-logo">
                <img src={TcsLogo}/>
              </div>
              <h3 className="experience-designation  m0 m-blue"> <span className="TA">Assistant System Engineer</span>  </h3>
              <h4 className="experience-company-name"> Tata Consultancy Services </h4>
              <h5 className="experience-duration m0"> July 2023 - Oct 2023 </h5>

              <p className="experience-description text-align-justify">
                • Being the part of B2B Core Platform module, have worked on the core features of the B2B Digital Hub application. <br/>
                • Developed the usecase Raise ticket from scratch which involves third party CRM API intergration.
              </p>
            </div>
          </div>

          <div className="timeline-box">
            <div>
              <div className="timeline-logo">
                <img src={TcsLogo}/>
              </div>
              <h3 className="experience-designation  m0 m-blue"> <span className="TA">Assistant System Engineer - Trainee</span>  </h3>
              <h4 className="experience-company-name"> Tata Consultancy Services </h4>
              <h5 className="experience-duration m0"> July 2022 - June 2023 </h5>

              <p className="experience-description text-align-justify">
                • Worked in an Agile enviroment and responsible for developing and testing the URLS application under the TCS iON URLS module. <br/>
                • Developed server-side redirection of short URLs for TCS iON URLs application. <br/><br/><br/><br/>
              </p>
            </div>
          </div>
          
          <div className="timeline-divider work-timeline-divider-height">
            <div className="timeline-traveller">
              <div>
                <i className="fas fa-plane"></i>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Experince;

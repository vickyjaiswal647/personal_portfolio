// import './Education.css';
import PietLogo from '../../assets/piet-logo.png';
import CbseLogo from '../../assets/cbse.jpg';

const Education2 = () => {
  return (
    <>
      <div id="education">
        <h1 className="section-heading mb75px mt-10 text-blue-800 hover:text-orange-600">
          <span className="WE">
            <i className="fas fa-graduation-cap"></i>
          </span>
          <span className="WE text-4xl font-bold"> Education </span>
        </h1>

        <div className="timeline">
          <div className="timeline-box left ">
            <div className="timeline-container">
              <div className="timeline-logo mait">
                <img src={PietLogo} alt="PIET Logo" />
              </div>
              <h3 className="experience-designation m0 m-blue"> B.Tech. CSE </h3>
              <h4 className="experience-company-name">
                Panipat Institute Of Engineering & Technology
              </h4>
              <h5 className="experience-duration m0"> Aug 2018 - Aug 2022 </h5>
              <p className="experience-description text-align-justify">
                Bachelor Of Technology in Computer Science & Engineering
                Department from Panipat Institute Of Engineering & Technology.
                Computer Science Engineering (CSE) encompasses a variety of topics 
                that relates to computation, like analysis of algorithms, programming 
                languages, program design, software, and computer hardware.
              </p>
            </div>
          </div>

          <div className="timeline-box right">
            <div className="timeline-container">
              <div className="timeline-logo cbse">
                <img src={CbseLogo} alt="CBSE Logo" />
              </div>
              <h3 className="experience-designation m0 m-blue">
                Class XII
              </h3>
              <h4 className="experience-company-name"> CBSE </h4>
              <h5 className="experience-duration m0"> Feb 2016 - Feb 2017 </h5>
              <p className="experience-description text-align-right">
                Non-medical student, secured a net aggregate of 76% in class
                XII
              </p>
            </div>
          </div>

          <div className="timeline-box left">
            <div className="timeline-container">
              <div className="timeline-logo cbse">
                <img src={CbseLogo} alt="CBSE Logo" />
              </div>
              <h3 className="experience-designation m0 m-blue">
                Class X
              </h3>
              <h4 className="experience-company-name"> CBSE </h4>
              <h5 className="experience-duration m0"> Feb 2014 - Feb 2015 </h5>
              <p className="experience-description text-align-right">
                Secured a net CGPA of 10 in class X
              </p>
            </div>
          </div>

          <div className="timeline-divider">
            <div className="timeline-traveller">
              <div>
                <i className="fas fa-car-side"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education2;

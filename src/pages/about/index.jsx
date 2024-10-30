import '@/pages/index.scss';
import '@/pages/about/index.scss';

function About() {
  return (
    <div className="about page">
      <div className="education">
        <div className="section-title">Education</div>
        <div className="university">University of Toronto</div>
        <div className="degree">BASc in Industrial Engineering</div>
        <div className="education-years">2014-2019</div>
      </div>
      <div className="work-experiences">
        <div className="section-title">Experience</div>
        <div className="work-experience">
          <div className="job-years">2022 - Present</div>
          <div className="job-title">DevOps Engineer · SAS</div>
          <div className="job-descriptions">
            <div className="job-description">
              Responsible for deriving and deploying client-specific solutions,
              via on-premise, and cloud services, such as AWS, GCP, Azure.
            </div>
            <div className="job-description">
              Automate, and manage cloud resources and deployments using
              Terraform.
            </div>
            <div className="job-description">
              Contributed to critical guidelines and standard documentation,
              leading to 60% increase in department-wide engineer efficiency in
              Viya solutions.
            </div>
            <div className="job-description">
              Actively engaged in direct client discussion, transforming
              gathered requirements to form robust solutions with other seniors
              and colleagues.
            </div>
          </div>
        </div>
        <div className="work-experience">
          <div className="job-years">2017-2018</div>
          <div className="job-title">
            Software Engineering Intern · Toronto Hydro
          </div>
          <div className="job-descriptions">
            <div className="job-description">
              Implemented an automation tool that automatically categorizes
              client/customer invoices, decreasing the amount of time to conduct
              such categorization by 98%.
            </div>
            <div className="job-description">
              Implemented an automation tool that generates, and delivers Excel
              reports, presenting the various financial, operative,
              client-related summaries of the CX department’s weekly
              accomplishments.
            </div>
            <div className="job-description">
              The automation tool mentioned above drastically improved
              department-wide efficiency, by decreasing the amount of time
              required to form the internal report by 95%, resulting in an offer
              for a full-time position, along with notable acknowledgement
              across multiple teams and departments.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

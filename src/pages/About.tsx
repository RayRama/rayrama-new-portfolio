import Ray from "@assets/images/ray 2.png";
import { AboutComponent } from "@components/molecules/AboutComponent";
import { About, Job, Name } from "@constants/Profile";
import styled from "styled-components";
import { useEffect } from "react";

const ProfileSection = styled.div`
  display: flex;
  // height: 200px;

  @media screen and (max-width: 768px) {
    // height: 100vh;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .profile-pic {
    width: 200px;
    height: 200px;
    border-radius: 5px;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .profile-desc {
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }

  .profile-desc h1 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .profile-desc .profile-job {
    width: fit-content;
    padding: 0.2rem 0.5rem;
    margin-bottom: 0.5rem;
    border-radius: 5px;

    color: ${(props) => props.theme.text};
    background-color: ${(props) => props.theme.body};
    font-size: 1rem;
  }

  .profile-desc p {
    font-size: 1rem;
    text-align: justify;
  }

  @media screen and (max-width: 768px) {
    .profile-pic {
      margin-bottom: 1rem;
    }

    .profile-desc {
      padding: 0;
      line-height: 1.5;
    }

    .profile-desc .profile-job {
      align-self: center;
    }
  }
`;

const EducationSection = styled.div`
  padding-top: 1.5rem;
  display: flex;
  flex-direction: column;

  align-items: center;

  h1 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  .education-card-container {
    display: flex;
    fled-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  .education-card {
    height: 44vh;
    width: 40%;
    border-radius: 5px;
    padding: 1rem;
    border: 1px solid #000;
    margin-bottom: 1rem;
  }

  .education-card:hover {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
  }

  .education-card h2 {
    font-size: 1.2rem;
  }

  .education-card ul {
    margin-top: 1rem;
    list-style: none;
  }

  .education-card li {
    margin-bottom: 0.5rem;
  }

  .education-card ol {
    padding-left: 1rem;
    margin-top: 1rem;
  }

  @media screen and (max-width: 768px) {
    .education-card-container {
      flex-direction: column;
      align-items: center;
    }

    .education-card {
      width: 100%;
    }
  }
`;

const SkillsSection = styled.div`
  padding-top: 1.5rem;
  display: flex;
  flex-direction: column;

  padding-bottom: 2rem;

  align-items: center;

  h1 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  .skills-table-container {
    display: flex;
    fled-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  @media screen and (max-width: 768px) {
    .skills-table-container {
      flex-direction: column;
      align-items: center;
    }
  }

  .skills-table {
    height: 44vh;
    width: 50%;
    margin-bottom: 1rem;
    border: 1px solid black;
    border-collapse: collapse;
  }

  .skills-table th {
    font-size: 1.2rem;
    text-align: left;
    border: 1px solid black;
    border-collapse: collapse;
    padding: 1.5rem;
  }

  .skills-table td {
    font-size: 1rem;
    padding: 1.5rem;
    text-align: left;
    border: 1px solid black;
    border-collapse: collapse;
  }

  .skills-table tr:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

interface IAboutPageProps {}

export function AboutPage(props: IAboutPageProps) {
  useEffect(() => {
    alert(
      "Due to university restrictions, this page will be updated as soon as possible."
    );
  }, []);

  return (
    <AboutComponent>
      <ProfileSection>
        <img className="profile-pic" src={Ray} alt="Ray" />
        <div className="profile-desc">
          <h1>{Name}</h1>
          <div className="profile-job">{Job}</div>
          <p>{About}</p>
        </div>
      </ProfileSection>
      <EducationSection>
        <h1>Education</h1>
        <div className="education-card-container">
          {/* Left card */}
          <div className="education-card">
            <h2>
              Bachelor’s degree of informatics engineering UIN Sunan Gunung
              Djati, Bandung
            </h2>
            <ul>
              <li>Year: 2021 - Now</li>
            </ul>
            <p>Achievements:</p>
            <ol>
              <li>Current GPA: 3.95</li>
              <li>Machine Learning Student at Bangkit Academy 2023 Batch 2</li>
              <li>Accepted via SNMPTN with average score 85.4 </li>
            </ol>
          </div>
          {/* Right card */}
          <div className="education-card">
            <h2>
              Student at Senior High School Of Natural Science Class SMAN1
              Sindang, Indramayu
            </h2>
            <ul>
              <li>Year: 2017 - 2020</li>
            </ul>
            <p>Achievements:</p>
            <ol>
              <li>Final Exam Score: 90.07 </li>
              <li>Ranked in the top 10 since 1st grade </li>
              <li>
                Active in various school activities, such as events,
                competitions, and organizations
              </li>
            </ol>
          </div>
        </div>
      </EducationSection>
      <SkillsSection>
        <h1>Skills & Abilities</h1>
        <div className="skills-table-container">
          <table className="skills-table">
            <tr>
              <th rowSpan={4}>Skills</th>
              <td>ReactJS & NextJS</td>
            </tr>
            <tr>
              <td>Laravel & Wordpress</td>
            </tr>
            <tr>
              <td>Git Version Control</td>
            </tr>
            <tr>
              <td>PHP</td>
            </tr>
          </table>
          <table className="skills-table">
            <tr>
              <th rowSpan={4}>Abilities</th>
              <td>Operate Windows & Linux</td>
            </tr>
            <tr>
              <td>Good with Ms. Office</td>
            </tr>
            <tr>
              <td>Well documenting project</td>
            </tr>
            <tr>
              <td>
                TOEFA (Test of English for Academics) with total score 560{" "}
              </td>
            </tr>
          </table>
        </div>
      </SkillsSection>
    </AboutComponent>
  );
}

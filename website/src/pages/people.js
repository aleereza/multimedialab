import React from 'react'
import styles from "./pages.module.css"
import { graphql } from "gatsby"
import Layout from '../components/Layout/Layout'
import StudentTile from "../components/Content/StudentTile/StudentTile"
import Faculty from "../components/Content/Faculty/Faculty" 
import Heading from "../components/Content/Heading/Heading"
import FacultySectionPeople from "../components/Content/FacultySectionPeople/FacultySectionPeople"
import FacultyTile from "../components/Content/FacultyTile/FacultyTile"

class PeoplePage extends React.Component {

  render() {
    const studentsdata = this.props.data.allStudents.edges
    const studentsimagesdata = this.props.data.allImages.edges
    const facultydata = this.props.data.allFaculty.edges
    return(
      <Layout>
        <Heading text="Faculty"/>
		<FacultySectionPeople>
			<FacultyTile
              name={facultydata[0].node.name}
              title={facultydata[0].node.title}
              image={this.props.data.IvanImg.childImageSharp.sizes}
              website={facultydata[0].node.website}
              research1={facultydata[0].node.research1}
              research2={facultydata[0].node.research2}
              research3={facultydata[0].node.research3}
            />
            <FacultyTile
              name={facultydata[1].node.name}
              title={facultydata[1].node.title}
              image={this.props.data.JieImg.childImageSharp.sizes}
              website={facultydata[1].node.website}
              research1={facultydata[1].node.research1}
              research2={facultydata[1].node.research2}
              research3={facultydata[1].node.research3}
            />
            <FacultyTile
              name={facultydata[2].node.name}
              title={facultydata[2].node.title}
              image={this.props.data.AtousaImg.childImageSharp.sizes}
              website={facultydata[2].node.website}
              research1={facultydata[2].node.research1}
              research2={facultydata[2].node.research2}
              research3={facultydata[2].node.research3}
            />
		</FacultySectionPeople>
        

        <Heading text="Researchers"/>
        <div className={styles.studentstile_container}>

          {studentsdata.map((student,i) => (
            <div className={styles.studentstile} key={i}>

              <StudentTile
                name={student.node.name}
                title={student.node.title}
                research={student.node.research}
                image={studentsimagesdata[student.node.index].node.childImageSharp.sizes}
                website={student.node.website}
                email={student.node.email}
                github={student.node.github}
                linkedin={student.node.linkedin}
              />

            </div>
          ))}

        </div>

        <Heading text="Alumni"/>
        <div className={styles.alumni_container}>
        <p>We are proud of our alumni. Most of them have gone on to join the leading tech companies, internationally (e.g., Amazon, Apple, Google, Microsoft) and locally (e.g., MDA, Broadcom, Sierra Wireless, AltumView Systems). A number of them have started their own companies, or chosen to pursue careers in academia.
        </p>
        <ul>
		  <li>Him Wai Ng (M.A.Sc. 2018, now with with AltumView Systems)</li>
          <li><a href="http://www.makonin.com/" target="_blank">Stephen Makonin</a> (PostDoc 2017-18, now Adjunct Professor at SFU)</li>
          <li>Yijian Wang (M.A.Sc. 2017, now with SAP)</li>
          <li>James Lin (M.A.Sc. 2017, Co-Founder of KnowIdea)</li>
          <li>Hanieh Khalilian (Ph.D. 2016, now with MDA)</li>
          <li>Xing Wang (Ph.D. 2016, now with AltumView Systems)</li>
          <li>Dong Zhang (Ph.D. 2016, now with AltumView Systems)</li>
          <li><a href="https://ca.linkedin.com/pub/mehdi-stapleton/42/861/291" target="_blank">Mehdi Stapleton</a> (M.A.Sc. 2016, now with Vancouver Computer Vision)</li>
          <li>Golara Javadi (M.A.Sc. 2016, now with ZE Power Engineering)</li>
          <li>Ravneet Sohi (M.Eng. 2016, now with Broadcom)</li>
          <li><a href="http://ca.linkedin.com/in/hkhatoonabadi" target="_blank">S. Hossein Khatoonabadi</a> (Ph.D. 2015, now with PDFTron)</li>
          <li>Siyu Wu (M.A.Sc. 2015)</li>
          <li>Omar Alhussein (M.A.Sc. 2015, now Ph.D. student at the University of Waterloo)</li>
          <li><a href="https://www.linkedin.com/in/manjurrashed" target="_blank">Manjur Rashed</a> (M.Eng. 2015, now with Broadcom)</li>
          <li>Steven Chen (M.Eng. 2015, now with Bendix CVS)</li>
          <li>Yu Gao (Ph.D. 2014, now with AltumView Systems)</li>
          <li>Victor Mateescu (M.A.Sc. 2014, now with MDA)</li>
          <li>Xiao Luo (M.A.Sc. 2014)</li>
          <li>Mehdi Seyfi (Ph.D. 2013, now with AltumView Systems)</li>
          <li><a href="http://profile.qiet.ac.ir/hadizadeh/?lang=en" target="_blank">Hadi Hadizadeh</a> (Ph.D. 2013, now Assistant Professor at Quchan University of Technology)</li>
          <li><a href="https://www.linkedin.com/in/sssidhu" target="_blank">Simranjit Sidhu</a> (B.A.Sc. 2013, now with Amazon)</li>
          <li>Yue-Meng Chen (M.A.Sc. 2007, Ph.D. 2012, Founder and CEO of HiCling)</li>
          <li>Moein Shayegannia (M.A.Sc. 2012, now Ph.D. student at the University of Toronto)</li>
          <li><a href="https://www.linkedin.com/in/simran-sarai-a2797710/" target="_blank">Simran Sarai</a> (M.Eng. 2012, now with Schneider Electric)</li>
          <li>Xiaoyu Xiu (Ph.D. 2011, now with InterDigital)</li>
          <li>Upul Samarawickrama (Ph.D. 2011, now with Microsoft)</li>
          <li>Parmida Beigi (M.A.Sc. 2011, now with Boeing)</li>
          <li>Xiaozheng Huang (M.A.Sc. 2011, now with Tencent)</li>
          <li>Xiaonan Ma (M.A.Sc. 2011, now with Boeing)</li>
          <li>Mohammad Jafar Taghiyar Renani (M.A.Sc. 2011, now with BC Cancer Agency)</li>
          <li>Calvin Che (M.A.Sc. 2011, now with Fortinet)</li>
          <li>Dong Zhang (M.A.Sc. 2010, Ph.D. 2016, now with AltumView Systems)</li>
          <li>Andrew Au (B.A.Sc. 2010, Co-Founder of SocialMi, iQmetrix, and Thinkingbox)</li>
          <li>Mario Enriquez (PostDoc 2009-10, now R&D Manager at Amway)</li>
          <li>Jing Wang (Ph.D. 2010, now with GigPeak)</li>
          <li>Hongfei Du (PostDoc 2008-2009, now with InterDigital)</li>
          <li>Mahin Torki (M.A.Sc. 2009, now with Microsoft)</li>
          <li>Derek Pang (B.A.Sc. 2009, now with Lytro)</li>
          <li>S. Mohsen Amiri (M.A.Sc. 2009, now with Google)</li>
          <li>Guoqian Sun (M.A.Sc. 2009, now with Apple)</li>
          <li>Myo Tun (PostDoc 2008, now with Avaya)</li>
          <li><a href="http://sbahmani.ece.gatech.edu/" target="_blank">Sohail Bahmani</a> (M.A.Sc. 2008, now PostDoc at GeorgiaTech)</li>
          <li>Duncan Chan (B.A.Sc. 2008, now with Microsoft)</li>
          <li><a href="https://www.cics.umass.edu/faculty/directory/lee-sunghoon" target="_blank">Sunghoon Ivan Lee</a> (B.A.Sc. 2008, now Assistant Professor at UMass-Amherst)</li>
          <li>Tong Jin (Ph.D. 2006, now with Teradici)</li>
          <li>Raymond Ngun (M.Eng. 2006, now with Broadcom)</li>
          <li>Victor Chan (M.Eng. 2006, now with MDA)</li>
          <li>Howard Chang (B.A.Sc. 2006, now with Ericsson)</li>
        </ul>
        <h2>Earlier Alumni (students of Dr. J. Vaisey)</h2>
        <ul>
          <li>Chen Ji (M.A.Sc. 2001)</li>
          <li><a href="http://www.kpsuba.com/" target="_blank">K.P. Subbalakshmi</a> (Ph.D. 2000, now Professor at Stevens Institute of Technology)</li>
          <li>Ed Chiu (M.A.Sc. 1999)</li>
          <li>David Hargreaves (M.A.Sc. 1994, Vice President of MDA)</li>
          <li>David Houlding (M.A.Sc. 1994, Principal Healthcare Program Manager at Microsoft)</li>
        </ul>
        </div>
        <Heading text="Visitors"/>
        <div className={styles.visitors_container}>
        <ul>
          <li>Prof. Yanshan Xiao, China Three Gorges University (2018-2019)</li>
          <li>Prof. Yingchun Wu, Taiyuan University of Science and Technology, China (2018-2019)</li>
          <li><a href="https://github.com/harshanavkis" target="_blank">Harshavardhan Unnibhavi</a>, Indian Institute of Technology (ISM), Dhanbad (2018)</li>
          <li>Shikha Singh, IIIT Delhi (2018)</li>
          <li><a href="https://sites.google.com/a/iiitd.ac.in/megha-gupta/" target="_blank">Megha Gaur</a>, IIIT Delhi (2017-2018)</li>
		  <li>Jian Jin, Beijing Jiaotong University, China (2016-18)</li>
          <li>Xiwu Shang, Shanghai University, China (2016-17)</li>
          <li>Lijun Zhao, Beijing Jiaotong University, China (2016-17)</li>
          <li>Lei Liu, Beijing Jiaotong University, China (2014-16)</li>
          <li>Meiqin Liu, Beijing Jiaotong University, China (2014-15)</li>
          <li>Prof. Huihui Bai, Beijing Jiaotong University, China (2014-15)</li>
          <li>Kongfen Zhu, Taiyuan University of Science and Technology, China (2014-15)</li>
          <li>Pengfei Wan, HKUST (2013)</li>
          <li><a href="https://lassonde.yorku.ca/users/genecheung" target="_blank">Prof. Gene Cheung</a>, York University (2012)</li>
          <li>Yunlong Feng, National Institute of Informatics, Japan (2012)</li>
          <li><a href="http://ipsl.kw.ac.kr/xe/index.php?mid=Members_DongGyuSim" target="_blank">Prof. Donggyu Sim</a>, Kwangwoon University, Korea (2011-2012)</li>
		  <li><a href="https://www.researchgate.net/profile/Woong_Lim2" target="_blank">Woong Lim</a>, Kwangwoon University, Korea (2012-2013)</li>
		  <li><a href="http://ipsl.kw.ac.kr/xe/index.php?mid=Members_KyungYeonMin" target="_blank">Kyung-Yeon Min</a>, Kwangwoon University, Korea (2011-2012)</li>
		  <li><a href="https://www.researchgate.net/profile/Junghak_Nam" target="_blank">Jung-Hak Nam</a>, Kwangwoon University, Korea (2011-2012)</li>
          <li>Lili Meng, Beijing Jiaotong University, China (2010-11)</li>
          <li>Shaokun Guo, Northwestern Polytechnical University, China (2010)</li>
          <li>Prof. Jian Wang, Xi'an Technological University, China (2010)</li>
          <li><a href="http://dance.arts.uci.edu/john-crawford" target="_blank">Prof. John Crawford</a>, UC Irvine (2008)</li>
          <li>Lijie Liu, Johns Hopkins University (2005)</li>
        </ul>
        </div>
      </Layout>
    )
  }
}

export default PeoplePage

export const studentsQuery = graphql`
  query studentsQuery {

    allStudents: allStudentsCsv {
      edges {
        node {
          index
          name
          title
          research
          email
          website
          github
          linkedin
        }
      }
    }

    allFaculty: allFacultyCsv {
      edges {
        node {
          name
          title
          email
          website
          bio
          research1
          research2
          research3
        }
      }
    }

    allImages: allFile(
      filter: { sourceInstanceName: { eq: "students_images" } },
      sort: {fields: name, order: ASC},
    ) {
      edges{
        node {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            sizes(maxWidth: 300) {
              ...GatsbyImageSharpSizes_tracedSVG
            }
          }
        }
      }
    }

    IvanImg: file(sourceInstanceName: { eq: "faculty_images" }, relativePath: { eq: "ivanbajic.jpg" }) {
    childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        sizes(maxWidth: 600) {
          ...GatsbyImageSharpSizes_tracedSVG
        }
      }
    }
    AtousaImg: file(sourceInstanceName: { eq: "faculty_images" }, relativePath: { eq: "atousahajshirmohammadi.jpg" }) {
    childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        sizes(maxWidth: 600) {
          ...GatsbyImageSharpSizes_tracedSVG
        }
      }
    }
    JieImg: file(sourceInstanceName: { eq: "faculty_images" }, relativePath: { eq: "jieliang.jpg" }) {
    childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        sizes(maxWidth: 600) {
          ...GatsbyImageSharpSizes_tracedSVG
        }
      }
    }


  }
`

import React from 'react'
import styles from "./pages.module.css"
import { graphql } from "gatsby"
import Layout from '../components/Layout/Layout'
import StudentTile from "../components/Content/StudentTile/StudentTile"
import Faculty from "../components/Content/Faculty/Faculty"
import Heading from "../components/Content/Heading/Heading"

class PeoplePage extends React.Component {

  render() {
    const studentsdata = this.props.data.allStudents.edges
    const studentsimagesdata = this.props.data.allImages.edges
    const facultydata = this.props.data.allFaculty.edges
    return(
      <Layout>
        <Heading text="Faculty"/>
        <Faculty
          name={facultydata[0].node.name}
          title={facultydata[0].node.title}
          email={facultydata[0].node.email}
          website={facultydata[0].node.website}
          image={this.props.data.IvanImg.childImageSharp.sizes}
          research1={facultydata[0].node.research1}
          research2={facultydata[0].node.research2}
          research3={facultydata[0].node.research3}
          bio={facultydata[0].node.bio}
        />
        <Faculty
          name={facultydata[1].node.name}
          title={facultydata[1].node.title}
          email={facultydata[1].node.email}
          website={facultydata[1].node.website}
          image={this.props.data.JieImg.childImageSharp.sizes}
          research1={facultydata[1].node.research1}
          research2={facultydata[1].node.research2}
          research3={facultydata[1].node.research3}
          bio={facultydata[1].node.bio}
        />
        <Faculty
          name={facultydata[2].node.name}
          title={facultydata[2].node.title}
          email={facultydata[2].node.email}
          website={facultydata[2].node.website}
          image={this.props.data.AtousaImg.childImageSharp.sizes}
          research1={facultydata[2].node.research1}
          research2={facultydata[2].node.research2}
          research3={facultydata[2].node.research3}
          bio={facultydata[2].node.bio}
        />

        <Heading text="Students"/>
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
        <p>We are proud of our alumni. Most of them have gone on to join the leading tech companies, internationally (e.g., Amazon, Apple, Google, Microsoft) and locally (e.g., MDA, Broadcom, Sierra Wireless, AltumView Systems). A number of them have started their own companies, or chosen to pursue careers in academia.
        </p>
        <ul>
          <li>Stephen Makonin (PostDoc 2017-18, now with Knowledge Network and Adjunct Professor at SFU)</li>
          <li>Yijian Wang (M.A.Sc. 2017, now with SAP)</li>
          <li>James Lin (M.A.Sc. 2017, Co-Founder of KnowIdea)</li>
          <li>Hanieh Khalilian (Ph.D. 2016, now with MDA)</li>
          <li>Xing Wang (Ph.D. 2016, now with AltumView Systems)</li>
          <li>Dong Zhang (Ph.D. 2016, now with AltumView Systems)</li>
          <li>Mehdi Stapleton (M.A.Sc. 2016, now with Vancouver Computer Vision)</li>
          <li>Golara Javadi (M.A.Sc. 2016, now with ZE Power Engineering)</li>
          <li>Ravneet Sohi (M.Eng. 2016, now with Broadcom)</li>
          <li>S. Hossein Khatoonabadi (Ph.D. 2015, now with PDFTron)</li>
          <li>Siyu Wu (M.A.Sc. 2015)</li>
          <li>Omar Alhussein (M.A.Sc. 2015, now Ph.D. student at the University of Waterloo)</li>
          <li>Manjur Rashed (M.Eng. 2015, now with Broadcom)</li>
          <li>Steven Chen (M.Eng. 2015, now with Bendix CVS)</li>
          <li>Yu Gao (Ph.D. 2014, now with AltumView Systems)</li>
          <li>Victor Mateescu (M.A.Sc. 2014, now with MDA)</li>
          <li>Xiao Luo (M.A.Sc. 2014)</li>
          <li>Mehdi Seyfi (Ph.D. 2013, now with AltumView Systems)</li>
          <li>Hadi Hadizadeh (Ph.D. 2013, now Assistant Professor at Quchan University of Technology)</li>
          <li>Simranjit Sidhu (B.A.Sc. 2013, now with Amazon)</li>
          <li>Yue-Meng Chen (M.A.Sc. 2007, Ph.D. 2012, Founder and CEO of HiCling)</li>
          <li>Moein Shayegannia (M.A.Sc. 2012, now Ph.D. student at the University of Toronto)</li>
          <li>Simran Sarai (M.Eng. 2012, now with Schneider Electric)</li>
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
          <li>Sohail Bahmani (M.A.Sc. 2008, now PostDoc at GeorgiaTech)</li>
          <li>Duncan Chan (B.A.Sc. 2008, now with Microsoft)</li>
          <li>Sunghoon Ivan Lee (B.A.Sc. 2008, now Assistant Professor at UMass-Amherst)</li>
          <li>Tong Jin (Ph.D. 2006, now with Teradici)</li>
          <li>Raymond Ngun (M.Eng. 2006, now with Broadcom)</li>
          <li>Victor Chan (M.Eng. 2006, now with MDA)</li>
          <li>Howard Chang (B.A.Sc. 2006, now with Ericsson)</li>
        </ul>
        <h2>Earlier Alumni (students of Dr. J. Vaisey)</h2>
        <ul>
          <li>Chen Ji (M.A.Sc. 2001)</li>
          <li><a href="http://www.kpsuba.com/">K.P. Subbalakshmi</a> (Ph.D. 2000, now Professor at Stevens Institute of Technology)</li>
          <li>Ed Chiu (M.A.Sc. 1999)</li>
          <li>David Hargreaves (M.A.Sc. 1994, Vice President of MDA)</li>
          <li>David Houlding (M.A.Sc. 1994, Principal Healthcare Program Manager at Microsoft)</li>
        </ul>
        <Heading text="Visitors"/>
        <ul>
          <li>Prof. Yanshan Xiao, China Three Gorges University (2018-2019)</li>
          <li>Prof. Yingchun Wu, Taiyuan University of Science and Technology, China (2018-2019)</li>
          <li><a href="https://github.com/harshanavkis">Harshavardhan Unnibhavi</a>, Indian Institute of Technology (ISM), Dhanbad (2018)</li>
          <li>Shikha Singh, IIIT Delhi (2018)</li>
          <li><a href="https://sites.google.com/a/iiitd.ac.in/megha-gupta/">Megha Gaur</a>, IIIT Delhi (2017-2018)</li>
          <li>Xiwu Shang, Shanghai University, China (2016-17)</li>
          <li>Lijun Zhao, Beijing Jiaotong University, China (2016-17)</li>
          <li>Lei Liu, Beijing Jiaotong University, China (2014-16)</li>
          <li>Meiqin Liu, Beijing Jiaotong University, China (2014-15)</li>
          <li>Prof. Huihui Bai, Beijing Jiaotong University, China (2014-15)</li>
          <li>Kongfen Zhu, Taiyuan University of Science and Technology, China (2014-15)</li>
          <li><a href="http://ihome.ust.hk/~leoman/">Pengfei Wan</a>, HKUST (2013)</li>
          <li><a href="http://research.nii.ac.jp/~cheung/">Prof. Gene Cheung</a>, National Institute of Informatics, Japan (2012)</li>
          <li><a href="http://klab.nii.ac.jp/~fengdragon/">Yunlong Feng</a>, National Institute of Informatics, Japan (2012)</li>
          <li><a href="http://ipsl.kw.ac.kr/xe/index.php?mid=Members_DongGyuSim">Prof. Donggyu Sim</a>, Kwangwoon University, Korea (2011-2012)</li>
          <li>Lili Meng, Beijing Jiaotong University, China (2010-11)</li>
          <li>Shaokun Guo, Northwestern Polytechnical University, China (2010)</li>
          <li>Prof. Jian Wang, Xi'an Technological University, China (2010)</li>
          <li><a href="http://dance.arts.uci.edu/john-crawford">Prof. John Crawford</a>, UC Irvine (2008)</li>
          <li>Lijie Liu, Johns Hopkins University (2005)</li>
        </ul>

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

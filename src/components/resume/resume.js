import React, { Component } from 'react'
import "./assets/resume.css"
export default class Resume extends Component {
  render() {
    return (
      <div style={{ zIndex: 50 }} id={this.props.active}>
      <div id={this.props.elements} >
        <svg style={{ zIndex: 115 }} id={`wave_blue_${this.props.active}`} viewBox="0 0 1938.561 757.674">
          <defs>
            <filter id="Path_17" x="0" y="0" width="1938.561" height="757.674" filterUnits="userSpaceOnUse">
              <feOffset dx="3" dy="3" input="SourceAlpha" />
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feFlood flood-opacity="0.161" />
              <feComposite operator="in" in2="blur" />
              <feComposite in="SourceGraphic" />
            </filter>
            <filter id="PDF_DOWNLOAD" x="1808.061" y="712.174" width="117" height="32" filterUnits="userSpaceOnUse">
              <feOffset dx="3" dy="3" input="SourceAlpha" />
              <feGaussianBlur stdDeviation="3" result="blur-2" />
              <feFlood flood-opacity="0.161" />
              <feComposite operator="in" in2="blur-2" />
              <feComposite in="SourceGraphic" />
            </filter>
          </defs>
          <g id="Group_11" data-name="Group 11" transform="translate(6.061 -334.826)">
            <g class="cls-4-blue" transform="matrix(1, 0, 0, 1, -6.06, 334.83)">
              <path id="Path_17-2" data-name="Path 17" class="cls-1-blue" d="M1930,6.748v750H0l223.436-27.576L643,705.275,898.4,583.612,1474.15,517.3l181.384-256.512Z" transform="translate(6.06 0.43)" />
            </g>
            <g class="cls-3-blue" transform="matrix(1, 0, 0, 1, -5.06, 350)">
              <text id="PDF_DOWNLOAD-2" data-name="PDF DOWNLOAD" class="cls-2-blue" transform="translate(1814.06 718.17)"><tspan x="0" y="11">PDF DOWNLOAD</tspan></text>
            </g>
          </g>
        </svg>

        <svg  style={{ zIndex: 110 }} id="experience" viewBox="0 0 536 396">
  <defs>
    <filter id="Rectangle_8" x="0" y="22" width="533" height="374" filterUnits="userSpaceOnUse">
      <feOffset dx="3" dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feFlood flood-opacity="0.161"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <filter id="EXPERIENCE" x="393" y="0" width="143" height="41" filterUnits="userSpaceOnUse">
      <feOffset dx="3" dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3" result="blur-2"/>
      <feFlood flood-opacity="0.161"/>
      <feComposite operator="in" in2="blur-2"/>
      <feComposite in="SourceGraphic"/>
    </filter>
  </defs>
  <g id="Group_13" data-name="Group 13" transform="translate(-282 -625)">
    <g class="cls-6-experience" transform="matrix(1, 0, 0, 1, 282, 625)">
      <rect id="Rectangle_8-2" data-name="Rectangle 8" class="cls-1-experience" width="513" height="354" transform="translate(7 29)"/>
    </g>
    <g class="cls-5" transform="matrix(1, 0, 0, 1, 282, 625)">
      <text id="EXPERIENCE-2" data-name="EXPERIENCE" class="cls-2-experience" transform="translate(399 6)"><tspan x="0" y="19">EXPERIENCE</tspan></text>
    </g>
    <text id="Web_Developer_Freelance_Develop_project_concepts_and_maintain_optimal_workflow._Complete_detailed_programming_and_development_tasks_for_front_end_public_and_internal_websites_as_well_as_challenging_back-end_server_code._Collaborate_with_developers_to" data-name="Web Developer
Freelance
•	Develop project concepts and maintain optimal workflow.
•	Complete detailed programming and development tasks for front end public and internal websites as well as challenging back-end server code.
•	Collaborate with developers to" class="cls-3-experience" transform="translate(305 660)"><tspan x="0" y="15">Web Developer</tspan><tspan x="0" y="33">Freelance</tspan><tspan class="cls-4-experience"><tspan x="0" y="50">•	Develop project concepts and maintain optimal workflow.</tspan><tspan x="0" y="67">•	Complete detailed programming and development tasks for front </tspan><tspan x="0" y="84">end public and internal websites as well as challenging back-end server </tspan><tspan x="0" y="101">code.</tspan><tspan x="0" y="118">•	Collaborate with developers to create clean interfaces and simple </tspan><tspan x="0" y="135">intuitive, interactions and experiences .</tspan><tspan x="0" y="152">•	Carry out quality assurance tests to discover errors and optimize </tspan><tspan x="0" y="169">usability.</tspan></tspan></text>
    <text id="Automotive_Shop_Manager_Interact_and_deliver_customer_information_whilst_meeting_heavy_deadlines._Work_hand_and_hand_with_lower_level_Technicians_to_accomplish_abnormal_issues._Discuss_understand_and_plan_a_route_for_customer_builds_while_keepin" data-name="Automotive Shop 
Manager
•	Interact and deliver customer information whilst meeting heavy deadlines.
•	Work hand and hand with lower level Technicians to accomplish abnormal issues.
•	Discuss, understand and plan a route for customer builds while keepin" class="cls-3-experience" transform="translate(302 839)"><tspan x="0" y="15">Automotive Shop </tspan><tspan x="0" y="33">Manager</tspan><tspan class="cls-4-experience"><tspan x="0" y="50">•	Interact and deliver customer information whilst meeting heavy </tspan><tspan x="0" y="67">deadlines.</tspan><tspan x="0" y="84">•	Work hand and hand with lower level Technicians to accomplish </tspan><tspan x="0" y="101">abnormal issues.</tspan><tspan x="0" y="118">•	Discuss, understand and plan a route for customer builds while </tspan><tspan x="0" y="135">keeping budget, deadlines, and needs in mind.</tspan><tspan x="0" y="152">•	Carry out quality assurance tests to discover mechanical errors.</tspan></tspan></text>
  </g>
</svg>


        <svg style={{ zIndex: 105 }} id={`wave_green_${this.props.active}`} viewBox="0 0 1938.606 757.439">
          <defs>
            <filter id="Path_16" x="0" y="0" width="1938.606" height="757.439" filterUnits="userSpaceOnUse">
              <feOffset dx="3" dy="3" input="SourceAlpha" />
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feFlood flood-opacity="0.161" />
              <feComposite operator="in" in2="blur" />
              <feComposite in="SourceGraphic" />
            </filter>
          </defs>
          <g class="cls-2-green" transform="matrix(1, 0, 0, 1, 0, 0)">
            <path id="Path_16-2" data-name="Path 16" class="cls-1-green" d="M1930,3.558v750H0L219.247,693.8l405.559-25.056,237.452-159.8,553.852-62.593,197.72-236.807Z" transform="translate(6.11 3.38)" />
          </g>
        </svg>

        <svg style={{ zIndex: 100 }} id={`wave_brown_${this.props.active}`} viewBox="0 0 1938 757">
          <defs>
            <filter id="Path_15" x="0" y="0" width="1938" height="757" filterUnits="userSpaceOnUse">
              <feOffset dx="3" dy="3" input="SourceAlpha" />
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feFlood flood-opacity="0.161" />
              <feComposite operator="in" in2="blur" />
              <feComposite in="SourceGraphic" />
            </filter>
          </defs>
          <g class="cls-2-brown" transform="matrix(1, 0, 0, 1, 0, 0)">
            <path id="Path_15-2" data-name="Path 15" class="cls-1-brown" d="M1930,0V750H0l208.542-79.243L619.9,636.943,844.186,476.478l518-102.935,237.278-193.579Z" transform="translate(6.18 6.85)" />
          </g>
        </svg>
        
        <svg style={{ zIndex: 102 }} id="education" viewBox="0 0 403 215">
  <defs>
    <filter id="Rectangle_9" x="0" y="21" width="403" height="194" filterUnits="userSpaceOnUse">
      <feOffset dx="3" dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feFlood flood-opacity="0.161"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <filter id="The_University_of_Texas_at_Austin_Full_Stack_Web_Development_Certificate_Udemy_and_Udacity_Refresher_Courses_-_SQL_Modern_React_With_Redux_React_Native_Node.js_Express_" x="33" y="58" width="358" height="130" filterUnits="userSpaceOnUse">
      <feOffset dx="3" dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3" result="blur-2"/>
      <feFlood flood-opacity="0.161"/>
      <feComposite operator="in" in2="blur-2"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <filter id="EDUCATION" x="0" y="0" width="143" height="41" filterUnits="userSpaceOnUse">
      <feOffset dx="3" dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3" result="blur-3"/>
      <feFlood flood-opacity="0.161"/>
      <feComposite operator="in" in2="blur-3"/>
      <feComposite in="SourceGraphic"/>
    </filter>
  </defs>
  <g id="Group_15" data-name="Group 15" transform="translate(-1270 -364)">
    <g class="cls-6-education" transform="matrix(1, 0, 0, 1, 1270, 364)">
      <rect id="Rectangle_9-2" data-name="Rectangle 9" class="cls-1-education" width="383" height="174" transform="translate(7 28)"/>
    </g>
    <g class="cls-5-education" transform="matrix(1, 0, 0, 1, 1270, 364)">
      <text id="The_University_of_Texas_at_Austin_Full_Stack_Web_Development_Certificate_Udemy_and_Udacity_Refresher_Courses_-_SQL_Modern_React_With_Redux_React_Native_Node.js_Express_2" data-name="The University of Texas at Austin – Full Stack Web Development Certificate

 Udemy and Udacity Refresher Courses -  SQL, Modern React With Redux, React Native, Node.js, Express
" class="cls-2-education" transform="translate(39 64)"><tspan x="0" y="14">The University of Texas at Austin – Full Stack Web </tspan><tspan x="0" y="31">Development Certificate</tspan><tspan x="0" y="48"></tspan><tspan x="0" y="65" > Udemy and Udacity Refresher Courses -  SQL, </tspan><tspan x="0" y="82">Modern React With Redux, React Native, Node.js, </tspan><tspan x="0" y="99">Express</tspan></text>
    </g>
    <g class="cls-4-education" transform="matrix(1, 0, 0, 1, 1270, 364)">
      <text id="EDUCATION-2" data-name="EDUCATION" class="cls-3-education" transform="translate(6 6)"><tspan x="0" y="19">EDUCATION</tspan></text>
    </g>
  </g>
</svg>

        

  <svg style={{ zIndex: 95 }} id="skills" viewBox="0 0 606 301.016">
    <defs>
      <filter id="Rectangle_7" x="0" y="20.957" width="606" height="280.058" filterUnits="userSpaceOnUse">
        <feOffset dx="3" dy="3" input="SourceAlpha"/>
        <feGaussianBlur stdDeviation="3" result="blur"/>
        <feFlood flood-opacity="0.161"/>
        <feComposite operator="in" in2="blur"/>
        <feComposite in="SourceGraphic"/>
      </filter>
      <filter id="TECHNICAL_SKILLS" x="1" y="0" width="210" height="41" filterUnits="userSpaceOnUse">
        <feOffset dx="3" dy="3" input="SourceAlpha"/>
        <feGaussianBlur stdDeviation="3" result="blur-2"/>
        <feFlood flood-opacity="0.161"/>
        <feComposite operator="in" in2="blur-2"/>
        <feComposite in="SourceGraphic"/>
      </filter>
      <filter id="_HTML_CSS_JavaScript_JQuery_Responsive_Design_Bootstrap_Handlebars_React.js_Ejs_" x="24" y="65" width="158" height="198" filterUnits="userSpaceOnUse">
        <feOffset dx="3" dy="3" input="SourceAlpha"/>
        <feGaussianBlur stdDeviation="3" result="blur-3"/>
        <feFlood flood-opacity="0.161"/>
        <feComposite operator="in" in2="blur-3"/>
        <feComposite in="SourceGraphic"/>
      </filter>
      <filter id="Browser_Based" x="10" y="46" width="148" height="39" filterUnits="userSpaceOnUse">
        <feOffset dx="3" dy="3" input="SourceAlpha"/>
        <feGaussianBlur stdDeviation="3" result="blur-4"/>
        <feFlood flood-opacity="0.161"/>
        <feComposite operator="in" in2="blur-4"/>
        <feComposite in="SourceGraphic"/>
      </filter>
      <filter id="_Heroku_GIT_" x="352" y="182" width="103" height="61" filterUnits="userSpaceOnUse">
        <feOffset dx="3" dy="3" input="SourceAlpha"/>
        <feGaussianBlur stdDeviation="3" result="blur-5"/>
        <feFlood flood-opacity="0.161"/>
        <feComposite operator="in" in2="blur-5"/>
        <feComposite in="SourceGraphic"/>
      </filter>
      <filter id="Deployment" x="340" y="160" width="122" height="39" filterUnits="userSpaceOnUse">
        <feOffset dx="3" dy="3" input="SourceAlpha"/>
        <feGaussianBlur stdDeviation="3" result="blur-6"/>
        <feFlood flood-opacity="0.161"/>
        <feComposite operator="in" in2="blur-6"/>
        <feComposite in="SourceGraphic"/>
      </filter>
      <filter id="_Express_Security_and_Session_Storage_User_Auth._MERN_STACK_Mongo.DB_Express.js_React.js_Node.js_" x="170" y="66" width="425" height="111" filterUnits="userSpaceOnUse">
        <feOffset dx="3" dy="3" input="SourceAlpha"/>
        <feGaussianBlur stdDeviation="3" result="blur-7"/>
        <feFlood flood-opacity="0.161"/>
        <feComposite operator="in" in2="blur-7"/>
        <feComposite in="SourceGraphic"/>
      </filter>
      <filter id="Server_Side_Deployment" x="159" y="46" width="236" height="39" filterUnits="userSpaceOnUse">
        <feOffset dx="3" dy="3" input="SourceAlpha"/>
        <feGaussianBlur stdDeviation="3" result="blur-8"/>
        <feFlood flood-opacity="0.161"/>
        <feComposite operator="in" in2="blur-8"/>
        <feComposite in="SourceGraphic"/>
      </filter>
      <filter id="_MySQL_MongoDB_" x="175" y="179" width="140" height="62" filterUnits="userSpaceOnUse">
        <feOffset dx="3" dy="3" input="SourceAlpha"/>
        <feGaussianBlur stdDeviation="3" result="blur-9"/>
        <feFlood flood-opacity="0.161"/>
        <feComposite operator="in" in2="blur-9"/>
        <feComposite in="SourceGraphic"/>
      </filter>
      <filter id="Databases" x="164" y="160" width="109" height="39" filterUnits="userSpaceOnUse">
        <feOffset dx="3" dy="3" input="SourceAlpha"/>
        <feGaussianBlur stdDeviation="3" result="blur-10"/>
        <feFlood flood-opacity="0.161"/>
        <feComposite operator="in" in2="blur-10"/>
        <feComposite in="SourceGraphic"/>
      </filter>
    </defs>
    <g id="Group_12" data-name="Group 12" transform="translate(-47 -414)">
      <g class="cls-15-skills" transform="matrix(1, 0, 0, 1, 47, 414)">
        <rect id="Rectangle_7-2" data-name="Rectangle 7" class="cls-1-skills" width="586" height="260.058" transform="translate(7 27.96)"/>
      </g>
      <g class="cls-14-skills" transform="matrix(1, 0, 0, 1, 47, 414)">
        <text id="TECHNICAL_SKILLS-2" data-name="TECHNICAL SKILLS" class="cls-2-skills" transform="translate(7 6)"><tspan x="0" y="19">TECHNICAL SKILLS</tspan></text>
      </g>
      <g class="cls-13-skills" transform="matrix(1, 0, 0, 1, 47, 414)">
        <text id="_HTML_CSS_JavaScript_JQuery_Responsive_Design_Bootstrap_Handlebars_React.js_Ejs_2" data-name="•	HTML
  •	CSS
  •	JavaScript
  •	JQuery
  •	Responsive Design
  •	Bootstrap
  •	Handlebars
  •	React.js
  •	Ejs
  " class="cls-3-skills" transform="translate(30 71)"><tspan x="0" y="14">•	HTML</tspan><tspan x="0" y="31">•	CSS</tspan><tspan x="0" y="48">•	JavaScript</tspan><tspan x="0" y="65">•	JQuery</tspan><tspan x="0" y="82">•	Responsive </tspan><tspan x="0" y="99">Design</tspan><tspan x="0" y="116">•	Bootstrap</tspan><tspan x="0" y="133">•	Handlebars</tspan><tspan x="0" y="150">•	React.js</tspan><tspan x="0" y="167">•	Ejs</tspan></text>
      </g>
      <g class="cls-12-skills" transform="matrix(1, 0, 0, 1, 47, 414)">
        <text id="Browser_Based-2" data-name="Browser Based" class="cls-4-skills" transform="translate(16 52)"><tspan x="0" y="17">Browser Based</tspan></text>
      </g>
      <g class="cls-11-skills" transform="matrix(1, 0, 0, 1, 47, 414)">
        <text id="_Heroku_GIT_2" data-name="•	Heroku
  •	GIT
  " class="cls-3-skills" transform="translate(358 188)"><tspan x="0" y="14">•	Heroku</tspan><tspan x="0" y="31">•	GIT</tspan></text>
      </g>
      <g class="cls-10-skills" transform="matrix(1, 0, 0, 1, 47, 414)">
        <text id="Deployment-2" data-name="Deployment" class="cls-4-skills" transform="translate(346 166)"><tspan x="0" y="17">Deployment</tspan></text>
      </g>
      <g class="cls-9-skills" transform="matrix(1, 0, 0, 1, 47, 414)">
        <text id="_Express_Security_and_Session_Storage_User_Auth._MERN_STACK_Mongo.DB_Express.js_React.js_Node.js_2" data-name="•	Express
  •	Security and Session Storage
  •	User Auth.
  •	MERN STACK (Mongo.DB, Express.js, React.js, Node.js)
  " class="cls-3-skills" transform="translate(176 72)"><tspan x="0" y="14">•	Express</tspan><tspan x="0" y="31">•	Security and Session Storage</tspan><tspan x="0" y="48">•	User Auth.</tspan><tspan x="0" y="65">•	MERN STACK (Mongo.DB, Express.js, React.js, Node.js)</tspan><tspan x="0" y="82"></tspan></text>
      </g>
      <g class="cls-8-skills" transform="matrix(1, 0, 0, 1, 47, 414)">
        <text id="Server_Side_Deployment-2" data-name="Server Side Deployment" class="cls-4-skills" transform="translate(165 52)"><tspan x="0" y="17">Server Side Deployment</tspan></text>
      </g>
      <g class="cls-7-skills" transform="matrix(1, 0, 0, 1, 47, 414)">
        <text id="_MySQL_MongoDB_2" data-name="•	MySQL
  •	MongoDB
  " class="cls-5-skills" transform="translate(181 185)"><tspan x="0" y="14">•	MySQL</tspan><tspan x="0" y="31">•	MongoDB</tspan></text>
      </g>
      <g class="cls-6-skills" transform="matrix(1, 0, 0, 1, 47, 414)">
        <text id="Databases-2" data-name="Databases" class="cls-4-skills" transform="translate(170 166)"><tspan x="0" y="17">Databases</tspan></text>
      </g>
    </g>
</svg>

<svg style={{ zIndex: 95 }} id="about" viewBox="0 0 459 238">
  <defs>
    <filter id="Rectangle_10" x="1" y="21" width="458" height="217" filterUnits="userSpaceOnUse">
      <feOffset dx="3" dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feFlood flood-opacity="0.161"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <filter id="ABOUT" x="0" y="0" width="90" height="41" filterUnits="userSpaceOnUse">
      <feOffset dx="3" dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3" result="blur-2"/>
      <feFlood flood-opacity="0.161"/>
      <feComposite operator="in" in2="blur-2"/>
      <feComposite in="SourceGraphic"/>
    </filter>
  </defs>
  <g id="Group_14" data-name="Group 14" transform="translate(-874 -514)">
    <g class="cls-5-about" transform="matrix(1, 0, 0, 1, 874, 514)">
      <rect id="Rectangle_10-2" data-name="Rectangle 10" class="cls-1-about" width="438" height="197" transform="translate(8 28)"/>
    </g>
    <g class="cls-4-about" transform="matrix(1, 0, 0, 1, 874, 514)">
      <text id="ABOUT-2" data-name="ABOUT" class="cls-2-about" transform="translate(7 6)"><tspan x="0" y="19">ABOUT</tspan></text>
    </g>
    <text id="Hello_I_am_an_experienced_and_knowledgeable_Full_Stack_Web_Developer._I_strive_to_produce_valuable_content_at_exceptional_speeds_using_all_knowledge_gained_in_previous_training._With_an_in-depth_knowledge_of_numerous_Technologies_and_having_a_keen_underst" data-name="Hello, I am an experienced and knowledgeable Full Stack Web Developer. I strive to produce valuable content at exceptional speeds using all knowledge gained in previous training. With an in-depth knowledge of numerous Technologies and having a keen underst" class="cls-3-about" transform="translate(907 580)"><tspan x="0" y="14">Hello, I am an experienced and knowledgeable Full Stack </tspan><tspan x="0" y="31">Web Developer. I strive to produce valuable content at </tspan><tspan x="0" y="48">exceptional speeds using all knowledge gained in </tspan><tspan x="0" y="65">previous training. With an in-depth knowledge of </tspan><tspan x="0" y="82">numerous Technologies and having a keen understanding </tspan><tspan x="0" y="99">of how they interact with other systems, with this is how I </tspan><tspan x="0" y="116">produce quality work.</tspan></text>
  </g>
</svg>
</div>



      </div >
    )
  }
}

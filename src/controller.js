/**
 * Created by Martin on 09/08/2015.
 */
define(["jquery"], function($) {
  return {
    init: function() {
      var container$ = $(".container");

      container$.append(
        $(
          '<div class="row">' +
            '<div class="col-xs-12">' +
            '<div id="photo-header" class="text-center">' +
            //PHOTO (AVATAR)
            '<div id="photo">' +
            '<img src="avatar.jpg" alt="avatar">' +
            "</div>" +
            '<div id="text-header">' +
            "<h1>Hello,<br> my name is <span>Dingxin(Martin)</span><sup>Yu</sup> and this is my resume/cv</h1>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>" +
            '<div class="row">' +
            '<div class="col-xs-12 col-sm-7">' +
            // ABOUT ME
            '<div class="box">' +
            "<h2>About Me</h2>" +
            "<p>Most experienced in Java and Object-oriented programming under Linux/Unix environment." +
            "I am a fast learner and always willing to expand my skill set." +
            "</p>" +
            "</div>" +
            //EDUCATION
            '<div class="box">' +
            "<h2>Education</h2>" +
            '<ul id="education" class="clearfix">' +
            "<li>" +
            '<div class="year pull-left">2016</div>' +
            '<div class="description pull-right">' +
            "<h3>The University of Manchester @ Manchester, United Kingdom</h3>" +
            "<p>Master of Science, Advanced Computer Science</p>" +
            "<p><B>Dissertation:</B> Creating and Implementing a Data Standard For Patient Safety Indicators</p>" +
            "</div>" +
            "</li>" +
            "<li>" +
            '<div class="year pull-left">2014</div>' +
            '<div class="description pull-right">' +
            "<h3>The University of Queensland @ Brisbane, Australia</h3>" +
            "<p> Bachelor of Information Technology, Major in Software Information System.</p>" +
            "<p><B>Thesis Project:</B> Azure Based E-Learning System </p>" +
            "<p> <B>Honors and Awards:</B></p>" +
            "<p> Deans Commendation for High Achievement</p>" +
            "<p> CEED project Scholarship</p>" +
            "</div>" +
            "</li>" +
            "</ul>" +
            "</div>" +
            // EXPERIENCES
            '<div class="box">' +
			"<h2>Experiences</h2>" +
			'<div class="job clearfix">' +
            '<div class="col-xs-3">' +
            '<div class="where">PayPal</div>' +
            '<div class="year">2017 - present </div>' +
            "</div>" +
            '<div class="col-xs-9">' +
            '<div class="profession">Data Engineer</div>' +
            '<div class="description">Tech Stack: Scala, Hadoop, Spark, ES2015, PostCSS, NodeJS.<br/>' +
            "DAMA Team, Risk Department" +
            "</div>" +
            "</div>" +
            "</div>" +
            '<div class="job clearfix">' +
            '<div class="col-xs-3">' +
            '<div class="where">Lufax</div>' +
            '<div class="year">2016 - 2017 </div>' +
            "</div>" +
            '<div class="col-xs-9">' +
            '<div class="profession">Software Development Engineer</div>' +
            '<div class="description">Tech Stack: React, ReachNative, Webpack, ES2015, PostCSS, NodeJS.<br/>' +
            " Hybrid Development team." +
            "</div>" +
            "</div>" +
            "</div>" +
            '<div class="job clearfix">' +
            '<div class="col-xs-3">' +
            '<div class="where">SAP Labs China</div>' +
            '<div class="year">2015 </div>' +
            "</div>" +
            '<div class="col-xs-9">' +
            '<div class="profession">Front-End Software Engineer / JavaScript Engineer</div>' +
            '<div class="description">My major task is the development of CVOM (Common Visual Object Model), ' +
            "an object-oriented JavaScript based data visualization application within an agile scrum team. In " +
            "addition, I delivered some high-quality features for SAP Lumira including maven build script and " +
            "unit test. And I therefore got a great understanding on cutting-edge technology of business intelligence " +
            "and industry standard development requirement.</div>" +
            "</div>" +
            "</div>" +
            '<div class="job clearfix">' +
            '<div class="col-xs-3">' +
            '<div class="where">Bneing Technology</div>' +
            '<div class="year">2012</div>' +
            "</div>" +
            '<div class="col-xs-9">' +
            '<div class="profession">Web Developer Internship</div>' +
            '<div class="description">Learned Python Django framework. ' +
            "Also responsible for project documentation update.</div>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>" +
            '<div class="col-xs-12 col-sm-5">' +
            // CONTACT
            '<div class="box clearfix">' +
            "<h2>Contact</h2>" +
            '<div class="contact-item">' +
            '<div class="icon pull-left text-center"><span class="fa fa-phone fa-fw"></span></div>' +
            '<div class="title only pull-right">+86 15801800839 / +44 7442661249</div>' +
            "</div>" +
            '<div class="contact-item">' +
            '<div class="icon pull-left text-center"><span class="fa fa-envelope fa-fw"></span></div>' +
            '<div class="title only pull-right">dingxin.yu@uqconnect.edu.au</div>' +
            "</div>" +
            '<div class="contact-item">' +
            '<div class="icon pull-left text-center"><span class="fa fa-linkedin fa-fw"></span></div>' +
            '<div class="title pull-right">LinkedIn</div>' +
            '<div class="description pull-right">https://uk.linkedin.com/in/martinyu1</div>' +
            "</div>" +
            "</div>" +
            // SKILLS
            '<div class="box">' +
            "<h2>Skills</h2>" +
            '<div class="skills">' +
            '<div class="item-skills" data-percent="1.00" style="overflow: hidden; width:' +
            ' 238.312px;">HTML/CSS/JavaScript</div>' +
            '<div class="item-skills" data-percent="0.90" style="overflow: hidden; width:' +
            ' 215.484px;">Java/Python</div>' +
            '<div class="item-skills" data-percent="0.80" style="overflow: hidden; width:' +
            ' 192.656px;">MySQL/MongoDB</div>' +
            '<div class="item-skills" data-percent="0.75" style="overflow: hidden; width:' +
            ' 131.242px;">Scala/Hadoop/Spark</div>' +
            '<div class="item-skills" data-percent="0.55" style="overflow: hidden; width: 131.242px;">' +
            "iOS Development </div>" +
            '<div class="skills-legend clearfix">' +
            '<div class="legend-left legend">Beginner</div>' +
            '<div class="legend-left legend"><span>Proficient</span></div>' +
            '<div class="legend-right legend"><span>Expert</span></div>' +
            '<div class="legend-right legend">Master</div>' +
            "</div>" +
            "</div>" +
            "</div>" +
            //LANGUAGES
            '<div class="box">' +
            "<h2>Languages</h2>" +
            '<div id="language-skills">' +
            '<div class="skill">Chinese <div class="icons pull-right"><div style="width: 80%; overflow: hidden;' +
            ' height: 14px;" class="icons-red"></div></div></div>' +
            '<div class="skill">English <div class="icons pull-right"><div style="width: 60%; overflow: hidden;' +
            ' height: 14px;" class="icons-red"></div></div></div>' +
            "</div>" +
            "</div>" +
            // HOBBIES
            '<div class="box">' +
            "<h2>Hobbies</h2>" +
            '<div class="hobby">Photography</div>' +
            '<div class="hobby">Fitness</div>' +
            '<div class="hobby">Programming</div>' +
            "</div>" +
            "</div>" +
            "</div>"
        )
      );
    }
  };
});

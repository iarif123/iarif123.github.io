var commandText = function(text){
  return "[[g;#EEEEEE;]" + text + "]";
}

var titleText = function(text){
  return "[[u;inherit;]" + text + "]";
}


var App = {
  intro: function(ret){
    if (typeof ret === 'undefined') ret = false;
    var greetText =
      "####################################################################################\n"+
      "|[[b;#00DE12;]\t\t _______   _______   _______   ______   ______       __               ]\t|\n"+
      "|[[b;#00DE12;]\t\t|__   __| |   _   | |__   __| |   ___| |___   |     /  \\            ]  \t|\n"+
      "|[[b;#00DE12;]\t\t   | |    |  |_| /     | |    |  |___     /  /     / /\\ \\            ] \t|\n"+
      "|[[b;#00DE12;]\t\t   | |    |  __ |      | |    |   ___|   /  /     / ____ \\            ]\t|\n"+
      "|[[b;#00DE12;]\t\t __| |__  | |  \\ \\     | |    |  |___   /  /__   / /    \\ \\          ] \t|\n"+
      "|[[b;#00DE12;]\t\t|_______| |_|   \\_\\    |_|    |______| |______| /_/      \\_\\      ]\t\t|\n"+
      "|\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  |\n"+
      "|\t\tHi, I'm " + commandText('Irteza Arif') + " - Backend Web Developer in Waterloo, Ontario.\t\t |\n"+
      "|\t\tPlease type " +commandText('ls')+" or " +commandText('help')+ " for a list of commands.    \t\t\t\t\t\t|\n"+
      "|\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  |\n"+
      "####################################################################################\n";
    if (!ret) {
        this.echo("\n" + greetText);
    } else {
        return greetText;
    }
  },
  ls: function(){
    this.exec('menu');
  },
  rm: function(command){
    this.echo();
    this.echo("|  Oh no!! don't delete that!");
    this.echo();
  },
  cd: function(command){
    if(command){
      this.exec(command);
    }else{
      this.echo("|  directory is not selected.");
    }
  },
  find: function(command){
    if(command){
      this.exec(command);
    }else{
      this.echo("|  Please enter what you are looking for.");
    }
  },
  grep: function(command){
    if(command){
      this.exec(command);
    }else{
      this.echo("|  Please enter what you are looking for.");
    }
  },
  help: function(){
    this.exec('menu');
  },
  menu: function(){
    // this.echo();
    // this.echo("|  " + commandText("intro") + "               - Display Message of the Day");
    this.echo();
    this.echo("|  " + commandText("about") + "              - Summary of me");
    this.echo("|  " + commandText("work") + "               - My Professional Experience");
    this.echo("|  " + commandText("projects") + "           - Recent projects of mine");
    this.echo("|  " + commandText("skills") + "             - What I can do");
    this.echo("|  " + commandText("awards") + "             - Awards and features for my work");
    this.echo("|");
    this.echo("|  " + commandText("social") + "             - My Social Status");
    this.echo("|  " + commandText("contact") + "            - Contact me")
    this.echo("|");
    this.echo("|  " + commandText("download") + "           - DOWNLOAD MY RESUME! (pdf) ");
    this.echo("|  " + commandText("all") + "                - [[b;#00DE12;]Run all commands (recommended)]");
    this.echo();
  },
  social: function(){
    this.echo();
    this.echo("|  " + commandText("website") + ":      http://iarif123.github.io");
    this.echo("|  " + commandText("GitHub") + ":       http://github.com/iarif123");
    this.echo("|  " + commandText("LinkedIn") + ":     https://ca.linkedin.com/in/irteza-arif-9bb2b04b");
    this.echo("|  " + commandText("Twitter") + ":      http://twitter.com/aweshams");
    this.echo("|  " + commandText("facebook") + ":     http://facebook.com/irteza.shams");
    this.echo();
  },
  github: function(){
    this.echo();
    this.echo("|  http://github.com/iarif123");
    this.echo();
  },

  facebook: function(){
    this.echo();
    this.echo("|  https://facebook.com/irteza.shams");
    this.echo();
  },

  linkedin: function(){
    this.echo();
    this.echo("|  https://ca.linkedin.com/in/irteza-arif-9bb2b04b");
    this.echo();
  },

  twitter: function(){
    this.echo();
    this.echo("|  https://twitter.com/aweshams");
    this.echo();
  },
  exp: function(){
    this.exec('work');
  },
  works: function(){
    this.exec('work');
  },
  work: function(){
    this.echo();
    this.echo("|  " + commandText('Automation Engineer') + "                            at " + commandText("Bazaarvoive") + "\n|  Sept - Dec 2015");
    this.echo("|    • Designed test modules for all layers of core web services (Unit Tests, Integration Tests and System Level Tests) ");
    this.echo("|    • Wrote orchestration code and set up test environments locally and on the cloud (Jenkins and Amazon Web Services) ");
    this.echo("|    • Automated integration of mock test data and created SDKs to efficiently add and remove test data while writing tests.");
    this.echo("|    • Wrote UI code for test result analytics and algorithms to identify core processes that required extensive testing.");
    this.echo("|    • Wrote UI and load tests for core applications.");
    this.echo("|");
    this.echo("|  " + commandText('Application Developer') + "                          at " + commandText("Validus Research Inc.") + "\n|  Sept - Dec 2014");
    this.echo("|    • Created a custom, single-page, responsive web application using AngularJS to replace a legacy line-of-business web application.");
    this.echo("|    • Worked with a team of developers to upgrade an existing ASP.NET business web application for a critical 2014 release. ");
    this.echo("|    • Created new and updated existing ASP.NET template-based server controls that were used in various places throughout the application.");
    this.echo("|    • Updated the data access layer when needed. Created and modified SQL DDL scripts.");
    this.echo("|");
    this.echo("|  " + commandText('Web Developer') + "                                  at " + commandText("Canadian Medical Protective Associartion") + "\n|  Jan - Apr 2014");
    this.echo("|    • Added significant usability enhancements to legacy pages using dynamic HTML and the jQuery JavaScript framework.");
    this.echo("|    • UI enhancements included drag-n-drop DOM elements, tree views, specialize etc.");
    this.echo("|    • Created HTML content for posting on CMPA's member portal, employee portal and public web site.");
    this.echo("|    • Developed Web applications for internal CMPA users.");
    this.echo("|    • Wrote unit tests and performed extensive debugging on existing and new code.");
    this.echo("|    • Performed large scale code reviews and restructures.");
    this.echo("|");
    this.echo("|  " + commandText('Java Developer') + "                                 at " + commandText("eHealth Ontario") + "\n|  May - Aug 2013");
    this.echo("|    • Involved in architecting various Business Layer and Data Management components of this multi-tiered web based system over J2EE architecture.");
    this.echo("|    • Enhanced and supported core business web applications for programs.");
    this.echo("|    • Wrote and modified UI components using JQuery and Kendo UI.");
    this.echo("|    • Provided web UI expertise to design sessions, documented technical designs and supported QA and performance testing.");
    this.echo("|    • Debugging and fixing JavaScript and CSS issues.");
    this.echo("|    • Developed and maintained SharePoint site for the Portal Services team and provided user support to the business team.");
    this.echo("|");
  },
  whoami: function(){
    this.exec('about');
  },
  about: function(){
    this.echo();
    this.echo("|  Name:         " + commandText('Irteza Arif'));
    this.echo("|");
    this.echo("|  Summary:      I am a Backend Web Developer (primarily " + commandText('Node.js') + ", " + commandText('Java') + ") and \n|                develop games as an interest (Unity).");
    this.echo("|                I am a graduate from " + commandText('The University of Waterloo')+". I did my undergrad in \n|                "+commandText('Electrical and Computer Engineering')+".");
    this.echo("|                I also do my fair share of front end development using technologies \n|                such as " + commandText('Angular.js') + " and " + commandText('React.js'));
    this.echo("|");
    this.echo("|  Employment:   I am currently looking for " + commandText("work oppertunities") + " in the " + commandText("GTA and Kitcher/Waterloo") + " area. \n|                Get in touch if you'd like to discuss a proposal!");
    this.echo();
  },
  project: function(){
    this.exec('projects');
  },
  projects: function(){
    this.echo();
    this.echo("|  " + commandText('ParkAid') + "   https://github.com/iarif123/parkaid            Gait Assistive Device for Parkinson's Disease Patientes          \n|    // Embedded & Full Stack Development");
    this.echo("|  " + commandText('Sunshine') + "  https://github.com/iarif123/sunshine           Simple android Weather App           \n|    // Full Stack Development");
    this.echo();
  },
  skill: function(){
    this.exec('skills');
  },
  skills: function(){
    this.echo("|");
    // this.echo("|  " + commandText('Web Back-End'));
    // this.echo("|");
    this.echo("|  [[g;#B2D100;]Web Back-End] ");
    this.echo("|  " + commandText('Node.js w/ Express') + "     ##[[g;#5BD100;]############################################]       ##");
    this.echo("|  " + commandText('Java w/ REST') + "           ##[[g;#B2D100;]#######################################]            ##");
    this.echo("|");
    // this.echo("|  " + commandText("Web Front-End"));
    // this.echo("|");
    this.echo("|  [[g;#B2D100;]Web Front-End] ");
    this.echo("|  " + commandText('Javascript') + "             ##[[g;#5BD100;]############################################]       ##");
    this.echo("|  " + commandText('CSS / SASS') + "             ##[[g;#B2D100;]#######################################]            ##");
    this.echo("|  " + commandText('HTML5') + "                  ##[[g;#B2D100;]#######################################]            ##");
    this.echo("|");
    // this.echo("|  " + commandText("Database"));
    // this.echo("|");
    this.echo("|  [[g;#B2D100;]Database] ");
    this.echo("|  " + commandText('MySQL') + "                  ##[[g;#B2D100;]##############################]                     ##");
    this.echo("|  " + commandText('MongoDB') + "                ##[[g;#D1B900;]#########################]                          ##");
    this.echo("|");
    this.echo("|  [[g;#B2D100;]Native Mobile / Game Dev] ");
    // this.echo("|  " + commandText("Native Mobile / Game Dev"));
    // this.echo("|");
    this.echo("|  " + commandText('Unity (C#)') + "             ##[[g;#D1B900;]#########################]                          ##");
    this.echo("|  " + commandText('Android') + "                ##[[g;#D13F00;]######################]                             ##");
    this.echo("|  " + commandText('IOS') + "                    ##[[g;#D13F00;]##########]                                         ##");
    this.echo("|");
    this.echo("|  [[g;#B2D100;]ETC] ");
    // this.echo("|");
    this.echo("|  " + commandText('Ubuntu Linux') + "           ##[[g;#B2D100;]##############################]                     ##");
    this.echo("|  " + commandText('Arduino') + "                ##[[g;#D1B900;]#########################]                          ##");
    this.echo("|  " + commandText('Heroku') + "                 ##[[g;#D1B900;]#########################]                          ##");
    this.echo("|  " + commandText('AWS') + "                    ##[[g;#D13F00;]#########]                                          ##");
    this.echo();
  },
  contact: function(){
    this.echo();
    this.echo("|  " + commandText("Email") + ":         iarif@uwaterloo.ca");
    this.echo("|  " + commandText("Phone") + ":         (+1) 226 750 6052");
    this.echo();
  },
  credit: function(){
    this.exec('credits');
  },
  credits: function(){
    this.echo();
    this.echo("|  Site built by " + commandText('Irteza Arif'));
    this.echo("|  Using " + commandText('Jquery Terminal Emulator') + " by " + commandText('Jakub Jankiewicz') + ": http://terminal.jcubic.pl");
    this.echo();
  },
  award: function(){
    this.exec('awards');
  },
  awards: function(){
    this.echo();
    this.echo("|  " + commandText('Top 10 in WearHacks Hackathon') + "                                Oct  2015  \n|   | WearHacks                     project: http://devpost.com/software/omgee");
    this.echo("|  " + commandText('3rd Place in Rock and Code Hackathon') + "                         Sept 2015  \n|   | Sony Music Entertainment      project: http://devpost.com/software/xplora");
    this.echo("|  " + commandText('2nd Place in Stock Investment Competition') + "                    Jan  2015  \n|   | Dunamnu");
    this.echo("|  " + commandText('Financial Risk Manager') + "                                       Dec  2014  \n|   | Global Association of Risk Professionals");
    this.echo();
  },
  download: function(){
    window.location.href = "https://iarif123.github.io/Resume.pdf";
  },
  website: function(){
    window.location.href = "http://iarif123.github.io";
  },
  resume: function(){
    this.echo();
    this.echo("|  " + commandText("DOWNLOAD MY RESUME!") + "       https://iarif123.github.io/Resume.pdf");
    this.echo();
  },
  cls: function(){
    this.clear();
  },
  clear: function(){
    this.clear();
  },
  echo: function(command){
    this.echo(command);
  },
  all: function(){
    this.clear();
    this.exec('intro');
    this.exec('about');
    this.exec('work');
    this.exec('projects');
    this.exec('skills');
    this.exec('awards');
    this.exec('social');
    this.exec('contact');
    this.exec('resume');
  },
  sudo: function(){
    this.exec('login');
  },
  login: function(){
    this.echo();
    this.echo("|  login function currently under development");
    this.echo();
  },
  du: function(){
    this.echo();
    this.echo("|  100%");
    this.echo();
  },
  mv: function(){
    this.echo();
    this.echo("|  dont't move!");
    this.echo();
  },
  cp: function(){
    this.echo();
    this.echo("|  dont't copy!");
    this.echo();
  },
  mkdir: function(){
    this.echo();
    this.echo("|  mkdir function currently under development");
    this.echo();
  },
  mobile: function(){
    that.clear();
    that.echo("[[g;#5BD100;]Irteza Arif]");
    that.echo("A Back-End Programmer");
    that.echo("Machine Learning, NLP, Game, Web");
    that.echo();
    that.echo("[[g;#D13F00;]EXPERIENCE]");
    that.echo("[[g;#B2D100;]Automation Engineer at Bazaarvoice 2015]");
    that.echo("[[g;#B2D100;]Application Developer at Validus Research Inc. 2014]");
    that.echo("[[g;#B2D100;]Web Developer at Canadian Medical Protective Association  2014]");
    that.echo("[[g;#B2D100;]Java Developer at eHealth Ontario  2013]");
    that.echo();
    that.echo("[[g;#D13F00;]EDUCATION]");
    that.echo("B.A.S.c in Electrical Engineering | University of Waterloo");
    that.echo();
    that.echo("[[g;#B2D100;]Website]");
    that.echo("http://iarif123.github.io");
    that.echo("[[g;#B2D100;]GitHub]");
    that.echo("http://github.com/iarif123");
    that.echo("[[g;#B2D100;]Email]");
    that.echo("iarif@uwaterloo.ca");
    that.echo();
    that.echo("[[g;#D13F00;]Resume]");
    that.echo("https://iarif123.github.io/Resume.pdf");
    that.echo();
    that.echo("Access with desktop for more!");
    that.echo();
  },
}

jQuery(document).ready(function($) {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      //window.location.href = "http://keon.io/resume";
    $('#about').terminal(App, {
      greetings: function(cb){
        that = this;
        // cb(App.intro(true));
        cb(App.mobile());
      },

      onBlur: function() {
        // prevent loosing focus
        return false;
      },
      completion: true,
      checkArity: false
    });
  } else {
    $('#about').terminal(App, {
      greetings: function(cb){
        cb(App.intro(true));
      },

      onBlur: function() {
          // prevent loosing focus
          return false;
      },
      completion: true,
      checkArity: false
    });
  }
});

import { Component, OnInit } from '@angular/core';
// Jsons
import eventsJson from '../../assets/jsons/events.json';
import interestsJson from '../../assets/jsons/interests.json';
import workJson from '../../assets/jsons/work.json';
import skillsJson from '../../assets/jsons/skills.json';
import socialsJson from '../../assets/jsons/socials.json';
import projectJson from '../../assets/jsons/projects.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // forced to reasign for acces in the html
  public work = workJson;
  public events = eventsJson;
  public interests = interestsJson;
  public skills = skillsJson;
  public socials = socialsJson;
  public projects = projectJson;

  ngOnInit(): void {
    // progress bar
    this.skills.forEach(sk => {
      let tmpString = '║ ';
      for (let i = 0; i < 10; i++) {
        if (i < sk.level) {
          // create the string
          tmpString += '██';
        }
        else {
          tmpString += '──';
        }
      }
      tmpString += ' ║';
      (sk as any).levelstr = tmpString;
    });

    // skill shuffle
    this.interests = this.interests.sort(() => .5 - Math.random());
  }
}


import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

// Jsons english
import eventsJson_en from '../../assets/jsons/en/events_en.json';
import interestsJson_en from '../../assets/jsons/en/interests_en.json';
import workJson_en from '../../assets/jsons/en/work_en.json';
import skillsJson_en from '../../assets/jsons/en/skills_en.json';
import socialsJson_en from '../../assets/jsons/en/socials_en.json';
import projectJson_en from '../../assets/jsons/en/projects_en.json';

// Jsons french
// import eventsJson_fr from '../../assets/jsons/fr/events_fr.json';
import interestsJson_fr from '../../assets/jsons/fr/interests_fr.json';
import workJson_fr from '../../assets/jsons/fr/work_fr.json';
import skillsJson_fr from '../../assets/jsons/fr/skills_fr.json';
// import projectJson_fr from '../../assets/jsons/fr/projects_fr.json';

// last update
import lastUpdateJson from '../../assets/jsons/lastUpdatedDate.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('translations_en');
    this.changeToEN();
  }

  public work = workJson_en;
  public events = eventsJson_en;
  public interests = interestsJson_en;
  public skills = skillsJson_en;
  public socials = socialsJson_en;
  public projects = projectJson_en;

  public lastUpdate = lastUpdateJson.last;

  changeToFR(): void {
    this.translate.use('translations_fr');
    this.work = workJson_fr;
    // this.events = eventsJson_fr;
    this.interests = interestsJson_fr;
    this.skills = skillsJson_fr;
    // this.projects = projectJson_fr;
  }

  changeToEN(): void {
    this.translate.use('translations_en');
    this.work = workJson_en;
    this.events = eventsJson_en;
    this.interests = interestsJson_en;
    this.skills = skillsJson_en;
    this.socials = socialsJson_en;
    this.projects = projectJson_en;
  }

  // forced to reasign for acces in the html


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


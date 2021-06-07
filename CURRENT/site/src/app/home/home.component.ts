import { Component, OnInit } from '@angular/core';
// Jsons
import eventsJson from '../../assets/jsons/events.json';
import interestsJson from '../../assets/jsons/interests.json';
import workJson from '../../assets/jsons/work.json';
import skillsJson from '../../assets/jsons/skills.json';
import socialsJson from '../../assets/jsons/socials.json';

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

  ngOnInit(): void {
  }
}


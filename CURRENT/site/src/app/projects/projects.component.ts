import { Component, OnInit } from '@angular/core';
import projectsJson from '../../assets/jsons/projects.json';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  // forced to reasign for acces in the html
  public projects = projectsJson;

  ngOnInit(): void {
  }

}

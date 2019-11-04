import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/projects/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects;

  constructor(
    public _project: ProjectService
  ) { }

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects(){
    this._project.getProjects().subscribe(
      result => {
        this.projects = result;
      },
      error => {
        console.log(error);
      }
    )
  }

  

}

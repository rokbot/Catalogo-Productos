import { Component, OnInit } from '@angular/core';
import { VikuaService, Project } from 'src/app/services/vikua.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent implements OnInit {

  projects:Project[] = [];
  constructor(private _vikuaService: VikuaService, private router:Router) {
    console.log('constructor');
   }

  ngOnInit() {
    this.projects = this._vikuaService.getProjects();
    console.log(this.projects)
  }

  seeProject(idx:number){
    this.router.navigate(['/project',idx]);

  }

}

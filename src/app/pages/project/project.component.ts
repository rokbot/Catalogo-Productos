import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VikuaService } from 'src/app/services/vikua.service';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  project:any = {}
  

  constructor(private activatedRoute:ActivatedRoute, private _vikuaService: VikuaService) { 

    this.activatedRoute.params.subscribe(params=>{
      this.project = this._vikuaService.getProject(params['id']);
    })

  }

  getURl(){
    return this.project.solucion
  }

  

  ngOnInit(): void {
  }

}

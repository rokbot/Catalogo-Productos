import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VikuaService } from 'src/app/services/vikua.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  safeSrc: SafeResourceUrl;
  project:any = {}
  

  constructor(private activatedRoute:ActivatedRoute, private _vikuaService: VikuaService,
               private sanitizer: DomSanitizer) { 


    this.activatedRoute.params.subscribe(params=>{
      this.project = this._vikuaService.getProject(params['id']);
    })

    this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl(this.getURl());

  }

  getURl(){
    return this.project.solucion
  }

  

  ngOnInit(): void {
  }

}

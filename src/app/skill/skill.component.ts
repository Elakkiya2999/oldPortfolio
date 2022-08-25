import { Component, OnInit } from '@angular/core';
// import { AppService } from '../app.service'

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {
 
  // skills

  constructor(){}
  // constructor(private appService : AppService) { }

  ngOnInit(): void {
    // this.skills = this.appService.skills()
  }

}

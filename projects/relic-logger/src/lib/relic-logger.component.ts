import { Component, OnInit } from '@angular/core';
import { RelicLoggerService } from './relic-logger.service';

@Component({
  selector: 'lib-relic-logger',
  template: `
    <p>
      relic-logger works!
    </p>
  `,
  styles: [
  ]
})
export class RelicLoggerComponent implements OnInit {

  constructor(private svc: RelicLoggerService) { }

  ngOnInit(): void {
    this.svc.newRelicTest("message test","plugin section","vghhcvujk65jj","gddgddfgfcbb").subscribe( data => {
      console.log("data: " + data);
    })
  }

}

import {Component, OnInit} from '@angular/core';
import {EventService} from '../shared/event.service';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute} from '@angular/router';

@Component( {
  // tslint:disable-next-line:component-selector
  selector: 'events-list',
  templateUrl: './events-list.component.html'
})

export class EventsListComponent implements OnInit {
  events: any[];
  constructor(private eventService: EventService,
              private toastrService: ToastrService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    debugger;
    this.events = this.route.snapshot.data['events'];
  }

  handleEventClick(name: any) {
    this.toastrService.success(name);
  }
}

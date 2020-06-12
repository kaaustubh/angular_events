import {Component, OnInit} from '@angular/core';
import {EventService} from '../shared/event.service';
import {ToastrService} from 'ngx-toastr';

@Component( {
  // tslint:disable-next-line:component-selector
  selector: 'events-list',
  templateUrl: './events-list.component.html'
})

export class EventsListComponent implements OnInit {
  events: any[];
  constructor(private eventService: EventService,
              private toastrService: ToastrService) {
  }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  handleEventClick(name: any) {
    this.toastrService.success(name);
  }
}

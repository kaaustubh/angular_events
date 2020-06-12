import {Component, OnInit} from '@angular/core';
import {EventService} from '../../shared/event.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})

export class CreateEventComponent implements OnInit {
  isDirty = true;
  eventDate = '';
  duration = '';
  level = '';

  constructor(private eventService: EventService, private route: ActivatedRoute) {
  }
  event: any;
  ngOnInit() {}
}

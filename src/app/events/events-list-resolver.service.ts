import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {EventService} from '../shared/event.service';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable()
export class EventsListResolverService implements Resolve<any> {
  constructor(private eventService: EventService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return this.eventService.getEvents().pipe(map(events => events));
  }

  // resolve() {
  //   return this.eventService.getEvents().pipe(map(events => events));
  // }
}

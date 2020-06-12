import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { EventsAppComponent } from './events-app.component';
import {EventsListComponent} from './events/events-list.compnent';
import {EventThumbnailComponent} from './events/event-thumbnail.component';
import {NavbarComponent} from './nav/navbar.component';
import {EventService} from './shared/event.service';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EventDetailsComponent} from './events/details/event-details.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './routes';
import {CreateEventComponent} from './events/create/create-event.component';
import {Error404Component} from './events/errors/404.component';
import {EventRouteActivator} from './events/details/event-route-activator';
import {EventsListResolverService} from './events/events-list-resolver.service';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavbarComponent,
    CreateEventComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    ToastrModule.forRoot()
  ],
  providers: [EventService, EventRouteActivator, EventsListResolverService],
  bootstrap: [EventsAppComponent]
})

// export function checkDirtyState(component: CreateEventComponent) {
//   if (component.isDirty) {
//     return window.confirm('Are you sure?');
//   }
//   return true;
// }
export class AppModule { }

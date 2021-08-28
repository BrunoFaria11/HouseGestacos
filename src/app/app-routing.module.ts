import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './containers/about-us/about-us.component';
import { ContactComponent } from './containers/contact/contact.component';
import { GeresComponent } from './containers/geres/geres.component';
import { HomeComponent } from './containers/home/home.component';
import { RoomDetailComponent } from './containers/room-detail/room-detail.component';
import { RoomsComponent } from './containers/rooms/rooms.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'rooms', component: RoomsComponent },
  { path: 'room-detail', component: RoomDetailComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'geres', component: GeresComponent },

  { path: '**', component: HomeComponent }, 
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],

  })
export class AppRoutingModule {

}

import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { InfoNavBarComponent } from './components/info-nav-bar/info-nav-bar.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { HomeComponent } from './containers/home/home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { WeatherComponent } from './components/weather/weather.component';
import { RoomsComponent } from './containers/rooms/rooms.component';
import { BannerComponent } from './components/banner/banner.component';
import { RoomItemComponent } from './components/room-item/room-item.component';
import { RoomDetailComponent } from './containers/room-detail/room-detail.component';
import { AboutUsComponent } from './containers/about-us/about-us.component';
import { ContactComponent } from './containers/contact/contact.component';
import { GeresComponent } from './containers/geres/geres.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HistoryItemComponent } from './components/history-item/history-item.component';
import { AdditionalInfoSectionComponent } from './components/additional-info-section/additional-info-section.component';
import { TestimonialsSectionComponent } from './containers/home/sections/testimonials-section/testimonials-section.component';
import { GallerySectionComponent } from './containers/home/sections/gallery-section/gallery-section.component';
import { RoomsSectionComponent } from './containers/home/sections/rooms-section/rooms-section.component';
import { ServicesSectionComponent } from './components/services-section/services-section.component';
import { InitialInfoSectionComponent } from './containers/home/sections/initial-info-section/initial-info-section.component';
import { BannerSectionComponent } from './containers/home/sections/banner-section/banner-section.component';
import { ServiceItemComponent } from './components/service-item/service-item.component';
import { BasicRoomComponent } from './components/basic-room/basic-room.component';
import { SectionHeaderComponent } from './components/section-header/section-header.component';
import { WebsiteDataService } from './core/services/website-data.service';
import { HttpModule } from '@angular/http';

import {
  CommonModule,
  HashLocationStrategy,
  LocationStrategy,
} from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    InfoNavBarComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    WeatherComponent,
    RoomsComponent,
    BannerComponent,
    RoomItemComponent,
    RoomDetailComponent,
    AboutUsComponent,
    ContactComponent,
    GeresComponent,
    HistoryItemComponent,
    SectionHeaderComponent,
    AdditionalInfoSectionComponent,
    ServicesSectionComponent,
    InitialInfoSectionComponent,
    RoomsSectionComponent,
    BannerSectionComponent,
    TestimonialsSectionComponent,
    GallerySectionComponent,
    ServiceItemComponent,
    BasicRoomComponent,
    SectionHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FontAwesomeModule,
    CarouselModule,
    CommonModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    WebsiteDataService, 
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

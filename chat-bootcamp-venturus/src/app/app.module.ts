import { DogService } from './services/dog.services';
import { ChatService } from './chat/chat.service';
import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { ChatItemComponent } from './chat/chat-item/chat-item.component';
import { ChatHeaderComponent } from './chat/chat-header/chat-header.component';
import { routing } from './app.routes';
import { SobreComponent } from './sobre/sobre.component';
import { ConnectionService } from './sobre/connection.service';
import { HttpClientModule } from '@angular/common/http';
import { DogLocationComponent } from './dog-location/dog-location.component';
import { CountriesComponent } from './dog-location/countries/countries.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CountryCitiesComponent } from './dog-location/country-cities/country-cities.component';
import { AgmCoreModule } from '@agm/core';
import { UsersComponent } from './dog-location/users/users.component';
import { UserDetailComponent } from './dog-location/user-detail/user-detail.component';
import { CountryService } from './services/country.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { YoutubePlayerModule } from 'ngx-youtube-player';
import { ToastModule } from 'ng2-toastr/ng2-toastr';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    ChatItemComponent,
    ChatHeaderComponent,
    SobreComponent,
    DogLocationComponent,
    CountriesComponent,
    CountryCitiesComponent,
    UsersComponent,
    UserDetailComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule,
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAx9FVTqx9XB_EBAv2vCjOIQ3jQOu6aMM4'
    }),
    BrowserAnimationsModule,
    YoutubePlayerModule,
    ToastModule.forRoot()

  ],
  providers: [ChatService, ConnectionService, CountryService, DogService],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule,
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: ''
    })
  ],
  providers: [ChatService, ConnectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }

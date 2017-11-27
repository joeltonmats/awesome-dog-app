import { DogLocationComponent } from './dog-location/dog-location.component';
import { ChatComponent } from './chat/chat.component';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { SobreComponent } from './sobre/sobre.component';
import { UserDetailComponent } from './dog-location/user-detail/user-detail.component';

const appRoutes: Routes = [
    { path: '', component: DogLocationComponent },
    { path: 'dog-location', component: DogLocationComponent },
    { path: 'user-detail/:id', component: UserDetailComponent },
    { path: 'chat', component: ChatComponent },
    { path: 'sobre', component: SobreComponent },
    { path: '**', component: ChatComponent }
];

export const routing = RouterModule.forRoot(appRoutes);


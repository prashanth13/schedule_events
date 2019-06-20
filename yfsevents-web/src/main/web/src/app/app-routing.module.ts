import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PartnerNGOComponent } from './partner-ngo/partner-ngo.component';
import { EventListComponent } from './events/event-list.component';
import { AddEventComponent } from './events/add-event.component';
import {VolunteerComponent}  from './volunteer/volunteer.component';
import { InventoryDataComponent } from './inventory-data/inventory-data.component';
import { CollegeRegistrationComponent } from './college-registration/college-registration.component';
import {SendMailComponent} from "./send-mail/send-mail.component";
import { WelcomeComponent } from './welcome/welcome.component';
import { InventoryListComponent } from './inventory-data/inventory-list.component';
import { PartnerNgoGridComponent } from './partner-ngo-grid/partner-ngo-grid.component';
import { CollegeRegistrationGridComponent } from './college-registration-grid/college-registration-grid.component';
import { LoginComponent}from './login/login.component';
import { ResetComponent}from './reset/reset.component';
import { RegisteredEventsComponent}from './registered-events/registered-events.component';
import {RegisterComponent}from "./register/register.component";
import {VolunteerGridComponent} from './volunteer-grid/volunteer-grid.component';
import{SelectablevolunteerComponent} from './selectablevolunteer/selectablevolunteer.component';

import { BulkUploadComponent } from './bulk-upload/bulk-upload.component';

const routes: Routes = [
  {
    path: 'collegeregistration', children:[
    { path: '', component:CollegeRegistrationComponent },
    { path: ':mode/:id', component: CollegeRegistrationComponent}
    ]
    },
    {
      path: 'grid/collegeregistration', component: CollegeRegistrationGridComponent
    },
    {
      path: 'bulk/volunteer', component: BulkUploadComponent
    },
{
path: 'login', component: LoginComponent
},
  {
    path: 'inventorydata', children:[
      {path: '', component:InventoryDataComponent},
      { path: ':mode', component: InventoryDataComponent}
    ]
  },
  {
    path:'inventorylist',component:InventoryListComponent
  },
  {
  path: 'grid/partnerngo', component: PartnerNgoGridComponent
  },

  {
    path: 'partnerngo', children:[
      {path: '', component:PartnerNGOComponent},
      { path: ':mode/:id', component: PartnerNGOComponent}
    ]
  },
  {path:'events',component:EventListComponent},
  {path:'home',component:WelcomeComponent},
  {path:'reset',component:ResetComponent},
  {path:'registered-events',component:RegisteredEventsComponent},
  {path:'addevent',component:AddEventComponent},
  {
    path:'email',component:SendMailComponent
  },
   {
    path: 'grid/volunteer', component: VolunteerGridComponent
    },
  {
  path: 'volunteer', children:[
   {path: '', component: VolunteerComponent},
  {path: ':mode/:id', component: VolunteerComponent}
  ]
  },

{

path: '**', redirectTo: 'home'
},
{
path: 'register', component: RegisterComponent
  },
  {
    path:'selectVolenteer',component:SelectablevolunteerComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

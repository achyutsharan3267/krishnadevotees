import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainPageComponent } from "./main-page/main-page.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { ActivitiesComponent } from "./activities/activities.component";
import { AddressComponent } from "./address/address.component";
import { CelebtrationComponent } from"./celebtration/celebtration.component"
import { FastivalComponent } from "./fastival/fastival.component"

const routes: Routes = [
  {path:'header',component:HeaderComponent},
  {path:'landingPage',component:MainPageComponent},
  // {path:'about-us',component:AboutUsComponent},
  // {path:'Activities', component:ActivitiesComponent},
  // {path:'Address', component:AddressComponent},
  // {path:'Celebtration', component:CelebtrationComponent},
  // {path:'Fastival', component:FastivalComponent},
  {path:'', redirectTo:'landingPage',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

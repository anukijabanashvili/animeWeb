import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent, HistoryComponent, HomepageComponent, NotfoundComponent } from './view';


const routes: Routes = [
   { path:'',  component: HomepageComponent,},
//    {path:'about',  component: AboutComponent,},
   {path:'gallery',   component: GalleryComponent,},
   {path:'history',   component: HistoryComponent,},

   { path:'404', component: NotfoundComponent},
   {path:'**', pathMatch:'full', redirectTo:'404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

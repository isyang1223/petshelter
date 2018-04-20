import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllpetComponent } from './allpet/allpet.component';
import { NewpetComponent } from './newpet/newpet.component';
import { EditpetComponent } from './editpet/editpet.component';
import { ShowpetComponent } from './showpet/showpet.component';



const routes: Routes = [
  { path: '', component: AllpetComponent },
  { path: 'new', component: NewpetComponent },
  { path: 'edit/:id', component: EditpetComponent },

  { path: 'details/:id', component: ShowpetComponent },

  
  { path: '**', component: AllpetComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
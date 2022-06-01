import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CreateInspectionComponent } from './components/create-inspection/create-inspection.component';
import { UpdateInspectionComponent } from './components/update-inspection/update-inspection.component';



const routes: Routes = [
  {path:'addInspection',component:CreateInspectionComponent},
  {path:'updateInspection',component:UpdateInspectionComponent},
  {path:'',component:HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

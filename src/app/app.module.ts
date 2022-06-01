import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';

import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgToastModule } from 'ng-angular-popup';

import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CreateInspectionComponent } from './components/create-inspection/create-inspection.component';
import { UpdateInspectionComponent } from './components/update-inspection/update-inspection.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CreateInspectionComponent,
    UpdateInspectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    NgMultiSelectDropDownModule.forRoot(),
    NgToastModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

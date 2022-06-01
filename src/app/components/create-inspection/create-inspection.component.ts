import { Component, OnInit } from '@angular/core';
import { InspectionService } from './../../services/inspection.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-create-inspection',
  templateUrl: './create-inspection.component.html',
  styleUrls: ['./create-inspection.component.css']
})
export class CreateInspectionComponent implements OnInit {

  isValidationError:any

  constructor(private inspectionService:InspectionService,
    private toast: NgToastService) { }

  ngOnInit(): void {
  }

  addInspection(inspectionDetails:any){
    this.inspectionService.createInspection(inspectionDetails)
   
  }

}

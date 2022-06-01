import { Component, OnInit } from '@angular/core';
import { InspectionService } from './../../services/inspection.service';

@Component({
  selector: 'app-update-inspection',
  templateUrl: './update-inspection.component.html',
  styleUrls: ['./update-inspection.component.css']
})
export class UpdateInspectionComponent implements OnInit {

   inspectionBeforeUpdated:any;
  constructor(private inspectionService:InspectionService) { }

  ngOnInit(): void {
    this.inspectionBeforeUpdated=this.inspectionService.getInspectionBeforeUpdated()

  }

  updateInspection(insp:any){
    insp._id= this.inspectionBeforeUpdated._id;
    this.inspectionService.updateInspection(insp);
  }

}

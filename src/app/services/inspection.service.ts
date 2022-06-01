import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgToastService } from 'ng-angular-popup';
@Injectable({
  providedIn: 'root'
})
export class InspectionService {
  private  inspectionBeforeUpdated:any;
  constructor(private http:HttpClient,
    private toast:NgToastService) { }

  private baseUrl='http://localhost:8000/api';

  validationError=''

  fetchAllInspections():Observable<any>{
    return this.http.get<any>(this.baseUrl + "/inspection")
  }

  createInspection(insp:any){
    return this.http.post<any>(this.baseUrl+"/inspection", insp)
             .subscribe(data => {
               console.log("Inspection is created successfully")},
               )
  }

  setInspectionBeforeUpdated(insp:any){
    console.log("from service 1", insp)
     this.inspectionBeforeUpdated= insp;
  }

  getInspectionBeforeUpdated(){
    return this.inspectionBeforeUpdated;
  }

  updateInspection(insp:any){
    console.log("update Inspection from service")
    return this.http.put<any>(this.baseUrl +"/inspection",insp)
              .subscribe(data => console.log('Inspection is updated successfully'))
  }

  deleteInspection(id:any){
    console.log("id at service", id)
    return this.http.delete<any>(this.baseUrl +"/inspection/"+id)
               .subscribe(data=>console.log(data))
  }

}

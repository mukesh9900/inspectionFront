import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InspectionService } from './../../services/inspection.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  inspections:any
  insp:any
  businessName:any
  city:any
  searchText:any=''
  cities:any[]=[]
  gridView:boolean=false

  title = 'angular 10';
  dropdownList:any[] = [];
  selectedItems:any[] = [];
  dropdownSettings = {};

  p:number =1

  constructor(
    private inspectionService:InspectionService,
    private router:Router) { }

  ngOnInit(): void {
    this.inspectionService.fetchAllInspections().
         subscribe(
           data=>{
             this.inspections =data
             console.log(this.inspections)
           }
         )

         this.dropdownList = [
          { item_id: 1, item_text: 'Ridgewood' },
          { item_id: 2, item_text: 'Birmingham' },
          { item_id: 3, item_text: 'Mumbai' },
          { item_id: 4, item_text: 'Queens Vlog' },
          { item_id: 5, item_text: 'New York' },
        ];

        // this.selectedItems = [
        //   { item_id: 3, item_text: 'Pune' },
        //   { item_id: 4, item_text: 'Navsari' }
        // ];

        this.dropdownSettings= {
          singleSelection: false,
          idField: 'item_id',
          textField: 'item_text',
          selectAllText: 'Select All',
          unSelectAllText: 'UnSelect All',
          itemsShowLimit: 3,
          allowSearchFilter: true
        };
  }

  updateInspection(insp:any){
    console.log("Insp is ", insp)
    this.inspectionService.setInspectionBeforeUpdated(insp);
    this.router.navigate(['/updateInspection'])
  }

  deleteInspection(insp:any){
    console.log("deleting at forntednd", insp);
    this.inspectionService.deleteInspection(insp._id)
  }


  searchByCity(){
    this.inspections = this.inspections.filter((data: { city: string; })=>{
      return data.city.toLowerCase().match(this.city.toLowerCase)
    })
  }
   
  onItemSelect(item: any) {
    this.cities.push(item.item_text)
    console.log(this.cities);
    for (let value of this.cities){
      this.searchText = value
    }

    // this.searchText =item.item_text
  }

  // onItemSelect(item:any){
  //   this.city=item.item_text;
  //   // console.log('city is', this.city.item_text)
  //   // if(!item)
  //   console.log(this.city)
  //   this.searchByCity()
  // }

  onSelectAll(items: any) {
    console.log(items);
  }
  onItemDeSelect(item: any) {
    console.log(item);
  }

  key:string ='id';
  reverse:boolean = false
  sort(key:any){
    this.key=key
    this.reverse =!this.reverse
  }

  showRowView(){
    this.gridView=false
  }

  showGridView(){
    this.gridView=true
  }
}

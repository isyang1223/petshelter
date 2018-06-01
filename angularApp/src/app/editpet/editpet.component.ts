import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-editpet',
  templateUrl: './editpet.component.html',
  styleUrls: ['./editpet.component.css']
})
export class EditpetComponent implements OnInit {
  editPet: any;
  error: any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.editPet = this._httpService.pet
    console.log("editPet!!!!!!!!!!!" + this.editPet)
  }
  savePet(){
  
    let observable = this._httpService.savePet(this.editPet);
   
    observable.subscribe(data => {
      if ((data as any).message == "Error") {
        console.log(data["message"])
        this.error = "Invalid name or type or description"

      }
      else {

        this._router.navigate(['/details/' + this.editPet._id])
      }



    })

  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-newpet',
  templateUrl: './newpet.component.html',
  styleUrls: ['./newpet.component.css']
})
export class NewpetComponent implements OnInit {
  newPet: any;
  error: any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.newPet = { 
      name: "",
      type: "",
      desc: "",
      skill1: "",
      skill2: "",
      skill3: "",
      like: 0

    };




  }

  onSubmit(){
    

    let observable = this._httpService.addPet(this.newPet)
    let obs = this._httpService.showPetById(this.newPet)
    

    console.log("clicked", this.newPet)
    observable.subscribe(data => {
      if ((data as any).message == "Error") {
        this.error = "Invalid name or type or description"

      }
      else {
        this._router.navigate([''])
      }
    })

  }

}

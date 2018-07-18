import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { HttpClient } from '@angular/common/http';
import { FileSelectDirective, FileUploader} from 'ng2-file-upload';






const url = "http://localhost:8000/upload";


@Component({
  selector: 'app-newpet',
  templateUrl: './newpet.component.html',
  styleUrls: ['./newpet.component.css']
})
export class NewpetComponent implements OnInit {

  uploader:FileUploader = new FileUploader({url: url});

  attachmentList:any =[];

  newPet: any;
  error: any;
  // selectedFile= null;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService,
    private http: HttpClient
  ) {
    this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
      console.log(this.uploader.queue[0]._xhr.response)
      var test = JSON.parse(this.uploader.queue[0]._xhr.response);
      console.log(test.uploadname)
      console.log(item);
      console.log(response)
      console.log(status);
      console.log(headers);
      this.attachmentList.push(JSON.parse(this.uploader.queue[0]._xhr.response).uploadname);
  
      
      

      this.newPet.profileImage = "assets/upload/" + this.attachmentList[0].uploadname
      this.attachmentList = []
      console.log("*******************")
      console.log(this.newPet)
    }
  




   }

  ngOnInit() {
    console.log("xX_ newpet.component.ts _Xx")
    this.newPet = { 
      name: "",
      type: "",
      desc: "",
      skill1: "",
      skill2: "",
      skill3: "",
      like: 0,
      profileImage:""

      
    };

  }


  // onFileSelected(event){
  //   this.selectedFile = event.target.files[0];


  //   // if (event.target.files && event.target.files[0]) {
  //   //   var reader = new FileReader();
  //   //   reader.readAsDataURL(event.target.files[0]);
  //   //   reader.onload = (event:any) => {
  //   //     console.log(event)
  //   //     this.url = event.target.result
  //   //     console.log(this.url)
  //   //   }
  //   // }
  // }
  // uploadFile(){
  //   const fd = new FormData();
  //   fd.append('image', this.selectedFile, this.selectedFile.name)
  //   let observable = this._httpService.upload(this.selectedFile)
  //   observable.subscribe(data => {

  //   })

    

  // }


  onSubmit(){
    console.log("## onSubmit ##")

    let observable = this._httpService.addPet(this.newPet)
    // let obs = this._httpService.showPetById(this.newPet)
    

    console.log("clicked", this.newPet)
    observable.subscribe(data => {
      if ((data as any).message == "Error") {
        console.log("## There was an error adding pet ##")
        this.error = "Invalid name or type or description"

      }
      else {
        console.log("## there was NOT an error ##")
        this._router.navigate([''])
      }
    })

  }


}


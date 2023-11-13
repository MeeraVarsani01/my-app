import { Component, OnInit } from '@angular/core';
import { flush } from '@angular/core/testing';
import { FormGroup,  FormBuilder,  Validators,  FormControl } from '@angular/forms';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  constructor(private apiService : ApiService) {}

  formData = {
    minValue : '',
    maxValue : '', 
    rangeValue : '',
    minLength : '',
    maxLength : '',
    rangeLength : '',
    reqField : '',
    email : '',
    dgtValidation : '',
    decNumValidation : '',
    urlValidation : '',
    website : '',
    valCheckbox : false
  };

  variable ={
    "name": "morpheus",
    "job": "leader"
  }

  ngOnInit() {
    //get data
    // this.apiService.getData().subscribe((data) => {
    //   console.log(data);
    // })

    //send data
    this.apiService.addData(this.variable).subscribe((data: any) => {
      console.log(data);
    })
  }

  submitted: boolean = false;
  visible1 : boolean = false;
  visible2: boolean = false;
  visible3 : boolean = false;
  visible4 : boolean = false;
  visible5 : boolean = false;
  visible6 : boolean = false;
  visible7 : boolean = false;
  visible8 : boolean = false;
  visible9 : boolean = false;
  visible10 : boolean = false;
  visible11 : boolean = false;  
  visible12 : boolean = false;  
  // visible13 : boolean = false;  

  onClickSubmit() {
    this.visible1 = false;
    this.visible2 = false;
    this.visible3 = false;
    this.visible4 = false;
    this.visible5 = false;
    this.visible6 = false;
    this.visible7 = false;
    this.visible8 = false;
    this.visible9 = false;
    this.visible10 = false;
    this.visible11 = false;
    this.visible12 = false;
    // this.visible13 = false;
    
    if(this.formData.minValue != '' && this.formData.maxValue != '' && this.formData.rangeValue != '' && this.formData.minLength != '' && this.formData.maxLength != ''
      && this.formData.rangeLength != '' && this.formData.reqField != '' && this.formData.email != '' && this.formData.dgtValidation != '' 
      && this.formData.decNumValidation != '' && this.formData.urlValidation != '' && this.formData.website != '') {
        this.visible1 = false;
        this.visible2 = false;
        this.visible3 = false;
        this.visible4 = false;
        this.visible5 = false;
        this.visible6 = false;
        this.visible7 = false;
        this.visible8 = false;
        this.visible9 = false;
        this.visible10 = false;
        this.visible11 = false;
        this.visible12 = false;
        // this.visible13 = false;
        this.submitted = true;
    }
    else {
      if(this.formData.minValue == '') {
        this.visible1 = true;
      }
      if(this.formData.maxValue == '') {
        this.visible2 = true;
      }
      if (this.formData.rangeValue == ''){
        this.visible3 = true;
      }
      if (this.formData.minLength == ''){
        this.visible4 = true;
      }
      if (this.formData.maxLength == ''){
        this.visible5 = true;
      }
      if (this.formData.rangeLength == ''){
        this.visible6 = true;
      }
      if (this.formData.reqField == ''){
        this.visible7 = true;
      }
      if (this.formData.email == ''){
        this.visible8 = true;
      }
      if (this.formData.dgtValidation == '' ){
        this.visible9 = true;
      }
      if (this.formData.decNumValidation == ''){
        this.visible10 = true;
      }
      if (this.formData.urlValidation == ''){
        this.visible11 = true;
      }
      if (this.formData.website == ''){
        this.visible12 = true;
      }
      // if (this.formData.valCheckbox == false){
      //   this.visible13 = true;
      // }
    }
  }
  
  onSelected(value:string): void {
    this.formData.website = value;
  }

 }

import { Component, ElementRef, EventEmitter, Inject, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { GridApi, GridReadyEvent } from 'ag-grid-community';
import { Observable, ReplaySubject } from 'rxjs';
import { PlaningService } from '../../services/planing.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-ownership',
  templateUrl: './ownership.component.html',
  styleUrls: ['./ownership.component.css']
})
export class OwnershipComponent {
  myForm!:FormGroup;
  receivedData: any;
  SectionList:any = []
  fileData!: string;
  EventFile: any;
  base64Output: any;
  File:any=[];
  FileRowdata:any;
  filteredMSBE: string[] = ['MSBE1', 'MSBE2', 'MSBE3', 'MSBE4'];
  selectedMSBE: string[] = [];
  selectedOrgLevel: string = '';
  toppingList : any = []
  private gridApi!: GridApi;
  orgLevelSelect: any;
  selectedSection:any = "All";
  planningOrgLevel : any = "All";
  toppings = new FormControl('');
  searchUnit = "";
  selectedBU : any ;
  filteredData = [];
  public enableUnit : boolean = true;

  @ViewChild('search') searchTextBox: ElementRef;

  selectFormControl = new FormControl();
  searchTextboxControl = new FormControl();
  selectedValues = [];
 public data1: any = [
    'A1',
    'A2',
    'A3',
    'B1',
    'B2',
    'B3',
    'C1',
    'C2',
    'C3'
  ];
  filteredOptions: Observable<any[]>;
  showLoading: boolean = false;
  showErroMessage = false;
  errorMessage = '';
  searchEmploye : string = '';
  dropdownList : any = [];
  @Output() isFromSubmitted: EventEmitter<boolean> = new EventEmitter<boolean>(false);

  constructor(public dialogRef: MatDialogRef<OwnershipComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private planningService:PlaningService,
    private snackBar: MatSnackBar,
    private loaderService: LoaderService,)
    {}

  ngOnInit(): void {
    this.receivedData =this.data.message;
    this.getEmployList()
    this.myForm = this.makeForm();
    this.myForm.get('Ids')?.disable();

  }
  space(event:any){
    if(event.target.selectionStart === 0 && event.code === 'Space'){
      event.preventDefault();
    }
  }
  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
  }
  getEmployeMaster(){
     this.loaderService.setShowLoading();
    this.planningService.getEmployeMaster()
    .subscribe({
      next: (response:any) => {
        this.SectionList = response.data.object;
         this.loaderService.setShowLoading();
      },
      error: (e:any) => {
        this.loaderService.setDisableLoading();
      },
      complete: () => {
      }
    });
  }
  OnEmploySearch(event:any){
    this.searchEmploye = event.target.value
    this.getEmployList();
  }
  handleInput(event: KeyboardEvent): void{
  event.stopPropagation();
  }
  getEmployList(){
     this.loaderService.setShowLoading();
 
    this.planningService.get(`api/master-data-filter?searchFor=SpocName&filter=${this.searchEmploye}`).subscribe({
      next:(res:any)=>{
      
        this.dropdownList = res;       
        this.loaderService.setDisableLoading();
      }, error:(error:any)=>{
        this.loaderService.setDisableLoading();
        
      }
    });
  }
  onClose(event: any) {
    event.preventDefault();
    this.isFromSubmitted.emit(false);
    this.dialogRef.close();
  }
  OnOwnerChange(event:any){
    if(event.value == this.data.ownerEno){
      event.value = '';
      this.myForm.get('ownerEno').setValue('')
      this.errorMessage = "Selected user is already owner of the record";
      this.showErroMessage = true;
    }else{
      this.errorMessage = "";
      this.showErroMessage = false;
    }

    
  }
  onSubmit() {
     this.loaderService.setShowLoading();
    const CreateAOP:any = {
      ...this.myForm.value
    }
    CreateAOP["featureCode"] = this.data.featureCode;
    if(this.data.objectId){
      CreateAOP["objectId"] = this.data.objectId;
    }else{
      CreateAOP["UniqueId"] = this.data.UniqueId
    }
 

  
    this.planningService.OwnerShipUpdate(CreateAOP)
    .subscribe({
      next: (response:any) => {
        if (
          response?.status?.startsWith('Error') ||
          response?.status?.startsWith(' Error!!')
        ) {
          this.loaderService.setDisableLoading();
          this.errorMessage = response.status;
          this.showErroMessage = true;
          return;
        }
        if (
          response.status === 'Owner updated successfully'
        ) {
          this.loaderService.setDisableLoading();
          this.isFromSubmitted.emit(true);
          this.showSnackbar(response.status);
          this.onClose(event);
        } else {
          this.loaderService.setDisableLoading();
          this.isFromSubmitted.emit(true);
          this.showSnackbar(response.status);
        }
      },
      error: (e:any) => {
        this.loaderService.setDisableLoading();
      },
      complete: () => { 
      }
  });
   
  }
  makeForm() {
    return this.formBuilder.group({
      ownerEno:[,Validators.required],
      remark: ['',Validators.required],
    })
  }
  uploadFile(event: any) {
    this.EventFile = event.target.files[0];
    this.convertFile(this.EventFile).subscribe((base64:any) => {
      this.base64Output = base64;
      this.EventFile["documentContent"] = this.base64Output;
      this.EventFile["documentName"] = this.EventFile.name;
      this.File.push(this.EventFile);
      this.FileRowdata = this.File
    });
  }
 
  convertFile(file : File) : Observable<string> {
    const result = new ReplaySubject<string>(1);
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = (event : any) => result.next(btoa(event.target.result.toString()));
    return result;
  }
  decimalFilter(event: any) {
    const reg = /^-?\d*(\.\d{0,3})?$/;
    let input = event.target.value + String.fromCharCode(event.charCode);
 
    if (!reg.test(input)) {
        event.preventDefault();
    }
 }
 filterorgLevel(event:any){

}
onSearchUnit(event:any) {
  event.data
  if(event.data != null){
    this.filteredData = this.SectionList.filter((row: any) =>
      Object.values(row).some((value: any) => {
        if (value !== null && (typeof value === 'string' || typeof value === 'number')) {
          const lowerCaseValue = String(value).toLowerCase();
          const lowerCaseSearchText = event.data.toLowerCase();
          return lowerCaseValue.includes(lowerCaseSearchText);
        }
        return false;
      })
    );
    this.SectionList = this.filteredData;    
  }else if(event.data == null){
     this.loaderService.setShowLoading();
    this.planningService.getEmployeMaster()
    .subscribe({
      next: (response:any) => {
        this.loaderService.setDisableLoading();
        this.SectionList = response.data.object;

      },
      error: (e:any) => {
        this.loaderService.setDisableLoading();
      },
      complete: () => {
      }
    });
  }

}
filterSection(event:any){
  if(event.value == "All"){
  }else{
  }
}
  showSnackbar(content: string) {
    this.snackBar.open(content, undefined, { duration: 5000 });
  }


  selectionChange(event:any) {
  }

  openedChange(e:any) {
    this.searchTextboxControl.patchValue('');
    if (e == true) {
      this.searchTextBox.nativeElement.focus();
    }
  }

  clearSearch(event:any) {
    event.stopPropagation();
    this.searchTextboxControl.patchValue('');
  }

  setSelectedValues() {
    if (this.selectFormControl.value && this.selectFormControl.value.length > 0) {
    }
  }
}

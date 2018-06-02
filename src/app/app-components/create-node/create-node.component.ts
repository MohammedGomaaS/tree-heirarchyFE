import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TreeService } from '../../app-services/tree/tree.service';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-create-node',
  templateUrl: './create-node.component.html',
  styleUrls: ['./create-node.component.css']
})
export class CreateNodeComponent implements OnInit {
  myform: FormGroup;
  @Output() fireActiomInsideParent = new EventEmitter<string>();
  nodeName: FormControl;
  parent: FormControl;
  child: FormControl;
  parentList: any[] = [];
  selectedParent: any;
  selectedChild: any;

  constructor(public snackBar: MatSnackBar, private treeService: TreeService) {

  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
    this.getAllNodes();
  }

  getAllNodes() {
    this.treeService.getAllNodes().subscribe(result => {
      this.parentList = result.data;
    }, error => {
      this.openSnackBar("Error while loading nodes");
    });
  }
  createFormControls() {
    this.nodeName = new FormControl('', [
      Validators.required
    ]);
    this.parent = new FormControl('',[Validators.required]);
    //this.child = new FormControl();
  }

  createForm() {
    this.myform = new FormGroup({
      node_name: this.nodeName,
      parent_id: this.parent
      // ,
      // child_id:this.child
    });
  }

  onSubmit() {
    if (this.myform.valid) {
      if(this.myform.value.parent_id ==' ')
      this.myform.value.parent_id=null;
      this.treeService.createNode(this.myform.value).subscribe(result => {
        this.openSnackBar("Succes");
        this.callParentComponent();
        this.getAllNodes();
        this.myform.reset();
      }, error => {
        this.openSnackBar("Check your fields");
      });

    }


  }
  callParentComponent() {
    this.fireActiomInsideParent.next();
  }

  openSnackBar(message) {
    this.snackBar.open(message, 'close', {
      duration: 3000
    });
  }
}

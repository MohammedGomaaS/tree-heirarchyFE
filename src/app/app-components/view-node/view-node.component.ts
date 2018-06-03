import { Component, OnInit, ViewChild } from '@angular/core';
import { TreeService } from '../../app-services/tree/tree.service';

@Component({
  selector: 'app-view-node',
  templateUrl: './view-node.component.html',
  styleUrls: ['./view-node.component.css']
})
export class ViewNodeComponent implements OnInit {

  displayedColumns = ['node_name', 'parent_node'];
  dataSource = null;

  constructor(private treeService: TreeService) {

  }
  ngOnInit() {
    this.getNodeList();

  }
  getNodeList() {
    this.treeService.getAllNodes().subscribe(result => {
      this.processResult(result);
    }, error => {

    }
    );
  }
  processResult(result) {
    for (let i = 0; i < result.length; i++) {
      let nn=result.find(x => x.id == result[i].parent_id);
      if(nn!=undefined)
      result[i].parent_node=nn.node_name;
    }
    this.dataSource=result;
  }
}


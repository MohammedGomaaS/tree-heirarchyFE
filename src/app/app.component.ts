import { Component,ViewChild } from '@angular/core';
import {ViewNodeComponent} from '../app/app-components/view-node/view-node.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(ViewNodeComponent) viewNode: ViewNodeComponent;
  title = 'app';
  reloadNodeList(){
  this.viewNode.getNodeList();
  }
}

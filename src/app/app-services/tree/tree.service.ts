import { Injectable } from '@angular/core';
import {HTTPRequest} from '../app-http-request/http-request';
@Injectable({
  providedIn: 'root'
})
export class TreeService {
  constructor(private hTTPRequest:HTTPRequest) { 
  }
  createNode(body){
    return this.hTTPRequest.create(body,'tree/');
  }
  parentsOf(node){
  return this.hTTPRequest.search([{key:"node",value:node}],'parentsOf');
  }
  childrenOf(node){
    return this.hTTPRequest.search([{key:"node",value:node}],'childrenOf');
  }
  getAllNodes(){
    return this.hTTPRequest.search([],'tree');
  }
}

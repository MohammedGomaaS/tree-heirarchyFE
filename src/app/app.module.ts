import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppMDModule} from './app-md/app-md-module';
//servies
import {HTTPRequest} from './app-services/app-http-request/http-request';
import {TreeService} from './app-services/tree/tree.service'
import { AppComponent } from './app.component';
import { CreateNodeComponent } from './app-components/create-node/create-node.component';
import { ViewNodeComponent } from './app-components/view-node/view-node.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateNodeComponent,
    ViewNodeComponent
  ],
  imports: [
    BrowserModule,
    AppMDModule
  ],
  providers: [HTTPRequest,TreeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

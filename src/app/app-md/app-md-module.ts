import { NgModule } from '@angular/core';
import { mdComponents } from './md-components';
@NgModule({
    imports: mdComponents,
    exports: mdComponents,
})

export class AppMDModule { }
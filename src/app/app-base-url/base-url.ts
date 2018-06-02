import { isDevMode } from '@angular/core'
export class BaseURL { 
    getBaseURL(){
        if(isDevMode()) {
            return 'http://localhost:3030/';
          }
          else{
              return '';
          }
    }
    
  }

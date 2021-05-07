import { NgModule } from '@angular/core';

// Directives
import { ErrorMsgDirective } from './directives/error-msg.directive';
import { CustomDirective } from './directives/custom.directive';

@NgModule({
  declarations: [
    ErrorMsgDirective,
    CustomDirective
  ],
  exports: [
    ErrorMsgDirective,
    CustomDirective
  ]
})

export class SharedModule { }

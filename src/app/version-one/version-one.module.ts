import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {VersionOneRoutingModule} from './version-one-routing.module';
import {VersionOneComponent} from './version-one.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatButtonModule,
    VersionOneRoutingModule
  ],
  exports: [
    VersionOneComponent
  ],
  declarations: [
    VersionOneComponent
  ],
  providers: [
  ],
})
export class VersionOneModule { }

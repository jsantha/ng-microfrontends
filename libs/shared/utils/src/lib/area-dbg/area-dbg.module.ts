import { NgModule } from '@angular/core';
import { AreaDbgComponent } from './area-dbg.component';
import { CommonModule } from '@angular/common';
import { BuildInfoModule } from '../build-info';

@NgModule({
  declarations: [AreaDbgComponent],
  imports: [CommonModule, BuildInfoModule],
  exports: [AreaDbgComponent],
})
export class AreaDbgModule {}

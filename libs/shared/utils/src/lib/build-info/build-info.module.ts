import { NgModule } from '@angular/core';
import { BuildInfoComponent } from './build-info.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [BuildInfoComponent],
  imports: [CommonModule],
  exports: [BuildInfoComponent],
})
export class BuildInfoModule {}

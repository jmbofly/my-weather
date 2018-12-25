import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material/material.module';
import { FlexContainerComponent } from './flex-container/flex-container.component';
import { HeroHeaderComponent } from './hero-header/hero-header.component';

@NgModule({
  declarations: [FlexContainerComponent, HeroHeaderComponent],
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
  exports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule, FlexContainerComponent, HeroHeaderComponent],
  entryComponents: [FlexContainerComponent, HeroHeaderComponent]
})
export class SharedModule {}

import {NgModule} from '@angular/core';
import {MatButtonModule, MatIconModule, MatToolbarModule} from '@angular/material';

const MaterialComponent = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule
];

@NgModule({
  imports: [MaterialComponent],
  exports: [MaterialComponent]
})
export class MaterialModule {
}

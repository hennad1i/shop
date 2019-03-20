import {NgModule} from '@angular/core';
import {MatButtonModule, MatIconModule, MatInputModule, MatToolbarModule} from '@angular/material';

const MaterialComponent = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatInputModule
];

@NgModule({
  imports: [MaterialComponent],
  exports: [MaterialComponent]
})
export class MaterialModule {
}

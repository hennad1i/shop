import {NgModule} from '@angular/core';
import {MatButtonModule, MatIconModule, MatInputModule, MatToolbarModule, MatSidenavModule, MatCardModule, MatGridListModule, MatPaginatorModule} from '@angular/material';

const MaterialComponent = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatSidenavModule,
  MatCardModule,
  MatGridListModule,
  MatPaginatorModule
];

@NgModule({
  imports: [MaterialComponent],
  exports: [MaterialComponent]
})
export class MaterialModule {
}

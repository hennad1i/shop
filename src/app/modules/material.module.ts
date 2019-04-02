import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatToolbarModule,
  MatSidenavModule,
  MatCardModule,
  MatGridListModule,
  MatPaginatorModule,
  MatMenuModule,
  MatBadgeModule,
  MatDialogModule,
  MatDividerModule
} from '@angular/material';

const MaterialComponent = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatSidenavModule,
  MatCardModule,
  MatGridListModule,
  MatPaginatorModule,
  MatMenuModule,
  MatBadgeModule,
  MatDialogModule,
  MatDividerModule
];

@NgModule({
  imports: [MaterialComponent],
  exports: [MaterialComponent]
})
export class MaterialModule {
}

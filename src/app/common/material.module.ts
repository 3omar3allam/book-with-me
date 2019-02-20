import { NgModule } from '@angular/core';
import { MatInputModule, MatMenuModule, MatCardModule, MatButtonModule, MatToolbarModule, MatExpansionModule, MatProgressSpinnerModule, MatPaginatorModule, MatDialogModule, MatSnackBarModule, MatIconModule, MatSidenavModule, MatListModule, MatFormFieldModule, MatProgressBarModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  exports:[
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSnackBarModule,
  ]
})
export class MaterialModule{

}

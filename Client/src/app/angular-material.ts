import {NgModule} from '@angular/core';
import {CommonModule } from '@angular/common';
import {MatButtonModule , MatCheckboxModule , MatToolbarModule} from '@angular/material'
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
@NgModule({
    imports: [MatButtonModule , MatSnackBarModule,MatCheckboxModule , MatToolbarModule , MatIconModule,MatInputModule,MatCardModule ],
    exports: [MatButtonModule ,MatSnackBarModule, MatCheckboxModule , MatToolbarModule , MatIconModule,MatInputModule,MatCardModule],
})

export class MaterialModule {}
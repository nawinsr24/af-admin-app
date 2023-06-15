import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import { Ng2SmartTableModule } from 'ng2-smart-table';


@NgModule({
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    MatChipsModule,
    MatIconModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatTooltipModule,
    Ng2SmartTableModule
  ],

  exports: [
    MatTableModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    MatChipsModule,
    MatIconModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatTooltipModule,
    Ng2SmartTableModule
  ],
})
export class MaterialModule {}

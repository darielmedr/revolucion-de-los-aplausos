import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';

const modules: any[] = [
  LayoutModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatExpansionModule,
  MatListModule,
  MatToolbarModule,
  MatTabsModule,
];

@NgModule({
  declarations: [],
  imports: [
    ...modules,
    HttpClientModule
  ],
  exports: [
    ...modules
  ]
})
export class MaterialModule { }

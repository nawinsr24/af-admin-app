import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllModulesRoutingModule } from './all-modules-routing.module';
import { AllModulesComponent } from './all-modules.component';
import { HeaderComponent } from "../header/header.component";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { PERFECT_SCROLLBAR_CONFIG } from "ngx-perfect-scrollbar";
import { PerfectScrollbarConfigInterface } from "ngx-perfect-scrollbar";
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { AllModulesData } from "src/assets/all-modules-data/all-modules-data";
import { AllModulesService } from "./all-modules.service";
import { CategoryComponent } from './category/category.component';
import { SubCatComponent } from './sub-cat/sub-cat.component';
import { ProductComponent } from './product/product.component';
import { StockComponent } from './stock/stock.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { SizeComponent } from './size/size.component';
import { BannersComponent } from './banners/banners.component'

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};
@NgModule({
  declarations: [AllModulesComponent, HeaderComponent, SidebarComponent, CategoryComponent, SubCatComponent, ProductComponent, StockComponent, SizeComponent, BannersComponent],
  imports: [
    CommonModule,
    AllModulesRoutingModule,
    PerfectScrollbarModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(AllModulesData),
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    SelectDropDownModule
  ],
  providers: [
    AllModulesService,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
  ],
})
export class AllModulesModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllModulesComponent } from './all-modules.component';
import { CategoryComponent } from './category/category.component';
import { SubCatComponent } from './sub-cat/sub-cat.component';
import { ProductComponent } from './product/product.component';
import { StockComponent } from './stock/stock.component';
import { SizeComponent } from './size/size.component';
import { BannersComponent } from './banners/banners.component';
import { DiscountComponent } from './discount/discount.component';
import { StockLablesComponent } from './stock-lables/stock-lables.component';
import { OrderRequestsComponent } from './order-requests/order-requests.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '',
    component: AllModulesComponent,
    children: [
      { path: 'cat', component: CategoryComponent },
      { path: 'sub-cat', component: SubCatComponent },
      { path: 'products', component: ProductComponent },
      { path: 'stocks', component: StockComponent },
      { path: 'size', component: SizeComponent },
      { path: 'banners', component: BannersComponent },
      { path: 'discount', component: DiscountComponent },
      { path: 'lables', component: StockLablesComponent },
      { path: 'order-requests', component: OrderRequestsComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllModulesRoutingModule {}

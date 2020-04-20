import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './component/product/product.component';
import { ProductAboutComponent } from './component/product-about/product-about.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { ProductEditComponent } from './component/product-edit/product-edit.component';
import { ProductAddComponent } from './component/product-add/product-add.component';
import { ProductAllComponent } from './component/product-all/product-all.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { IndexAdminComponent } from './admin/index-admin/index-admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ProductAdminComponent } from './admin/product-admin/product-admin.component';
import { HomeComponent } from './component/home/home.component';


const routes: Routes = [
{path: '' , redirectTo: 'homepage', pathMatch:'full'},
{path: 'home1', component: HomeComponent},
{path: 'product', component: ProductComponent},
{path: 'lienhe', component: ProductAboutComponent},
{path: 'homepage', component: HomepageComponent},
{ path: 'admin', component: IndexAdminComponent, 
      children: [
        { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
        { path: 'dashboard', component: DashboardComponent},
        { path: 'product', component:ProductAdminComponent},
      ]
    },
{path: 'product/add', component: ProductAddComponent},
{path: 'product/:productID', component: ProductDetailComponent},
{path: 'product/edit/:productID', component: ProductEditComponent},
{path: 'productall', component: ProductAllComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductComponent } from './component/product/product.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { ProductAddComponent } from './component/product-add/product-add.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { ProductService } from './product.service';
import { ProductAboutComponent } from './component/product-about/product-about.component';
import { ProductEditComponent } from './component/product-edit/product-edit.component';
import { ProductAllComponent } from './component/product-all/product-all.component';

import { ProductAdminComponent } from './admin/product-admin/product-admin.component';
import { IndexAdminComponent } from './admin/index-admin/index-admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { HomeComponent } from './component/home/home.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule,  HttpClientModule, NgbModule ],
  declarations: [ AppComponent, HelloComponent, ProductComponent, HomepageComponent, ProductAddComponent, ProductDetailComponent, ProductAboutComponent, ProductEditComponent, ProductAllComponent, ProductAdminComponent, IndexAdminComponent, DashboardComponent, HomeComponent,  ],
  bootstrap:    [ AppComponent ],
  providers: [ProductService]
})
export class AppModule { }

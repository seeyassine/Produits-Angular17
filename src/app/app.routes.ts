import { Routes } from '@angular/router';
import {ProductsComponent} from './products/products.component'
import {CustomersComponent} from './customers/customers.component'

export const routes: Routes = [ { path: 'products', component: ProductsComponent },
{ path: 'customers', component: CustomersComponent }];

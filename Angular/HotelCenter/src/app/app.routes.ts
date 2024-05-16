import { Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { ProductComponent } from './product/product.component';
import { StudetComponent } from './studet/studet.component';
import { AcountHolderComponent } from './acount-holder/acount-holder.component';

export const routes: Routes = [
    {
        path: 'shop',
        component: ShopComponent
    },
    {
        path: 'product',
        component: ProductComponent
    },
    {
        path: 'studet',
        component: StudetComponent
    },
    {
        path: 'acount-holder',
        component: AcountHolderComponent
    },
    
];

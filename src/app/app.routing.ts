import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddFundMeComponent } from './add-fund-me/add-fund-me.component';
import { FundmeDetailComponent } from './fundme-detail/fundme-detail.component';
import { EditFundMeComponent } from './edit-fund-me/edit-fund-me.component';

const appRoutes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path: 'add/FundMe',
    component: AddFundMeComponent
  },
  {
    path:'projects/:id',
    component: FundmeDetailComponent
  },
  {
    path:'projects/:id, /edit',
    component: EditFundMeComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

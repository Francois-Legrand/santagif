import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadeauComponent } from './pages/cadeau/cadeau.component';
import { CreateCadeauxComponent } from './pages/create-cadeaux/create-cadeaux.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path : "", component : HomeComponent,
    children: [
      { path : "cadeaux-liste", component : CadeauComponent}
    ]
  },
  { path : "cadeau", component : CreateCadeauxComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

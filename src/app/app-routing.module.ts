import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadeauCardComponent } from './components/cadeau-card/cadeau-card.component';
import { CadeauComponent } from './pages/cadeau/cadeau.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path : "", component : HomeComponent,
    children: [
      { path : "cadeaux", component : CadeauComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

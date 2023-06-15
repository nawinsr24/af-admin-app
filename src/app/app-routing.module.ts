import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from "./error404/error404.component";
import { Error500Component } from "./error500/error500.component";
import { LoginComponent } from "./login/login.component";
const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import(`./all-modules/all-modules.module`).then(
        (m) => m.AllModulesModule
      ),
  },
  { path: "error-404", component: Error404Component },
  { path: "error-500", component: Error500Component },
  { path: "login", component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

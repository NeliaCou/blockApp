import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MyFormComponent } from './my-form/my-form.component'

const routes: Routes = [
  {
    path: "",
    component: UserProfileComponent
      },
  {
    path: "user",
    component: UserProfileComponent
  },
  {
    path: "sign-up",
    component: SignUpComponent
  },
  {
    path: "form-test",
    component: MyFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

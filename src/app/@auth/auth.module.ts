import { NgModule } from '@angular/core';
import { AuthRoutingModule, routedComponent } from './auth.routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule,
    AuthRoutingModule,
    FormsModule,
  ],
  exports: [],
  declarations: [...routedComponent],
})
export class AuthModule { }

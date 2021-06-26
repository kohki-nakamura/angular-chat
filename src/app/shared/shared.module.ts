import { NgModule } from '@angular/core';
// CommonModule：angularのモジュールに必要な機能を含む。これがないとモジュールとして機能しない。
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CommentDatePipe } from '../pipes/comment-date.pipe';



@NgModule({
  declarations: [
    CommentDatePipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FormsModule,
    CommentDatePipe
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ToolbarModule } from 'primeng/toolbar';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DialogService } from 'primeng/dynamicdialog';
import { ToobarNavigationsComponent } from './components/toobar-navigations/toobar-navigations.component';

@NgModule({
  declarations: [ToobarNavigationsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    //primeNG
    ToolbarModule,
    CardModule,
    ButtonModule,
  ],
  exports: [ToobarNavigationsComponent],
  providers: [DialogService, CurrencyPipe],
})
export class SharedModule {}

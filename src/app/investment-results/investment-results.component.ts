import { Component, Input, inject } from '@angular/core';
import { Investment } from '../user-input/user-input.model';
import { InvestmentResultsService } from './investment-result.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  @Input({required: true}) investment!: Investment
  private investmentResultsService = inject(InvestmentResultsService);
  get calculateInvestmentResults() {
    return this.investmentResultsService.calculateTable(this.investment);
  }
}

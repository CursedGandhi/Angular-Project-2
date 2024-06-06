import { Injectable } from "@angular/core";
import { annualData } from "./investment-result.model";
import { Investment } from "../user-input/user-input.model";
@Injectable({providedIn: 'root'})
export class InvestmentResultsService{
    private rows: Array<annualData> = [];
    calculateTable(investment: Investment)
    {
        let annualData: annualData;
        let investmentValue = investment.initial;
    
        for (let i = 0; i < investment.duration; i++) {
        const year = i + 1;
        const interestEarnedInYear = investmentValue * (investment.exp / 100);
        investmentValue += interestEarnedInYear + investment.ann;
        const totalInterest =
            investmentValue - investment.ann * year - investment.initial;
        annualData = ({
            year: year,
            interest: interestEarnedInYear,
            valueEndOfYear: investmentValue,
            annualInvestment: investment.ann,
            totalInterest: totalInterest,
            totalAmountInvested: (investment.initial + investment.ann * year),
        });
        this.rows[i] = (annualData);
        }
        return this.rows;
    }
}
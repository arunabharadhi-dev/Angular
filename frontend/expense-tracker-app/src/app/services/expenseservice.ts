import { Injectable } from '@angular/core';

export interface Expense {
  title: string;
  category: string;
  amount: number;
  date: string;
}

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private expenses: Expense[] = [];

  // -------------------------
  // GET ALL EXPENSES
  // -------------------------
  getExpenses(): Expense[] {
    return this.expenses;
  }

  // -------------------------
  // ADD EXPENSE
  // -------------------------
  addExpense(expense: Expense): void {
    this.expenses.push(expense);
  }

  // -------------------------
  // TOTAL EXPENSES
  // -------------------------
  getTotalExpenses(): number {
    return this.expenses.reduce((sum, item) => sum + item.amount, 0);
  }

  // -------------------------
  // THIS MONTH (simplified for now)
  // -------------------------
  getThisMonthExpenses(): number {
    const currentMonth = new Date().getMonth();

    return this.expenses
      .filter(e => new Date(e.date).getMonth() === currentMonth)
      .reduce((sum, item) => sum + item.amount, 0);
  }

  // -------------------------
  // BUDGET LEFT (fixed budget example)
  // -------------------------
  getBudgetLeft(): number {
    const budget = 10000;
    return budget - this.getTotalExpenses();
  }

  // -------------------------
  // RECENT EXPENSES
  // -------------------------
  getRecentExpenses(): Expense[] {
    return [...this.expenses].slice(-5).reverse();
  }

  // -------------------------
  // CLEAR ALL (optional)
  // -------------------------
  clearAll(): void {
    this.expenses = [];
  }
}
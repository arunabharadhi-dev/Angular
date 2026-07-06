import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../../services/expenseservice';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent implements OnInit {

  totalExpenses = 0;
  thisMonth = 0;
  budgetLeft = 0;

  recentExpenses: any[] = [];

  constructor(private expenseService: ExpenseService) {}

  ngOnInit(): void {
    this.loadDashboard();
  }

  loadDashboard(): void {
    const dashboardData = this.expenseService.getExpenses();

   
  }
}
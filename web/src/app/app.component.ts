import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  showChart = false;
  title = 'angular-charts-app';
  showCharts() {
    this.showChart = true;
  }
}

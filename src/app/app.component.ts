import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Employee } from 'employee';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employee Profiles';
  displayedColumns = ['profileImage', 'name', 'title'];
  dataSource = new MatTableDataSource(EMPLOYEES_DATA);
  showEmployeeTable = true;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}

const EMPLOYEES_DATA: Employee[] = [
  {
    name: 'Mary Smith',
    title: 'Software Developer',
    profileImage: 'http://www2.hawaii.edu/~axu/visualization/p3/Marge_Simpson.gif'
  },
  {
    name: 'John Doe',
    title: 'Software Tester',
    profileImage: 'https://pbs.twimg.com/profile_images/701205574/bartttttt.jpg'
  },
  {
    name: 'Samantha Talbert',
    title: 'Sr Analyst',
    profileImage: 'https://pbs.twimg.com/profile_images/685655033556369408/_URvpaLd.png'
  },
  {
    name: 'Daniel Smith',
    title: 'Business Developer',
    profileImage: 'https://pbs.twimg.com/profile_images/1675544816/homer-simpson.jpeg'
  },
  {
    name: 'Farid Khan',
    title: 'Financial Advisor',
    profileImage: 'https://pbs.twimg.com/profile_images/1019142036/millhouse_400x400.jpg'
  },
  {
    name: 'Angela Mchale',
    title: 'Product Manager',
    profileImage: 'http://2.bp.blogspot.com/_8nwTWN7ztrU/TEhnCVxiMSI/AAAAAAAAABU/3cqC_BpNrnE/s1600/Maggie_Simpson.png'
  },
  {
    name: 'Thomas Finkle',
    title: 'Account Director',
    profileImage: 'https://pbs.twimg.com/profile_images/3274998703/363460dd68835d8f68598b113e7dd41e.jpeg'
  },
  {
    name: 'Mark Madrake',
    title: 'Jr Account Executive',
    profileImage: 'https://pbs.twimg.com/profile_images/2797380385/d6844904f9e0e2f73101bcd90eb633f7.png'
  }
];
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-matches-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './matches_component.component.html',
  styleUrl: './matches_component.component.css',
})
export class MatchesComponentComponent {
  offers = [
    {
      companyName: 'Company Name',
      domain: 'Domain',
      jobTitle: 'Job Title',
      jobType: 'Full time',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      companyName: 'Company Name',
      domain: 'Domain',
      jobTitle: 'Job Title',
      jobType: 'Full time',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      companyName: 'Company Name',
      domain: 'Domain',
      jobTitle: 'Job Title',
      jobType: 'Full time',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      companyName: 'Company Name',
      domain: 'Domain',
      jobTitle: 'Job Title',
      jobType: 'Full time',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      companyName: 'Company Name',
      domain: 'Domain',
      jobTitle: 'Job Title',
      jobType: 'Full time',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },{
      companyName: 'Company Name',
      domain: 'Domain',
      jobTitle: 'Job Title',
      jobType: 'Full time',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },{
      companyName: 'Company Name',
      domain: 'Domain',
      jobTitle: 'Job Title',
      jobType: 'Full time',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      companyName: 'Company Name',
      domain: 'Domain',
      jobTitle: 'Job Title',
      jobType: 'Full time',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
];
}

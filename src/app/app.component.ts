import { map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  paises = [
    {
      name: 'Brasil',
      cities: [
        'São Paulo',
        'Rio de Janeiro',
        'Natal',
        'Angicos',
        'Mossoró',
        'Carapicuiba',
      ],
    },
    {
      name: 'United States',
      cities: ['New York', 'Chicago', 'Washington'],
    },
    {
      name: 'Australia',
      cities: ['Sydney', 'Adelaide', 'Melbourne'],
    },
    {
      name: 'Pakistan',
      cities: ['Lahore', 'Karachi', 'Islamabad'],
    },
  ];

  cidadeForm!: FormControl;
  paisForm!: FormControl;
  cidades$!: Observable<string>;
  private unsubscribe$ = new Subject<void>();

  constructor(private router: Router) {}

  ngOnInit() {
    this.cidadeForm = new FormControl('');
    this.cidadeForm.valueChanges.subscribe((value) => {
      this.router.navigate([value]);
    });

    this.paisForm = new FormControl('');

    this.cidades$ = this.paisForm.valueChanges.pipe(map((pais) => pais.cities));
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}

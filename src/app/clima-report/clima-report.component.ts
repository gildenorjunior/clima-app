import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClimaService } from '../clima.service';
import { map, filter, concatMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-clima-report',
  templateUrl: './clima-report.component.html',
  styleUrls: ['./clima-report.component.scss'],
})
export class ClimaReportComponent implements OnInit {
  data$!: Observable<any>;
  dia: Date = new Date();
  loading = false;

  constructor(
    private climaService: ClimaService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.data$ = this.route.params.pipe(
      map((params) => params['localizacao']), //trata os valores do observable
      filter((nome) => !!nome), //double !! verifica se o valor não é nulo se for interrompe a execução
      tap(() => {
        this.loading = true;
      }),
      concatMap((nome) => this.climaService.getClima(nome)),
      tap(() => {
        this.loading = false;
      })
    );
  }
}

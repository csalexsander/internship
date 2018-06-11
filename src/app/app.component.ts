import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public EstagioExibir : boolean = true;
  public OrientadoresExibir : boolean = false;

  public ExibirOrientadores(): void {
    this.EstagioExibir = false;
    this.OrientadoresExibir = true;
  }

  public ExibirEstagiarios() : void {
    this.EstagioExibir = true;
    this.OrientadoresExibir = false;
  }
}

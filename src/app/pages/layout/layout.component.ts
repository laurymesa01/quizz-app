import { Component, HostBinding, OnInit, effect, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from "@angular/common";


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit{

  @HostBinding('class.dark') get mode() {return this.darkMode(); }


  // userTheme   = localStorage.getItem("theme");
  // systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
  darkMode = signal<boolean>(false);
  checked: boolean = false;
  initialize:boolean = false;

  constructor(){
    if (typeof window !== "undefined") {
      this.darkMode.set(JSON.parse(window.localStorage.getItem("darkMode") ?? "false"))
      if (this.darkMode() === true) {
        this.checked = true;
      }
      this.initialize = true;
      effect(() => {
        window.localStorage.setItem('darkMode', JSON.stringify(this.darkMode()));
      });
    }
  }

  ngOnInit(){

    // if( this.systemTheme){
    //   document.documentElement.classList.add('dark');
    //   this.checked = true;
    // }
  }

  changeMode(){
    this.darkMode.set(!this.darkMode());
  }

}

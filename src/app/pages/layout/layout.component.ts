import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit{

  userTheme   = localStorage.getItem("theme");
  systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
  checked: boolean = false;

  ngOnInit(){
    if(this.userTheme === 'dark' || this.systemTheme){
      document.documentElement.classList.add('dark');
      this.checked = true;
    }
  }

  changeMode(){
    if(document.documentElement.classList.contains('dark')){
      document.documentElement.classList.remove('dark');
      localStorage.setItem("theme", "light");
      return;
    }
    document.documentElement.classList.add('dark');
    localStorage.setItem("theme", "dark");
    // document.documentElement.classList.toggle('dark');
  }

}

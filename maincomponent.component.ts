import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maincomponent',
  templateUrl: './maincomponent.component.html',
  styleUrls: ['./maincomponent.component.css']
})
export class MaincomponentComponent {

  home=true;

  pubg=false;
 ronald=false;
 oneplus = false;
 login(choice:any)
 {
   this.home=false;
   this.pubg=false;
   this.ronald=false;
   this.oneplus=false;
    if(choice==1){
      this.pubg=true;
    }
    else if(choice==2)
    {
      this.ronald=true;
    }
    else if(choice ==3)
    {
      this.oneplus=true;
    }

   
 }
 homecontent()
 {
  this.pubg=false;
   this.ronald=false;
   this.oneplus=false;
   this.home=true; 
 }

}

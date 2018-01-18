import { Component } from '@angular/core';
import { ConfigService } from './config.services';


interface UserNamePasswd {
    userName?: string;
    password?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  private dataUrl = "https://anton-flask.herokuapp.com/getUser";
  private testResponse : any;
  // private userName : string = "sarvesh";
  // private password : string  = "sarvesh123";
  private userNamePasswd: UserNamePasswd = {};
   constructor(private myHttp: ConfigService) {
    }

    getDataFromHeroku() {
      console.log("edwe");
      this.testResponse = "";
      this.userNamePasswd.password = "sarvesh";
      this.userNamePasswd.userName = "sarvesh123";
        this.myHttp.getDataObservable(this.dataUrl, this.userNamePasswd).subscribe(
            data => this.testResponse = data
        );
        console.log("I CANT SEE DATA HERE: ", this.testResponse);
    }
}

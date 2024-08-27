import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})

export class IndexComponent implements OnInit {

  gmail: string = 'https://mail.google.com/mail/?view=cm&fs=1&to=markraydenm@gmail.com';
  linkedIn: string = 'https://www.linkedin.com/in/mark-rayden-mirafuente-508b631aa/';
  github: string = 'https://github.com/prometheusaxiom';
  microsoftCertificate: string = 'https://learn.microsoft.com/api/credentials/share/en-us/MarkMirafuente-0468/17D96DEDA39C9776?sharingId=42F6903E36225499';


  constructor() {
  }

  ngOnInit(): void {
    
  }

  goToLink(link: string){
    window.open(link, "_blank");
  }
}

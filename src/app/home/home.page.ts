import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  iframeSrc: SafeUrl = this.sanitizer.bypassSecurityTrustResourceUrl("https://chat.zalo.me/");
  constructor(private sanitizer: DomSanitizer) {}

}

import { WebsiteDataService } from '../website-data.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class WebsiteDataStoreService {
  constructor(private WebsiteDataService: WebsiteDataService) {}

  _websiteData = new BehaviorSubject<any>({});
  websiteData$ = this._websiteData.asObservable();

  _languages = new BehaviorSubject<any[]>([]);
  language$ = this._languages.asObservable();

  _languageSelected = new BehaviorSubject<any>({});
  languageSelected$ = this._languageSelected.asObservable();

  get WebsiteData(): any {
    return this._websiteData.getValue();
  }

  set WebsiteData(val: any) {
    this._websiteData.next(val);
  }

  get Languages(): any[] {
    return this._languages.getValue();
  }

  set Languages(val: any[]) {
    this._languages.next(val);
  }

  get LanguageSelected(): any {
    return this._languageSelected.getValue();
  }

  set LanguageSelected(val: any) {
    this._languageSelected.next(val);
  }

  fetchWebsiteData() {
    this.WebsiteDataService.fetchWebsiteData().then((data) => {
      this.WebsiteData = data.json;
    });
  }

  fetchWebsiteLanguages() {
    this.WebsiteDataService.fetchWebsiteLanguages().then((data) => {
      this.Languages = data.json;
      if (!this.LanguageSelected.id) {
        this.LanguageSelected = this.Languages.filter((x) => x.isDefault)[0];
      }
    });
  }

  changeLanguage(id: number) {
    this.LanguageSelected = this.Languages.filter((x) => x.id == id)[0];
  }
}

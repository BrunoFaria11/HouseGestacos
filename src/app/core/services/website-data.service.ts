import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Http } from '@angular/http';
import * as CryptoJS from 'crypto-js';

@Injectable()
export class WebsiteDataService {
  private host: string = environment.cm_api_host;
  private version: string = environment.cm_version;
  private cm_application_uuid: string = environment.cm_application_uuid;
  jsonData: any;

  getLastWebsiteLanguages() {
    return this.httpClient.get(
      `${this.host}/${this.version}/application-language?uuidApplication=${this.cm_application_uuid}`
    );
  }

  getLastWebsiteUpdate() {
    return this.httpClient.get(
      `${this.host}/${this.version}/application/updated_date?uuid=${this.cm_application_uuid}`
    );
  }

  getWebsiteData() {
    return this.httpClient.get(
      `${this.host}/${this.version}/application/provider?uuid=${this.cm_application_uuid}`
    );
  }

  fetchWebsiteLanguages(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.getLastWebsiteLanguages().subscribe((response: any) => {
        resolve({ json: response.result });
      });
    });
  }

  fetchWebsiteData(): Promise<any> {
    const dataSource = localStorage.getItem('dataSource');
    const websiteLastUpdateDate = localStorage.getItem('websiteLastUpdateDate');
    return new Promise((resolve, reject) => {
      this.getLastWebsiteUpdate().subscribe((date: any) => {
        const websiteLastUpdateDate_ = date.result;
        if (websiteLastUpdateDate) {
          if (websiteLastUpdateDate_ > websiteLastUpdateDate) {
            this.getWebsiteData().subscribe((response: any) => {
              localStorage.setItem(
                'websiteLastUpdateDate',
                websiteLastUpdateDate_
              );
              localStorage.setItem(
                'dataSource',
                this.convertText(
                  'encrypt',
                  JSON.stringify(response.result.quinta_gestacos),
                  'encrypt'
                )
              );
              resolve({ json: response.result.quinta_gestacos });
            });
          }
        }
        if (dataSource) {
          const decryptData = this.convertText(
            'dencrypt',
            dataSource,
            'encrypt'
          );
          console.log(decryptData)
          resolve({ json: JSON.parse(decryptData) });
        } else {
          this.getWebsiteData().subscribe((response: any) => {
            localStorage.setItem(
              'dataSource',
              this.convertText(
                'encrypt',
                JSON.stringify(response.result.quinta_gestacos),
                'encrypt'
              )
            );
            localStorage.setItem(
              'websiteLastUpdateDate',
              websiteLastUpdateDate_
            );
            resolve({ json: response.result.quinta_gestacos });
          });
        }
      });
    });
  }

  convertText(conversion: string, plainText: string, password: string): any {
    if (conversion == 'encrypt') {
      return CryptoJS.AES.encrypt(plainText, password).toString();
    } else {
      return CryptoJS.AES.decrypt(plainText, password).toString(
        CryptoJS.enc.Utf8
      );
    }
  }

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {}
}

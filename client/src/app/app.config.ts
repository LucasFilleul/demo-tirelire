import { HttpHeaders } from '@angular/common/http'

export class AppConfig {
    public static API_URL = "http://localhost:8080";

    public static HTTP_OPTIONS = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
    };
}
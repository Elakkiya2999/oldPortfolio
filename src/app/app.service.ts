// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { HttpClient } from '@angular/common/http';
// // import { environment } from '../../environments/environment';

// @Injectable({
//   providedIn: 'root'
// })
// export class AppService {
//   //baseUrl = environment.baseUrl;

//   constructor(
//     private http: HttpClient
//   ) { }

//   skillsData: any = [
//     {
//       'id': '1',
//       'skill': 'ANGULAR ',
//       'progress': '30%'
//     },
     
//     {
//       'id': '3',
//       'skill': 'JAVASCRIPT JQUERY',
//       'progress': '40%'
//     },
//     {
//       'id': '4',
//       'skill': 'SQL',
//       'progress': '10%'
//     },
     
//     {
//       'id': '6',
//       'skill': 'PYTHON',
//       'progress': '70%'
//     }
// ];

// skills(): Observable<any> {
//     // return this.http.get(this.baseUrl + 'skills');
//     return this.skillsData;
//   }
// }
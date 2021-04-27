import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

declare let alertify: any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor(private httpClient: HttpClient) {

    alertify.set('notifier', 'position', 'top-right');
  }

  success(message: string) {
    alertify.success(message);
    // this.translateService.get(message).subscribe((mes: string) => {
    //   alertify.success(mes);
    // });
    
  }

  error(message: string) {
    // this.translateService.get(message).subscribe((mes: string) => {      
    //   alertify.error(mes);
    // });
    alertify.error(message);
    
  }

  info(message: string) {

    // this.translateService.get(message).subscribe((mes: string) => {
    //   alertify.info(mes);
    // });
    alertify.info(message);
  }

  warning(message: string) {

    // this.translateService.get(message).subscribe((mes: string) => {
    //   alertify.warning(message);
    // });
    alertify.warning(message);
  }

  confirmDelete(url: string, values: any) {


    // alertify.confirm("aa", "bb", () => { this.deleteRequest(url,values); }
    // , () => { this.error("hata")});

    //alertify.confirm('Confirm Message', function(){ alertify.success('Ok') }, function(){ alertify.error('Cancel')});
    // 
    // alertify.confirm('Delete Message',this.deleteRequest(url,values),this.error("Hata"));

    // 



    alertify.alert()
      .setting({
        'label': 'Agree',
        'message': 'This dialog is ',
        'onok': this.delete(url, values)
      }).show();


  }

  delete(url: string, values: any) {
    
    this.httpClient.request("delete", url, values)
  }



}

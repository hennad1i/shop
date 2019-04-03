import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ModalComponent } from 'src/app/components/partials/modal/modal.component';
import { Product } from 'src/app/interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(public dialog: MatDialog) { }

  openOrderModal(){
    this.dialog.open(ModalComponent, {
      width: '300px',
      data: {
        message: 'Order completed successfully'
      }
    })
  }

  openSigninModal(){
    this.dialog.open(ModalComponent, {
      width: '300px',
      data: {
        message: 'Please log in first',
        url: '/sign-in'
      }
    })
  }

  openErrorModal(message: string){
    this.dialog.open(ModalComponent, {
      width: '400px',
      data: {
        message: message
      }
    })
  }

  openEditModal(product: Product){
    this.dialog.open(ModalComponent, {
      width: '400px',
      data: {
        product: product
      }
    })
  }

  openSuccessModal(){
    this.dialog.open(ModalComponent, {
      width: '300px',
      data: {
        message: 'Update successful'
      }
    })
  }

  closeModal() {
    this.dialog.closeAll();
  }
}

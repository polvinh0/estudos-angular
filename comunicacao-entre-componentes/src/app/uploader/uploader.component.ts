import { Component,EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css']
})
export class UploaderComponent implements OnInit {
/**
 * Event Emitter é uma classe que te permite criar
 * eventos customizdos dentro do angular
 */
  @Output()
  uploadCompleto: EventEmitter<string> = new EventEmitter<string>()


  constructor() { }

  ngOnInit(): void {
  }

  fazerUpload() {
    alert('Upload Iniciado...')
    /**
     * o metodo emit() serve para iniciar a emissão do 
     * eento personalizado
     */
    this.uploadCompleto.emit()
  }
}

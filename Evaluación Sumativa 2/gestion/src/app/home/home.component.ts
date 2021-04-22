import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent{
  datos: string = "";
  carro !: Carro;
  formulario = new FormGroup({
    code: new FormControl('', Validators.required),
    name: new FormControl('',Validators.required),
    price: new FormControl('',Validators.required),
    descripcion: new FormControl('',Validators.required),
    
  });

  metodo(){
    if(this.formulario.value.code != "" && this.formulario.value.name != "" && this.formulario.value.price != ""&& this.formulario.value.description != ""){
        this.datos = `Codigo=${this.formulario.value.code}
                          Nombre=${this.formulario.value.name}
                          Precio=${this.formulario.value.price}
                          Descripcion=${this.formulario.value.description}
                          `;
        this.carro = new Carro(this.formulario.value.code,this.formulario.value.name,this.formulario.value.price,this.formulario.value.description);
    }
    else{
          alert("Complete Todos los campos")
    }
    
  }
}

class Carro  {
  constructor ( public code: number, public name: string, public price:number , public description : string) {

  }
}

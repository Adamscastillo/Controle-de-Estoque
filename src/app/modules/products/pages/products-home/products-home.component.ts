import { ProductsDataTransferService } from 'src/app/shared/services/products/products-data-transfer.service';
import { ProductsService } from './../../../../services/products/products.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { GetAllProductsResponse } from 'src/app/models/interfaces/products/response/GetAllProductsResponse';

@Component({
  selector: 'app-products-home',
  templateUrl: './products-home.component.html',
  styleUrls: [],
})
export class ProductsHomeComponent implements OnInit, OnDestroy {
  private readonly destroy$: Subject<void> = new Subject();
  public productsDatas: Array<GetAllProductsResponse> = [];

  constructor(
    private productsService: ProductsService,
    private ProductsDtService: ProductsDataTransferService,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    //verfica se tem dados armazenado em memoria se nao tem carrega da Api
    this.getServiceProductsDatas();
  }

  getServiceProductsDatas() {
    const productsLoaded = this.ProductsDtService.getProductsDatas();
    if (productsLoaded.length > 0) {
      this.productsDatas = productsLoaded;
    } else this.getAPIProductsDatas();
  }

  getAPIProductsDatas() {
    this.productsService
      .getAllProducts()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          if (response.length > 0) {
            this.productsDatas = response;
          }
        },
        error: (err) => {
          console.log(err);
          this.messageService.add({
            severity: 'error',
            summary: 'Erro',
            detail: 'erros ao buscar Produtos',
            life: 2500,
          });
          this.router.navigate(['/deshboard']);
        },
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

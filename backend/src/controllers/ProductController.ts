import { Request, Response } from 'express';
import { IProductCreateDTO } from '~/dtos/productCreateDTO';

import { ProductService } from '~/services/ProductService';

export class ProductController {

    async findAll(request: Request, response: Response): Promise<Response> {
        const productService: ProductService = new ProductService();
        const products = await productService.findAll();
        return response.json(products);
    }

    async create(request: Request, response: Response): Promise<Response> {
        const productCreateDTO: IProductCreateDTO = request.body as IProductCreateDTO;
        const productService: ProductService = new ProductService();
        const createdProduct = await productService.create(productCreateDTO);
        return response.json(createdProduct);
    }

}
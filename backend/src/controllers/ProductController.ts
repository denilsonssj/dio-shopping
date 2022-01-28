import { Request, Response } from 'express';
import { IProductCreateDTO } from '~/dtos/productCreateDTO';

import { ProductService } from '~/services/ProductService';

export class ProductController {

    constructor() {}

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

    async findOneById(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const productService: ProductService = new ProductService();
        const product = await productService.findOneById(id);
        return response.json(product);
    }

    async findByCategory(request: Request, response: Response): Promise<Response> {
        const { category } = request.params;
        const productService: ProductService = new ProductService();
        const products = await productService.findByCategory(category);
        return response.json(products);
    }

    async findByCategoryAndIdNotEqualsAndLimit(request: Request, response: Response): Promise<Response> {
        const { category } = request.params;
        const { limit, id_not_equal } = request.query as { limit: string, id_not_equal: string };
        const productService: ProductService = new ProductService();
        const products = await productService.findByCategoryAndIdNotEqualsAndLimit(category, id_not_equal, limit);
        return response.json(products);
    }
    

}
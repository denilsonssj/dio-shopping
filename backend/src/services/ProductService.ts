import { getCustomRepository } from 'typeorm';

import { Product } from '~/entities/Product';
import { ProductRepository } from '~/repositories/ProductRepository';
import { IProductCreateDTO } from '~/dtos/productCreateDTO';

export class ProductService {

    async findAll(): Promise<Product[]> {
        const productRepository = getCustomRepository(ProductRepository);
        const products = await productRepository.find();
        return products;
    }

    async create(productCreateDTO: IProductCreateDTO) {
        const productRepository = getCustomRepository(ProductRepository);
        const createdProduct = productRepository.create(productCreateDTO);
        await productRepository.save(createdProduct);
        return createdProduct;
    }

}
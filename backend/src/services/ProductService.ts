import { getCustomRepository } from 'typeorm';

import { Product } from '~/entities/Product';
import { ProductRepository } from '~/repositories/ProductRepository';
import { IProductCreateDTO } from '~/dtos/productCreateDTO';

export class ProductService {

    private readonly productRepository: ProductRepository;

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

    async findOneById(id: string) {
        const productRepository = getCustomRepository(ProductRepository);
        const productExists = await productRepository.findOne({ id });
        if(!productExists) {
            throw new Error('Product not found!');
        }
        return productExists;
    }

    async findByCategory(category: string): Promise<Product[]> {
        const productRepository = getCustomRepository(ProductRepository);
        const products = await productRepository.find({
            where: {
                category,
            },
            order: {
                category: 'DESC',
            }
        });
        return products;
    }

}
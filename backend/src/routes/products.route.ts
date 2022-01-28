import { Router } from 'express';

import { ProductController } from '~/controllers/ProductController';

const productRouter = Router();
const productController = new ProductController();

productRouter.get('/products', productController.findAll);
productRouter.get('/products/:id', productController.findOneById);
productRouter.get('/products/category/:category', productController.findByCategory);
productRouter.get('/products/query-by-category/:category', productController.findByCategoryAndIdNotEqualsAndLimit);
productRouter.post('/products', productController.create);

export { productRouter };

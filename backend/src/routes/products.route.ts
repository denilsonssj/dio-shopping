import { Router } from 'express';

import { ProductController } from '~/controllers/ProductController';

const productRouter = Router();
const productController = new ProductController();

productRouter.get('/products', productController.findAll);
productRouter.get('/products/:id', productController.findById);
productRouter.post('/products', productController.create);

export { productRouter };

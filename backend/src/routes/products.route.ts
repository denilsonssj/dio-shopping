import { Router } from 'express';

import { ProductController } from '~/controllers/ProductController';

const productRouter = Router();
const productController = new ProductController();

productRouter.get('/products', productController.findAll);
productRouter.post('/products', productController.create);

export { productRouter };

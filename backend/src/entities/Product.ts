import { Column, Entity, PrimaryColumn } from 'typeorm';

import { generateRandomUUID } from '~/utils/generateRandomUUID';

@Entity({ name: 'products' })
export class Product {

    @PrimaryColumn({ type: 'uuid' })
    id: string;

    @Column()
    title: string;

    @Column()
    category: string;

    @Column({ type: 'text' })
    description: string;

    @Column({ name: 'image_url', type: 'text' })
    imageUrl: string;

    @Column({ type: 'decimal' })
    price: number;

    @Column({ type: 'decimal' })
    rating: number;

    constructor() {
        if (!this.id) {
            this.id = generateRandomUUID();
        }
    }
}

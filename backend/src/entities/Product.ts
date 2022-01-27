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

    @Column({ type: 'real' })
    price: number;

    @Column({ type: 'real' })
    rating: number;

    constructor() {
        if (!this.id) {
            this.id = generateRandomUUID();
        }
    }
}

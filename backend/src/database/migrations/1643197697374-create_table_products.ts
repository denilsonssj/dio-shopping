import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createTableProducts1643197697374 implements MigrationInterface {

    tableName: string = 'products';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: this.tableName,
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    isNullable: false,
                    isUnique: true,
                },
                {
                    name: 'title',
                    type: 'varchar',
                    length: '256',
                    isNullable: false,
                },
                {
                    name: 'description',
                    type: 'text',
                    isNullable: false,
                },
                {
                    name: 'category',
                    type: 'varchar',
                    length: '128',
                    isNullable: false,
                },
                {
                    name: 'price',
                    type: 'decimal',
                    isNullable: false,
                },
                {
                    name: 'rating',
                    type: 'decimal',
                    isNullable: false,
                },
            ],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.tableName);
    }

}

import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createTableProducts1643107859903 implements MigrationInterface {
    tableName: string = 'products';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: this.tableName,
            columns: [
                {
                    name: 'id',
                    isPrimary: true,
                    isNullable: false,
                    isUnique: true,
                    type: 'uuid',
                },
                {
                    name: 'title',
                    isNullable: false,
                    type: 'varchar',
                    length: '256',
                },
                {
                    name: 'category',
                    isNullable: false,
                    type: 'varchar',
                    length: '128',
                },
                {
                    name: 'description',
                    isNullable: false,
                    type: 'text',
                },
                {
                    name: 'price',
                    isNullable: false,
                    type: 'decimal',
                },
                {
                    name: 'rating',
                    isNullable: false,
                    type: 'decimal',
                },
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.tableName);
    }

}

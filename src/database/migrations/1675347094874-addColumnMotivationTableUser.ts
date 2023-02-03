import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class addColumnMotivationTableUser1675347094874
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "user",
      new TableColumn({
        name: "motivation",
        type: "varchar",
        isNullable: true,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("user", "motivation");
  }
}

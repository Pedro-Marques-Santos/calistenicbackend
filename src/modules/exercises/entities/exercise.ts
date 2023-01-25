import { v4 as uuidV4 } from "uuid";

import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("exercise")
class Exercise {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  level: string;

  @Column()
  muscules: string;

  @Column()
  description: string;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Exercise };

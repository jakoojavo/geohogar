// src/models/Operacion.ts
import { Table, Column, Model, AutoIncrement, DataType, PrimaryKey, BelongsTo, ForeignKey } from "sequelize-typescript";
import { Propiedades } from "./Propiedades.models";


@Table({
  tableName: "operacion",
  timestamps: false
})
export class Operacion extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
  })
  ID_operacion!: number;

  @Column({
    type: DataType.STRING(45),
  })
  tipo!: string;
  @Column({
    type: DataType.DATE
  })
  fechainicio!: Date;

  @Column({
    type: DataType.DATE
  })
  fechafin!: Date;






 
  @ForeignKey(() => Propiedades)
  @Column({
    type: DataType.INTEGER,
  })
  ID_propiedades!: number;

  @BelongsTo(() => Propiedades)
  propiedad!: Propiedades;

  

  
}
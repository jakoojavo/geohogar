import { Table, Column, Model, AutoIncrement, DataType, PrimaryKey, BelongsTo, ForeignKey } from "sequelize-typescript";
import  Propiedades  from "./Propiedades.models";


@Table({
  tableName: "operacion",
  timestamps: true
})
class Operacion extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
  })
  declare ID_operacion: number;

  @Column({
    type: DataType.STRING(45),
  })
  declare tipo: string;
  @Column({
    type: DataType.DATEONLY
  })
  declare fechainicio: Date;

  @Column({
    type: DataType.DATEONLY
  })
  declare fechafin: Date;
  @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: true
    })
    declare estado:boolean;


  @ForeignKey(() => Propiedades)
  @Column({
    type: DataType.INTEGER,
  })
  declare ID_propiedades: number;

  @BelongsTo(() => Propiedades)
  declare propiedad: Propiedades;
}
export default Operacion;
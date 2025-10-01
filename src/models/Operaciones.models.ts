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
  ID_operacion!: number;

  @Column({
    type: DataType.STRING(45),
  })
  tipo!: string;
  @Column({
    type: DataType.DATEONLY
  })
  fechainicio!: Date;

  @Column({
    type: DataType.DATEONLY
  })
  fechafin!: Date;
  @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: true
    })
    estado!:boolean;


  @ForeignKey(() => Propiedades)
  @Column({
    type: DataType.INTEGER,
  })
  ID_propiedades!: number;

  @BelongsTo(() => Propiedades)
  propiedad!: Propiedades;
}
export default Operacion;
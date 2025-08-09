import { Table, Column, Model, AutoIncrement, DataType, PrimaryKey, BelongsTo, ForeignKey } from "sequelize-typescript";
import  Propiedades  from "./Propiedades.models";
import  Estadoconsulta  from "./Estadoconsulta.models";

@Table({
  tableName: "consulta",
  timestamps: true
})
class Consulta extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
  })
  ID_consulta!: number;

  @Column({
    type: DataType.STRING(45),
  })
  nombre!: string;
  @Column({
    type: DataType.STRING(45),
  })
  email!: string;
  @Column({
    type: DataType.STRING(125),
  })
  Mensaje!:string;
  @Column({
    type: DataType.STRING(45),
  })
  telefono!:String


  
  @ForeignKey(() => Propiedades)
  @Column({
    type: DataType.INTEGER,
  })
  ID_propiedades!: number;

  @BelongsTo(() => Propiedades)
  propiedad!: Propiedades;

  @ForeignKey(() => Estadoconsulta)
  @Column({
    type: DataType.INTEGER,
  })
  ID_estadoconsulta!: number;

  @BelongsTo(() => Estadoconsulta)
  estadoconsulta!: Estadoconsulta;
}
export default Consulta;
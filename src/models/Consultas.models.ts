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
  declare ID_consulta: number;

  @Column({
    type: DataType.STRING(145),
  })
  declare nombre_cliente: string;
  @Column({
    type: DataType.STRING(45),
  })
  declare email: string;
  @Column({
    type: DataType.STRING(125),
  })
  declare Mensaje:string;
  @Column({
    type: DataType.STRING(45),
  })
  declare telefono:String
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

  @ForeignKey(() => Estadoconsulta)
  @Column({
    type: DataType.INTEGER,
  })
  declare ID_estadoconsulta: number;

  @BelongsTo(() => Estadoconsulta)
  declare estado_consulta: Estadoconsulta;
}
export default Consulta;
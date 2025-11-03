import { Table, Column, Model, AutoIncrement, DataType, Default, PrimaryKey, BelongsTo, HasMany, ForeignKey } from "sequelize-typescript";
import Imagen from "./Imagen.models";
import Agenteinmobiliario from "./Agenteinmobiliario.models";
import Estadopropiedad from "./Estadopropiedad.models";
import Tipoinmueble from "./Tipoinmueble.models";
import Zona from "./Zona.models";
import Operacion from "./Operaciones.models";
import Consulta from "./Consultas.models";
import Ambientes from "./Ambientes.models";
import Mascota from "./Mascota.models";


@Table({
  tableName: "propiedades",
  timestamps: true
})

class Propiedades extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
  })
  declare ID_propiedades: number;

  @Column({
    type: DataType.STRING(255),
  })
  declare direccion: string;

  @Column({
    type: DataType.DECIMAL(12, 2)
  })
  declare precio: number;

  @Column({
    type: DataType.STRING(225)
  })
  declare descripcion: string;

  @Column({
    type: DataType.STRING(125)
  })
  declare latitud: string;
  @Column({
    type: DataType.STRING(125)
  })
  declare longitud: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true
  })
  declare estado: boolean;

  @ForeignKey(() => Zona)
  @Column({
    type: DataType.INTEGER,
  })
  declare ID_zona: number;
  @BelongsTo(() => Zona)
  declare zona: Zona;

  @ForeignKey(() => Agenteinmobiliario)
  @Column({
    type: DataType.INTEGER,
  })
  declare ID_agente: number;

  @BelongsTo(() => Agenteinmobiliario)
  declare agenteinmobiliario: Agenteinmobiliario;

  @ForeignKey(() => Tipoinmueble)
  @Column({
    type: DataType.INTEGER,
  })
  declare ID_tipoinmueble: number;

  @BelongsTo(() => Tipoinmueble)
  declare tipoinmueble: Tipoinmueble;

  @ForeignKey(() => Estadopropiedad)
  @Column({
    type: DataType.INTEGER,
  })
  declare ID_estadopropiedad: number;

  @BelongsTo(() => Estadopropiedad)
  declare estadopropiedad: Estadopropiedad;



  @ForeignKey(() => Ambientes)
  @Column({
    type: DataType.INTEGER,
  })
  declare ID_ambiente: number;

  @BelongsTo(() => Ambientes)
  declare ambientes: Ambientes;

   @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true
  })
  declare garage: boolean;

   @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true
  })
  declare balcon: boolean;

   @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true
  })
  declare patio: boolean;

   @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true
  })
  declare acepta_mascota: boolean;

  @ForeignKey(() => Mascota)
  @Column({
    type: DataType.INTEGER,
  })
  declare ID_Mascota: number;

  @BelongsTo(() => Mascota)
  declare Mascota: Mascota;





  @HasMany(() => Imagen)
  declare imagenes: Imagen[];


  @HasMany(() => Operacion)
  declare operaciones: Operacion[];

  @HasMany(() => Consulta)
  declare consultas: Consulta[];


}
export default Propiedades
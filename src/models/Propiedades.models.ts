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
  ID_propiedades!: number;

  @Column({
    type: DataType.STRING(255),
  })
  direccion!: string;

  @Column({
    type: DataType.DECIMAL(12, 2)
  })
  precio!: number;

  @Column({
    type: DataType.STRING(225)
  })
  descripcion!: string;

  @Column({
    type: DataType.STRING(125)
  })
  latitud!: string;
  @Column({
    type: DataType.STRING(125)
  })
  longitud!: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true
  })
  estado!: boolean;

  @ForeignKey(() => Zona)
  @Column({
    type: DataType.INTEGER,
  })
  ID_zona!: number;
  @BelongsTo(() => Zona)
  zona!: Zona;

  @ForeignKey(() => Agenteinmobiliario)
  @Column({
    type: DataType.INTEGER,
  })
  ID_agente!: number;

  @BelongsTo(() => Agenteinmobiliario)
  agenteinmobiliario!: Agenteinmobiliario;

  @ForeignKey(() => Tipoinmueble)
  @Column({
    type: DataType.INTEGER,
  })
  ID_tipoinmueble!: number;

  @BelongsTo(() => Tipoinmueble)
  tipoinmueble!: Tipoinmueble;

  @ForeignKey(() => Estadopropiedad)
  @Column({
    type: DataType.INTEGER,
  })
  ID_estadopropiedad!: number;

  @BelongsTo(() => Estadopropiedad)
  estadopropiedad!: Estadopropiedad;



  @ForeignKey(() => Ambientes)
  @Column({
    type: DataType.INTEGER,
  })
  ID_ambiente!: number;

  @BelongsTo(() => Ambientes)
  ambientes!: Ambientes;

   @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true
  })
  garage!: boolean;

   @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true
  })
  balcon!: boolean;

   @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true
  })
  patio!: boolean;

   @Column({
    type: DataType.BOOLEAN,
    allowNull: false,

    defaultValue: false

  })
  acepta_mascota!: boolean;

  @ForeignKey(() => Mascota)
  @Column({
    type: DataType.INTEGER,

    allowNull: true,

  })
  ID_Mascota!: number;

  @BelongsTo(() => Mascota)
  Mascota!: Mascota;





  @HasMany(() => Imagen)
  imagenes!: Imagen[];


  @HasMany(() => Operacion)
  operaciones!: Operacion[];

  @HasMany(() => Consulta)
  consultas!: Consulta[];


}
export default Propiedades
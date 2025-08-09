import { Table, Column, Model, AutoIncrement, DataType, Default, PrimaryKey, BelongsTo, HasMany, ForeignKey } from "sequelize-typescript";
import  Imagen  from "./Imagen.models";
import  Agenteinmobiliario  from "./Agenteinmobiliario.models";
import  Estadopropiedad  from "./Estadopropiedad.models";
import  Piezas  from "./Piezas.models";
import  Tipoinmueble  from "./Tipoinmueble.models";
import  Zona  from "./Zona.models";
import Operacion  from "./Operaciones.models";
import Consulta from "./Consultas.models";


@Table({
    tableName: "propiedades",
    timestamps: false
})

class Propiedades extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
    })
    ID_propiedades!: number;
    @Column({
        type: DataType.STRING(45),
    })
    direccion!: string;
    @Column({
        type: DataType.DECIMAL(10, 5)
    })
    precio!: number;
    @Column({
        type: DataType.STRING(125)
    })
    descripcion!: string;
    @Column({
        type: DataType.STRING(125)
    })
    geolocalizacion!: string;
    @Column({
        type: DataType.INTEGER,
    })
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
  
  @ForeignKey(() => Piezas)
  @Column({
    type: DataType.INTEGER,
  })
  ID_piezas!: number;

  @BelongsTo(() => Piezas)
  piezas!: Piezas;

  @ForeignKey(() => Imagen)
  @Column({
    type: DataType.INTEGER,
  })
  ID_imagen!: number;

  @BelongsTo(() => Imagen)
  imagen!: Imagen;


  @HasMany(() => Operacion)
  operaciones!: Operacion[];

  @HasMany(() => Consulta)
  consultas!: Consulta[];


}
export default Propiedades
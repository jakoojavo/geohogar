import { Table, Column, Model, AutoIncrement, DataType, Default, PrimaryKey, BelongsTo, HasMany, ForeignKey } from "sequelize-typescript";
import Imagen from "./Imagen.models";
import Agenteinmobiliario from "./Agenteinmobiliario.models";
import Estadopropiedad from "./Estadopropiedad.models";
import Tipoinmueble from "./Tipoinmueble.models";
import Zona from "./Zona.models";
import Operacion from "./Operaciones.models";
import Consulta from "./Consultas.models";
import Ambientes from "./Ambientes.models";


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
    type: DataType.STRING(255),
  })
  direccion!: string;

  @Column({
    type: DataType.DECIMAL(5,25)
  })
  precio!: number;

  @Column({
    type: DataType.STRING(225)
  })
  descripcion!: string;

  @Column({
    type: DataType.STRING(125)
  })
  geolocalizacion!: string;

  @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: true
    })
    estado!:boolean;

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

  @HasMany(() => Imagen)
  imagenes!: Imagen[];


  @HasMany(() => Operacion)
  operaciones!: Operacion[];

  @HasMany(() => Consulta)
  consultas!: Consulta[];


}
export default Propiedades
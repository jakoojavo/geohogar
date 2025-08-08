import { Table,Column,Model,AutoIncrement,DataType,Default, PrimaryKey, HasMany } from "sequelize-typescript";
import { Propiedades } from "./Propiedades.models";


@Table({
    tableName:"agenteinmobiliario",
    timestamps: true
})

class Agenteinmobiliario extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
    })
    ID_piezas!:number;
    @Column({
        type: DataType.STRING(45),
    })
    nombre!:string;
    @Column({
        type: DataType.STRING(45),
    })
    email!:string;
    @Column({
        type: DataType.STRING(100),        
    })
    telefono!:string
    @Column({
        type: DataType.STRING(45)
    })
    cuild!:string;
    @Column({
        type: DataType.STRING(45)
     })
     dni!:string;
    @Column({
        type: DataType.STRING(45)
    })
    estado!:string;
    @Column({
        type: DataType.STRING(45)
    })
    clave!:string;
    @Column({
        type: DataType.STRING(45)
    })
    matricula!:string;
    @Column({
        type: DataType.STRING(45)
    })
    observaciones!:string

    @HasMany(() => Propiedades)
    propiedades!: Propiedades[];
}

export default Agenteinmobiliario
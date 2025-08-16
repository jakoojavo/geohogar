import { Table,Column,Model,AutoIncrement,DataType,Default, PrimaryKey, HasMany } from "sequelize-typescript";
import  Propiedades  from "./Propiedades.models";


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
    ID_agente!:number;
    @Column({
        type: DataType.STRING(145),
    })
    nombre!:string;
    @Column({
        type: DataType.STRING(145),
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
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: true
    })
    estado!:boolean;
    @Column({
        type: DataType.STRING(255)
    })
    clave!:string;
    @Column({
        type: DataType.STRING(45)
    })
    matricula!:string;
    @Column({
        type: DataType.STRING(145)
    })
    observaciones!:string

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: false
    })
    esadmin!:boolean;

    @HasMany(() => Propiedades)
    propiedades!: Propiedades[];
}

export default Agenteinmobiliario
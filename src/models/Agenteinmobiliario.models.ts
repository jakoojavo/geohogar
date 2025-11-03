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
    declare ID_agente:number;
    @Column({
        type: DataType.STRING(145),
    })
    declare nombre:string;
    @Column({
        type: DataType.STRING(145),
        unique: true,
        allowNull: false,
    })
    declare email:string;
    
    @Column({
        type: DataType.STRING(100), 
        unique: true,
        allowNull: false,       
    })
    declare telefono:string
    @Column({
        type: DataType.STRING(45)
    })
    declare cuild:string;
    @Column({
        type: DataType.STRING(45),
        unique: true,
        allowNull: false,
     })
     declare dni:string;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: true
    })
    declare estado:boolean;
    @Column({
        type: DataType.STRING(255)
    })
    declare clave:string;
    @Column({
        type: DataType.STRING(45)
    })
    declare matricula:string;
    @Column({
        type: DataType.STRING(145)
    })
    declare observaciones:string

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: false
    })
    declare esadmin:boolean;

    @HasMany(() => Propiedades)
    declare propiedades: Propiedades[];
}

export default Agenteinmobiliario
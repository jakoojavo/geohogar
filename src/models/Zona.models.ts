import { Table,Column,Model,AutoIncrement,DataType,Default, PrimaryKey, HasMany } from "sequelize-typescript";
import  Propiedades  from "./Propiedades.models";

@Table({
    tableName:"zona",
    timestamps: true
})

class Zona extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
    })
    ID_zona!:number;
    @Column({
        type: DataType.STRING(145),
    })
    zona!:string;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: true
    })
    estado!:boolean;

    @HasMany(() => Propiedades)
    propiedades!: Propiedades[];
}

export default Zona
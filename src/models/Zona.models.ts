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
    declare ID_zona:number;
    @Column({
        type: DataType.STRING(145),
    })
    declare zona:string;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: true
    })
    declare estado:boolean;

    @HasMany(() => Propiedades)
    declare propiedades: Propiedades[];
}

export default Zona
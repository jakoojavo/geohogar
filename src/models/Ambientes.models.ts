import { Table,Column,Model,AutoIncrement,DataType,Default, PrimaryKey, HasMany } from "sequelize-typescript";
import  Propiedades  from "./Propiedades.models";

@Table({
    tableName:"ambientes",
    timestamps: true
})

class Ambientes extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
    })
    declare ID_ambiente:number;
    @Column({
        type: DataType.STRING(145),
    })
    declare ambientes:string;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: true
    })
    declare estado:boolean;    

    @HasMany(() => Propiedades)
    declare propiedades: Propiedades[];
}

export default Ambientes
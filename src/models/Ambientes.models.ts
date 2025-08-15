import { Table,Column,Model,AutoIncrement,DataType,Default, PrimaryKey, HasMany } from "sequelize-typescript";
import  Propiedades  from "./Propiedades.models";

@Table({
    tableName:"ambientes",
    timestamps: false
})

class Ambientes extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
    })
    ID_ambiente!:number;
    @Column({
        type: DataType.STRING(145),
    })
    ambientes!:string;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: true
    })
    estado!:boolean;    

    @HasMany(() => Propiedades)
    propiedades!: Propiedades[];
}

export default Ambientes
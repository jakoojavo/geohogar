import { Table,Column,Model,AutoIncrement,DataType,Default, PrimaryKey, HasMany } from "sequelize-typescript";
import { Propiedades } from "./Propiedades.models";

@Table({
    tableName:"imagen",
    timestamps: false
})

class Imagen extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
    })
    ID_imagen!:number;
    @Column({
        type: DataType.STRING(45),
    })
    nombre!:string;

    @HasMany(() => Propiedades)
    propiedades!: Propiedades[];
}

export default Imagen
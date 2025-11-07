import { Table,Column,Model,AutoIncrement,DataType,Default, PrimaryKey, HasMany } from "sequelize-typescript";
import  Propiedades  from "./Propiedades.models";

@Table({
    tableName:"tipoinmueble",
    timestamps: true
})

class Tipoinmueble extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
    })
    declare ID_tipoinmueble:number;
    @Column({
        type: DataType.STRING(45),
    })
    declare inmueble:string;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: true
    })
    declare estado:boolean;

    @HasMany(() => Propiedades)
    declare propiedades: Propiedades[];
}

export default Tipoinmueble


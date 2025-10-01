import { Table,Column,Model,AutoIncrement,DataType,Default, PrimaryKey, HasMany } from "sequelize-typescript";
import  Propiedades  from "./Propiedades.models";

@Table({
    tableName:"mascota",
    timestamps: true
})

class Mascota extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
    })
    ID_Mascota!:number;
    @Column({
        type: DataType.STRING(145),
    })
    Mascota!:string;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: true
    })
    estado!:boolean;    

    @HasMany(() => Propiedades)
    propiedades!: Propiedades[];
}

export default Mascota
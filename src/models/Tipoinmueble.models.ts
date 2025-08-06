import { Table,Column,Model,AutoIncrement,DataType,Default, PrimaryKey } from "sequelize-typescript";

@Table({
    tableName:"tipoinmueble",
    timestamps: false
})

class Tipoinmueble extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
    })
    ID_tipoinmueble!:number;
    @Column({
        type: DataType.STRING(45),
    })
    nombre!:string;
}

export default Tipoinmueble


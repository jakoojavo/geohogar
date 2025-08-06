import { Table,Column,Model,AutoIncrement,DataType,Default, PrimaryKey } from "sequelize-typescript";


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
}

export default Imagen
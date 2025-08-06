import { Table,Column,Model,AutoIncrement,DataType,Default, PrimaryKey } from "sequelize-typescript";


@Table({
    tableName:"piezas",
    timestamps: false
})

class Piezas extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
    })
    ID_piezas!:number;
    @Column({
        type: DataType.STRING(45),
    })
    nombre!:string;
}

export default Piezas
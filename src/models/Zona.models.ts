import { Table,Column,Model,AutoIncrement,DataType,Default, PrimaryKey } from "sequelize-typescript";

@Table({
    tableName:"zona",
    timestamps: false
})

class Zona extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
    })
    ID_zona!:number;
    @Column({
        type: DataType.STRING(45),
    })
    nombre!:string;
}

export default Zona
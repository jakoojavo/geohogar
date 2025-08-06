import { Table,Column,Model,AutoIncrement,DataType,Default, PrimaryKey } from "sequelize-typescript";


@Table({
    tableName:"estadopropiedad",
    timestamps: false
})

class Estadopropiedad extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
    })
    ID_estadopropiedad!:number;
    @Column({
        type: DataType.STRING(45),
    })
    nombre!:string;
}

export default Estadopropiedad
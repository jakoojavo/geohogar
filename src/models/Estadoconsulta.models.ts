import { Table,Column,Model,AutoIncrement,DataType,Default, PrimaryKey, HasMany } from "sequelize-typescript";
import Consulta from "./Consultas.models";


@Table({
    tableName:"estadoconsulta",
    timestamps: false
})

class Estadoconsulta extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
    })
    ID_estadoconsulta!:number;
    @Column({
        type: DataType.STRING(45),
    })
    nombre!:string;

    @HasMany(() => Consulta)
    consultas!: Consulta[];
}

export default Estadoconsulta
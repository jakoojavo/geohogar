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
    estado_consulta!:string;
    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: true
    })
    estado!:boolean;

    @HasMany(() => Consulta)
    consultas!: Consulta[];
}

export default Estadoconsulta
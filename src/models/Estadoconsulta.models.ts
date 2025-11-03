import { Table,Column,Model,AutoIncrement,DataType,Default, PrimaryKey, HasMany } from "sequelize-typescript";
import Consulta from "./Consultas.models";


@Table({
    tableName:"estadoconsulta",
    timestamps: true
})

class Estadoconsulta extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
    })
    declare ID_estadoconsulta:number;
    @Column({
        type: DataType.STRING(45),
    })
    declare estado_consulta:string;
    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: true
    })
    declare estado:boolean;

    @HasMany(() => Consulta)
    declare consultas: Consulta[];
}

export default Estadoconsulta
import { Table,Column,Model,AutoIncrement,DataType,Default, PrimaryKey, HasMany } from "sequelize-typescript";
import  Propiedades  from "./Propiedades.models";


@Table({
    tableName:"estadopropiedad",
    timestamps: true
})

class Estadopropiedad extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
    })
    declare ID_estadopropiedad:number;
    @Column({
        type: DataType.STRING(45),
    })
    declare estado_propiedad:string;
    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: true
    })
    declare estado:boolean;

    @HasMany(() => Propiedades)
    declare propiedades: Propiedades[];
}

export default Estadopropiedad
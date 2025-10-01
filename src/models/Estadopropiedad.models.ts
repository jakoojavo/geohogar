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
    ID_estadopropiedad!:number;
    @Column({
        type: DataType.STRING(45),
    })
    estado_propiedad!:string;
    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: true
    })
    estado!:boolean;

    @HasMany(() => Propiedades)
    propiedades!: Propiedades[];
}

export default Estadopropiedad
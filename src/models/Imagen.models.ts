import { Table,Column,Model,AutoIncrement,DataType,Default, PrimaryKey, BelongsTo ,ForeignKey, HasMany } from "sequelize-typescript";
import  Propiedades  from "./Propiedades.models";

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
        type: DataType.STRING(255),
    })
    URL!:string;
    
    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: true
    })
    estado!:boolean;

    @ForeignKey(() => Propiedades)
    @Column({
    type: DataType.INTEGER,
    })
    ID_propiedad!: number;

    @BelongsTo(() => Propiedades)
    propiedad!: Propiedades;

    
}

export default Imagen
import { Table,Column,Model,AutoIncrement,DataType,Default, PrimaryKey, BelongsTo ,ForeignKey, HasMany } from "sequelize-typescript";
import  Propiedades  from "./Propiedades.models";

@Table({
    tableName:"imagen",
    timestamps: true
})

class Imagen extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
    })
    declare ID_imagen:number;
    @Column({
        type: DataType.STRING(255),
    })
    declare URL:string;
    
    @Column({
        type: DataType.STRING(255),
        allowNull: true, // public_id might not be present for old images or if upload fails
    })
    declare public_id:string;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: true
    })
    declare estado:boolean;

    @ForeignKey(() => Propiedades)
    @Column({
    type: DataType.INTEGER,
    })
    declare ID_propiedad: number;

    @BelongsTo(() => Propiedades)
    declare propiedad: Propiedades;

    
}

export default Imagen
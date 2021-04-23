import { Column, CreateDateColumn, Entity, PrimaryColumn , JoinColumn , ManyToOne } from "typeorm";
import {v4 as uuid} from 'uuid';
import { User } from './User';

@Entity("connections")
class Connections{
  @PrimaryColumn()
  id : string;

  @Column()
  admin_id : string;

  @Column()
  socket_id : string;

  @JoinColumn({name : "user_id"})
  @ManyToOne(()=> User)
  user : User ;

  @Column()
  user_id : string;

  @CreateDateColumn()
  created_at : Date;

  @CreateDateColumn()
  updated_at : Date;

  constructor(){
    if(!this.id){
      this.id = uuid();
    }
  }
}

export {Connections}
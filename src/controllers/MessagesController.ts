import {Request , Response} from 'express';
import { MessagesServices  } from '../services/MessagesService';



class MessagesController {

  async create(req : Request , res : Response){
    const messagesServices = new MessagesServices();
    const {admin_id , user_id , text} = req.body;
    const message = await messagesServices.create({
      admin_id,
      user_id,
      text
    })
    return res.status(200).json(message);
  }
  async showByUser(req : Request , res : Response){
    const {id} = req.params;
    const messagesServices = new MessagesServices();

    const list = await messagesServices.listByUser(id);

    return res.json(list);

  }
}

export {MessagesController}
import models from '../../models/index'

const getAll = async (req, res) =>{
   const order = await models.order.findAll({raw:true});
   res.json(order);
}

export default {
    getAll
}
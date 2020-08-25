import { reverse } from 'dns';
import {itemModel} from '../../models/mongodb/index';

export default async (req: any, res: any, next: any) => {
    try{
        const data = await itemModel.find()
            .where('userRating').gt(4.0).lt(5.0)
            .where('reviewCount').gt(10).lt(20)
            .sort({rating: -1})
            .limit(5)
        return res.status(200).json(data)
    }catch(error){
        next(error.message)
    }
}


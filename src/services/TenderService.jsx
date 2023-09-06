
import { instance } from '../configs/apiInstance';

const getTenders = async () => {
   try {
      const response = await instance.get("/tender");
      return response.data;
   } catch (error) {
      throw new Error(error.message)
   }
}

const createTender = async ( { title, category_id, content, start_date, end_date }) => {
   try {
      const response = await instance.post("/tender",  { title, category_id, content, start_date, end_date });
      return response.data;
   } catch (error) {
      throw new Error(error.message)
   }
}

const TenderService = {
   getTenders,
   createTender
}

export default TenderService
//import { supabase } from "../helpers/supabaseConfig";
import { IRehber } from '../models/rehber';

class RehberService {

    // async Kisiler(): Promise<IRehber[] | null> {
    //     let rehber: IRehber[] = []; 
    //     const { data, error } = await supabase.from('rehber').select();
    //     // console.log(data)
    //     if (error) {
    //         return null;
    //     }
    //     rehber.push(...data)
    //     return rehber;
    // }
}

export default new RehberService();

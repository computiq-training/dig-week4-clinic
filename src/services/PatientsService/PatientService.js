import { BaseService } from "../AxiosX"

export class PatientService extends BaseService {
    constructor(endpointName = 'patients') {
        super(endpointName)
    }
    async all(){
        return await this.http.get("")
    }
    async update(id,params){
        return await this.http.put(`/${id}?`,{},params)
    }
    async delete(id){
        return await this.http.remove(`/${id}`)
    }
  
    async create(data)
    {
        return await this.http.post(``,data)
    }
}
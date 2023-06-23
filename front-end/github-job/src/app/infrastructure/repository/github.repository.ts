
import {Http} from '@/App/infrastructure/http'
import { Github_Service } from '@/App/domain/service';
import { AxiosResponse } from 'axios';
import { Search_Dto } from '../../domain/dto/search.dto';

class Github_Repository implements Github_Service{
    search = async (name: string): Promise<AxiosResponse<Search_Dto, any>> => {
        return await this.http.get(
            `${process.env.REACT_URL_API_REMOTE}/project/search?category=${name}`,
            this.http.header_get()
        );
    }

    public static get_repository():Github_Repository{
        if(this.repository === undefined) this.repository = new Github_Repository();
        return this.repository;
    }

    private http:Http = new Http();
    private static repository:Github_Repository;
}

export {Github_Repository}
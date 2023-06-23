import { AxiosResponse } from "axios";
import {Search_Dto} from '@/App/domain/dto'

interface Github_Service {
    search(name:string):Promise<AxiosResponse<Search_Dto>>;
}

export type {Github_Service}
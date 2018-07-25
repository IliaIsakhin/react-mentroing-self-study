import { EnumSearchBy, EnumSortBy, EnumSortOrder }  from './Enums/Enums'

export default interface ParamsDTO {
    search: string,
    searchBy: EnumSearchBy,
    limit: number,
    sortBy: EnumSortBy,
    sortOrder:EnumSortOrder,
}
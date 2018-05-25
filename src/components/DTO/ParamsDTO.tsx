import * as ParameterEnums from './Enums/ParameterEnums'

export interface ParamsDTO {
    search: string,
    searchBy: ParameterEnums.EnumSearchBy,
    limit: number,
    sortBy: ParameterEnums.EnumSortBy,
    sortOrder: ParameterEnums.EnumSortOrder
}


export interface ProviderInterface {
    id?: string
    name: string
    address: string
    companyName: string
}
export interface ResponsePagesProvider {
    allProviders: number
    listProviders: ProviderInterface[]
}

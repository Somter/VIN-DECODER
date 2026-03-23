export interface VinVariable {
    Value: string | null;
    ValueId: string | null;
    Variable: string;
    VariableId: number;
}

export interface VinData {
    Count: number;
    Message: string;
    SearchCriteria: string;
    Results: VinVariable[];
}

export interface FullVariable {
    DataType: string;
    Description: string;
    GroupName: string;
    ID: number;
    Name: string;
}

export interface VariableData {
    Count: number;
    Message: string;
    SearchCriteria: string | null;
    Results: FullVariable[];
}
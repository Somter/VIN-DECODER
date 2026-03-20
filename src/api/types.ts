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
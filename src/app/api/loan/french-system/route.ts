import { CalculateLoanParams } from "@/services/loan-calculator/get.loan-calculator.service";
import { NextRequest } from "next/server";
import { calculateLoanAdapter } from "../adapter";
import { axiosInstanceServer } from "../../axios.instance";

const GET = async (req: NextRequest) => {

    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.searchParams);
    const params: CalculateLoanParams = {
        loanDebth: Number(searchParams.get('loanDebth')) as number,
        yearlyInterest: Number(searchParams.get('yearlyInterest')) as number,
        totalYears: Number(searchParams.get('totalYears')) as number,
    }
    const response = await axiosInstanceServer.get<CalculateLoanFrenchSystemResponse>('/loan-calculator/table-french-system', { params }); // Include params object
    if (response.status === 200) {
    const responseAdapted = calculateLoanAdapter(response.data)
        return Response.json({ ...responseAdapted }, { status: 200 })
    } else {
        return Response.json(`API request failed with status: ${response.status}`, { status: response.status });
    }
}

interface CalculateLoanFrenchSystemResponse {
    totalToPay: number,
    monthlyPayment: number;
    amortizationTable: AmortizationTableFrenchSystemResponse[];
}

interface AmortizationTableFrenchSystemResponse {
    month: number;
    payment: number;
    interestPaid: number;
    principalPaid: number;
    remainingBalance: number;
}

export { GET };
export type { CalculateLoanFrenchSystemResponse };

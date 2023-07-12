import { Report } from "src/utils/models"
import { createReport, deleteReport, fetchAllReportsData, fetchReportDataById } from "./repository"
import { v4 as uuid } from 'uuid';

export const fetchAllReports = async () => {
    return await fetchAllReportsData() as Report[];
};

export const fetchReportById = async (id: string) => {
    return await fetchReportDataById(id) as Report;
};

export const createReportService = async (report: Report) => {
    const id = uuid();

    await createReport({id, ...report});

    return await fetchReportById(id);
}

export const deleteReportService = async (id: string) => {
    return await deleteReport(id);
}

export const updateReport = async (report: Report) => {
    await createReport(report);

    return await fetchReportById(report.id);
}

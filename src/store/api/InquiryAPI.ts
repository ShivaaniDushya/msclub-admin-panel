import axios from "axios";
import requestConfig from "./config";
import { IInquiry } from "../../interfaces";
const BASE_URL = process.env.REACT_APP_API_ENDPOINT as string;

class InquiryAPI {
	static getInquiries(): Promise<IInquiry[]> {
		return axios.get(`${BASE_URL}/admin/contact/`, requestConfig);
	}

	static deleteInquiry(inquiryId: string): Promise<IInquiry> {
		return axios.put(`${BASE_URL}/admin/contact/delete/${inquiryId}`, {}, requestConfig);
	}

	static getDeletedInquiries(): Promise<IInquiry[]> {
		return axios.get(`${BASE_URL}/admin/contact/delete/`, requestConfig);
	}
}

export default InquiryAPI;

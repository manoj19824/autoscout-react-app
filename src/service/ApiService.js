import axios from "axios";

const AUTO_SCOUT_API_BASE_URL = "http://localhost:8080/api";

class ApiService {

    getAvgListingSellingPrice() {
        return axios.get(
            AUTO_SCOUT_API_BASE_URL + "/reports/avg-listing-selling-price"
        );
    }

    getDistributions() {
        return axios.get(AUTO_SCOUT_API_BASE_URL + "/reports/distribution");
    }

    getContactListingPerMonth(Id) {
        return axios.get(
            AUTO_SCOUT_API_BASE_URL + "/reports/contact-listings");
    }

    uploadFile(fileData) {
        return axios.post(AUTO_SCOUT_API_BASE_URL + "/csv/upload", fileData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }
}

export default new ApiService();

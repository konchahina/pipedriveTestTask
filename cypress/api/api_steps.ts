import Requests from "./requests";

const request = new Requests();

class ApiSteps {
    logout(company_name: string) {
        request.authLogout(company_name)
    }
}
export default ApiSteps;

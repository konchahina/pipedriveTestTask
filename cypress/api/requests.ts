class Requests {

    authLogout(company_name: string) {
        return cy.request({
            method: 'GET',
            url: `https://${company_name}.pipedrive.com/auth/logout`,
        })
    }
}
export default Requests

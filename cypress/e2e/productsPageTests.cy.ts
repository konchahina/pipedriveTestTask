import ApiSteps from "../api/api_steps"
import { default_password, users } from "../fixtures/credentials"
import { urls } from "../fixtures/pages"
import { products } from "../fixtures/products"
import CommonElements from "../pageObjects/commonElements"
import HeaderComponent from "../pageObjects/headerComponent"
import LoginPage from "../pageObjects/loginPage"
import Product from "../pageObjects/productsPage/productPage"
import ProductsPage from "../pageObjects/productsPage/productsPage"
import SidebarComponent from "../pageObjects/sidebarComponent"

const login_page = new LoginPage()
const sidebar = new SidebarComponent()
const header = new HeaderComponent()
const common_elements = new CommonElements()
const products_page = new ProductsPage()
const product_page = new Product()
const api_steps = new ApiSteps()

describe('Products page. Add new product', () => {
  beforeEach(() => {
    cy.visit(`https://${users.static_user.company}.pipedrive.com/pipeline`)
    login_page.fillLoginFormAndLogin(users.static_user.email, default_password)
    common_elements.waitForPageToLoad()
    
  })
  it('Adding new product via +Product button', () => {
    sidebar.clickOnSidebarItemByText('Products', urls.productsPage.url)
    products_page.clickOnProductButton()
    common_elements.fullfillAddProductForm(products.product1.name, products.product1.product_code, products.product1.category, products.product1.unit, products.product1.billing_frequency, products.product1.unit_price, products.product1.currency.name, products.product1.tax)
    products_page.verifyProductIsAdded(0, products.product1.name, products.product1.product_code)
    products_page.selectProductByName(products.product1.name)
    product_page.verifyProductName(products.product1.name)
    product_page.verifyDetailsSection(products.product1.product_code, products.product1.unit, products.product1.tax, products.product1.category, products.product1.billing_frequency,)
    product_page.verifyPricesSection(products.product1.currency.name_no_code, `${products.product1.currency.symbol}${products.product1.unit_price}`, `${products.product1.currency.symbol}0`, `${products.product1.currency.symbol}0`, '')
  
    product_page.deleteProduct()
    product_page.verifyTextInDeletionMessage()
    product_page.goToPreviousPage()
    cy.reload()
    products_page.verifyProductIsNotPresent(products.product1.name)
  })

  it('Add product modal from header Quick Add button', () => {
    header.clickOnQuickAddButton('Product')
    common_elements.verifyAddProductModalIsOpened()
  })

  afterEach(() => {
    api_steps.logout(users.static_user.company)
  })

})
  /**
   * The other possible test cases are various. All depends on expected coverage, priorities and time consumption 
   * For example as part of regression suite we can add:
   * 1. Some style checking
   * 2. Validation tests for the add product modal
   * 3. Importing products from CSV
   * 4. Exporting products to CSV
   * 5. Checking the product table for sorting and filtering
   * 6. Bulk editing products
   * 7. Attaching to deal
   * 8. Price, Deals, Variations, Files tabs on /product/<number> page
   * 9. Image upload and editing product info on /product/<number> page
   */

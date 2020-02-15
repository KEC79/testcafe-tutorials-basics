import { t } from "testcafe"
import Navbar from "../page-objects/components/Navbar"

const navbar = new Navbar()

export async function login(username, password) {
    await t.click(navbar.signInButton)
    await t.typeText("#user_login", username, { paste:true })
    await t.typeText("#user_password", password, { paste:true })
    await t.click(".btn-primary")
}
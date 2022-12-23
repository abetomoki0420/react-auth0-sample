import { string, object, type TypeOf } from "zod"

const auth0_domain = import.meta.env.VITE_AUTH0_DOMAIN
const auth0_client_id = import.meta.env.VITE_AUTH0_CLIENT_ID

const Auth0ConfigSchema = object({
  domain: string(),
  clientId: string()
})

type Auth0Config = TypeOf<typeof Auth0ConfigSchema>

const config: Auth0Config = {
  domain: auth0_domain,
  clientId: auth0_client_id
}

Auth0ConfigSchema.parse(config);

export default config;
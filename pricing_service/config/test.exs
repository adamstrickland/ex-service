use Mix.Config

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :pricing_service, PricingService.Endpoint,
  http: [port: 4001],
  server: false

# Print only warnings and errors during test
config :logger, level: :warn

# Configure your database
config :pricing_service, PricingService.Repo,
  adapter: Ecto.Adapters.Postgres,
  username: "postgres",
  password: "postgres",
  database: "pricing_service_test",
  size: 1 # Use a single connection for transactional tests

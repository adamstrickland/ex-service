defmodule SearchService.Router do
  use SearchService.Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", SearchService do
    pipe_through :browser # Use the default browser stack
    get "/", PageController, :index
  end

  # Other scopes may use custom stacks.
  scope "/api", SearchService do
    pipe_through :api

    scope "/v1", V1, as: :v1 do
      get "/healthcheck", HealthController, :show

      resources "/searches", SearchController, only: [:create, :show] do
      end
    end
  end

  socket "/events" do
    channel "events:search:*", SearchEventChannel
  end
end

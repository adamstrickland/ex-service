defmodule PricingService.PageController do
  use PricingService.Web, :controller

  plug :action

  def index(conn, _params) do
    render conn, "index.html"
  end
end

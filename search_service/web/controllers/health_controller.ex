defmodule SearchService.V1.HealthController do
  use SearchService.Web, :controller

  plug :action

  def show(conn, _params) do
    render conn, result: "OK"
    # render conn, "OK"
  end
end

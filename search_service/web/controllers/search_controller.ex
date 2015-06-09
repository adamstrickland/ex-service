defmodule SearchService.V1.SearchController do
  use SearchService.Web, :controller

  plug :action

  def create(conn, _params) do
    render conn, search: "OK"
  end
end


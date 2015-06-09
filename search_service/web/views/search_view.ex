defmodule SearchService.V1.SearchView do
  use SearchService.Web, :view

  def render(_, %{search: search}) do
    search
  end
end


